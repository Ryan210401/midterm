import { comment } from "../models/commentsModels.js";
import numberID from "../addition/numberID.js";

export const getCommentList = async (video_id) => {
    const data = await comment.find({video_id: video_id});
    return data;
}

export const submitComment = async (video_id, username, comment) => {
    const _id = numberID();
    try {
        const newComment = new comment({
            _id,
            video_id,
            username,
            comment
        });
        await newComment.save();
        return { success: true }
    } catch (error) {
        return { success: false }
    }
}