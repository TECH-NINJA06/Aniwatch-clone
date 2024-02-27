import dotenv from 'dotenv'
import dbConnect from './db'
import { port } from './constants'
import app from './app'





dotenv.config({
    path: './env'
})

dbConnect()
.then(() => {
    app.listen(port, () => {
        console.log(`Server listening on ${port}`)
    })
}
)
.catch((error) => {
    console.log('Mongo connection failed at index.js' + error.message)
})