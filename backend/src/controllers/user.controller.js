import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js"
import cloudinaryUpload from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";


const generateTokens = async(userId) => {
    try {
        const user = await User.findById(userId)

        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false})

        return { accessToken, refreshToken }

    } catch (error) {
        throw new ApiError(500, "Access and Refresh tokens couldnt be generated")
    }
};


const registerUser = asyncHandler( async (req, res) => {
    const {fullName, email, username, password } = req.body

    //validate email
     if (email=== "") {
         throw new ApiError(400, "Email is required")
     }
     if (fullName=== "") {
        throw new ApiError(400, "FullName is required")
    }
    if (password=== "") {
        throw new ApiError(400, "Password is required")
    }
    if (username=== "") {
        throw new ApiError(400, "Username is required")
    }

    // if (email && password && username === "") {
    //     throw new ApiError(400, "All Fields are required")
    // }

   const existedUser = await User.findOne({
        $or: [{username}, {email}]
    })

    // const existedUser = await User.findOne({email}) also works

    if (existedUser) {
        throw new ApiError(409, "User already exists");
    }

    //avatar check
    const avatarLocalPath = req.files?.avatar[0]?.path;
    // const coverImageLocalPath = req.files?.coverImage[0]?.path;
    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar image is required" )
    }

    let coverImageLocalPath;
    if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
        coverImageLocalPath = req.files.coverImage[0].path;
    }

    

   const avatar = await cloudinaryUpload(avatarLocalPath)
   const coverImage = await cloudinaryUpload(coverImageLocalPath)
   console.log("avatarUrl: " + avatar.url)

    if (!avatar) {
        throw new ApiError(400, "Avatar file is required");
    }

    const user = await User.create({
        fullName,
        email,
        password,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        username
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user")

    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User created successfully")
    )

})

const loginUser = asyncHandler( async (req, res) => {
    const { email, username, password } = req.body;

    if (!email || !username) {
        throw new ApiError(400, "username or email is required")
    }

    const user = await User.findOne({
        $or: [{username}, {email}]
    })

    if (!user) {
        throw new ApiError(404, "User not found")
    }

    const isPasswordValid = await user.isPasswordCorrect(password);

    if (!isPasswordValid) {
        throw new ApiError(401, "Password incorrect")
    }

    const {accessToken, refreshToken} = await generateTokens(user._id);

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(200, {
            user: loggedInUser, accessToken, refreshToken
        }, "User logged in successfully")
    )

})

const logoutUser = asyncHandler (async(req, res) => {
    User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                refreshToken: undefined,
            }  
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res.status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged Out Successfully"))
})

const getUserProfile = asyncHandler (async(req, res) => {
    const { username } = req.params

    if (!username?.trim()) {
        throw new ApiError(402, "Username not found")
    }

    const channel = await User.aggregate([
        {
            $match: {
                username: username
            }
        },
        {
            $lookup: {
                from: "subscriptions",
                localField: "_id",
                foreignField: "channel",
                as: "subscribers"
            }
        },
        {
            $lookup: {
                from: "subscriptions",
                localField: "_id",
                foreignField: "subscriber",
                as: "subscribedTo"
            }
        },
        {
            $addFields: {
                subscriberCount: {
                    $size: "$subscribers"
                },
                channelsSubscribedTo: {
                    $size: "$subscribedTo"
                },
                isSubscribed: {
                    $cond: {
                        if: {
                            $in: [req.user?._id, "$subscribers.subscriber"]
                        },
                        then: true, 
                        else: false
                    }
                }
            }
        },
        {
            $project: {
                fullName: 1,
                username: 1,
                subscriberCount: 1,
                channelsSubscribedTo: 1,
                isSubscribed: 1,
                avatar: 1,
                coverImage: 1,
                email: 1
            }
        }
    ])
    console.log(channel)

    if (!channel?.length) {
        throw new ApiError(404, "Channel does not Exist")
    }

    return res
    .status(200)
    .json(
        new ApiResponse(200, chsnnel[0], "User channel created")
    )
})



export { registerUser, loginUser, logoutUser }