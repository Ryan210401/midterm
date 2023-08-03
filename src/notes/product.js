//import mongoDB
import mongoose from "mongoose";

const productSpecification = new mongoose.Schema({
    _id: { type: Number, required: true },
    video_id: { type: Number, required: true },
    url: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true }
}, {timestamps: true});

export const product = mongoose.model('product', productSpecification);