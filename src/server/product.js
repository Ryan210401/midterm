import { product } from "../notes/product.js";

export const getProductList = async (video_id) => {
    let data = await product.find({ video_id:  video_id});
    return data;
}