const mongoose = require('mongoose');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        mongoose.connect(process.env.MONGO_URI, options).then(() =>
            console.log("Mongo connected"));
    } catch (e) {
        console.log(e);
        process.exit();
    }
}

module.exports = connectDB;