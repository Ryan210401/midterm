import express from 'express';
import { getCommentList, submitComment } from './handler/comment.js';
import { body } from 'express-validator';

const commentsRoute = express.Router();

commentsRoute.get('/:id', getCommentList);
commentsRoute.post('/', [
    body('video_id').notEmpty().withMessage('video_id is requied').isInt().withMessage('video_id must be a Integer'),
    body('username').notEmpty().withMessage('username is required').isString().withMessage('username must be a string'),
    body('comment').notEmpty().withMessage('comment is required').isString().withMessage('comment must be a string')
], submitComment);

export default commentsRoute;