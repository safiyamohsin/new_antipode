const mongoose = require("mongoose")

// const mongoDbUrl='mongodb+srv://codewithzosh:lognBCBmtWNPjrKC@cluster0.wvt9jpw.mongodb.net/?retryWrites=true&w=majority'
const mongoDbUrl='mongodb+srv://khushidharwad:khushi123@cluster0.3yda6j4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}

// import mongoose from 'mongoose'
// const mongoDbUrl='mongodb+srv://khushidharwad:khushi123@cluster0.3yda6j4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
// const connectDb = async () => {
//     try {
//         const conn = await mongoose.connect(mongoDbUrl, {
//                 useNewUrlParser: true,
//                 useCreateIndex: true,
//                 useFindAndModify: false,
//                 useUnifiedTopology: true
//             })
//             console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
//     } catch (error) {
//         console.error(`Error: ${error.message}`.red.underline.bold)
//         process.exit(1)
//     }
// }

// export default connectDB;
module.exports={connectDb}