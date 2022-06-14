import mongoose, { ConnectOptions } from 'mongoose';
import config from './config';

const { NODE_ENV } = process.env

const connectionDB = NODE_ENV === 'test' ? config.MONGO_DATABASE_TEST : config.MONGO_DATABASE;

(async () => {
    const mongooseOptions: ConnectOptions = {
        user: config.MONGO_USER,
        pass: config.MONGO_PASSWORD
    }

    const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${connectionDB}`);
    console.log('Database is connected to: ', db.connection.name );
})()
