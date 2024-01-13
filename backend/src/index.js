import dotenv from 'dotenv';
import dbConnect from "./db/index.js";
import app from './app.js';
import { port } from './constants.js';

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
