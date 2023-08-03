//import mongoDB
import mongoose from "mongoose";

const videoSpecification = new mongoose.Schema({
    _id: { type: Number, required: true },
    title: { type: String, required: true },
    img_url: { type: String, required: true },
  }, {timestamps: true});
  
export const video = mongoose.model('video', videoSpecification);