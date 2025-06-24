import mongoose, { Schema, Document } from 'mongoose';

// Donation status types
export type DonationStatus = 'available' | 'claimed' | 'pickedup' | 'delivered';

// Donation document interface
export interface IDonation extends Document {
    venueId: Schema.Types.ObjectId;
    foodType: string;
    quantity: number;
    description: string;
    status: DonationStatus;
    pickupWindowStart: Date;
    pickupWindowEnd: Date;
}

const DonationSchema = new Schema<IDonation>({
    venueId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    foodType: { type: String, required: true },
    quantity: { type: Number, required: true },
    description: { type: String, required: true },
    status: {
        type: String,
        enum: ['available', 'claimed', 'pickedup', 'delivered'],
        default: 'available'
    },
    pickupWindowStart: { type: Date, required: true },
    pickupWindowEnd: { type: Date, required: true },
}, { timestamps: true });

export default mongoose.models.Donation || mongoose.model<IDonation>('Donation', DonationSchema);
