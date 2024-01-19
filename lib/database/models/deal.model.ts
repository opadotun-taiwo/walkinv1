import { Schema, model, models } from "mongoose";

export interface IDeals extends Document {
    _id: string;
    title: string;
    businessName: string;
    description?: string;
    createdAt: Date;
    imageUrl: string;
    startDateTime: Date;
    endDateTime: Date;
    price?: string;
    quorum?: number;
    state?: string;
    Address?: string;
    commission: number;
    isFree: boolean;
    url?: string;
    category: {_id: string, name: string};
    organizer: {_id: string, firstName: string, lastName: string};
    
}

const DealSchema = new Schema({
    title: {type: String, required: true},
    businessName: {type: String, required: true},
    description: {type: String},
    createdAt: {type: Date, default: Date.now},
    imageUrl: {type: String, required: true},
    startDateTime: {type: Date, default: Date.now},
    endDateTime: {type: Date, default: Date.now},
    price: {type: String },
    quorum: {type: Number},
    state: {type: String},
    Address: { type: String },
    commission: { type: Number, default: 0.03 },
    isFree: {type: Boolean, default: false},
    url: {type: String},
    category: {type: Schema.Types.ObjectId, ref: 'Category' },
    organizer: {type: Schema.Types.ObjectId, ref: 'User'}
})


const Deal = models.Deal || model('Deal', DealSchema)

export default Deal;

