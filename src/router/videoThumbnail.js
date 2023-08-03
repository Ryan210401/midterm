import express from 'express';
import {getListVideo} from './handler/videoThumbnail.js';

const videoRoute = express.Router()

videoRoute.get('/', getListVideo);

export default videoRoute;