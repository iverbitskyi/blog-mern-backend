import mongoose from 'mongoose';

// створюється схема, де прописані всі дії, які є в користувача
const UserSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        passwordHash: {
            type: String,
            required: true,
        },
        avatarUrl: String,
    },
    {
        timestamps: true,
    },
);

export default mongoose.model('User', UserSchema);