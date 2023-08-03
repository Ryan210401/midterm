import {video} from "../notes/videoThumbnail.js";

export const getListVideo = async () =>{
    let data = await video.find();
    return data;
}