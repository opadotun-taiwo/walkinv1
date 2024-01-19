import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI

/* find a cached connection if not set it to null i.e empty*/
let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
    if (cached.conn) return cached.conn;

    if(!MONGODB_URI) throw new Error('MONGODB_URI is missing')

    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
        dbName: 'walkin',
        bufferCommands: false,
    })

    cached.conn = await cached.promise;

    return cached.conn;
}