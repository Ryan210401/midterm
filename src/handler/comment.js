import { getCommentList, submitComment } from "../server/comment.js";
import { validation } from "express-validator";

export const getCommentList = async (req, res) => {
    const {id} = req.params;
    try {
        const commentList = await getCommentList(parseInt(id));
        
        if(commentList.length === 0) {
            return res.status(404).json({
                message: 'Failed to fecth comment',
                error: `comment list with video id ${id} not found`
            });
        }

        res.status(200).json({
            message: 'Success fetch the comment',
            data: commentList
        });
    } catch (error) {
        res.status(500).json({ error: "server error" });
    }
}

export const submitComment = async (req, res) => {
    const errors = validation(req);
    if(!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const {video_id, username, comment} = req.body;

    try {
        const result = await submitComment(video_id, username, comment);
        if(result.success) return res.status(201).json({ message: 'Comment submited success!' });
        else return res.status(400).json({message: result.success});
    } catch (error) {
        res.status(500).json({ error: 'server error' });
    }
}