import mongoose from 'mongoose'
const multer  = require('multer')
const connection = {}

async function dbConnect() {
    if (connection.isConnected) {
        console.log('Database is already connected');
        return;
    }

    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    connection.isConnected = db.connections[0].readyState
}
//image storage engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname + '-' + Date.now())
    }
})

const upload = multer({storage: storage})



export default dbConnect;