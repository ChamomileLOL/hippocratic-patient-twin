// db.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // "I will fulfill according to my ability and judgment"
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connection established: Purity and Holiness guarded.");
    } catch (err) {
        // "I will not be ashamed to say 'I know not'"
        console.error("Infrastructure failure: Technical intervention required.", err);
        process.exit(1); // Stop the system if it cannot act for the "benefit of the sick"
    }
};

module.exports = connectDB;