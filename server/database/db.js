import mongoose from 'mongoose';

import dotenv from 'dotenv';

dotenv.config();

const Connection = async () => {
    const URL = process.env.DB_URL;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true,useUnifiedTopology:true, })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
        process.exit(1);
    }
};

export default Connection;