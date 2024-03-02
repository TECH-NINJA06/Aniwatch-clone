import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})


const cloudinaryUpload = async (localFilePath) => {
    try {

        if (!localFilePath) {
            return null;
        }
        //upload file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto'

        })
        console.log("file uploaded successfully" + response.url);
        
        fs.unlinkSync(localFilePath);
        
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) //remove temporary saved file
        return null;
        console.log("Error occured at cloudinary js  " + error);
    }

}

export default cloudinaryUpload;


// cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" }, 
//   function(error, result) {console.log(result); });