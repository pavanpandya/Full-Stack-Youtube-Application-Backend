import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

// Second Approach - Recommended
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("\nMongoDB Connected!! DB Host: ", connectionInstance.connection.host);
    } catch (error) {
        console.error("MongoDB Connection Error: ", error);
        process.exit(1); // ToDo: Research about this.
    }
}

export default connectDB;