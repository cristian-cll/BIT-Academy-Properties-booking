const mongoose = require ("mongoose");

const {MONGO_HOST, MONGO_PWD, MONGO_DB, MONGO_USER} = process.env;
const MONGODB_URI = `mongodb+srv://${MONGO_USER}:${MONGO_PWD}@${MONGO_HOST}/${MONGO_DB}?retryWrites=true&w=majority`



exports.connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log(`MongoDB connected on ${MONGO_DB} database`);
    } catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
};


    //MONGODB_URI = "mongodb+srv://root:1234@cluster0.5hy5l.mongodb.net/?retryWrites=true&w=majority";