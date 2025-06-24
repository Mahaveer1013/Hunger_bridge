import mongoose, { Schema, Document } from 'mongoose';

// User roles: venue, ngo, volunteer
export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    role: 'venue' | 'ngo' | 'volunteer';
}

const UserSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['venue', 'ngo', 'volunteer'], required: true }
});

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
