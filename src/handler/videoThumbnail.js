//import function getListVideo from folder server
import {getListVideo} from "../server/videoThumbnail.js"

export const getListVideo = async (req, res) => {
    try {
        const listVideo = await getListVideo();
        res.status(200).json({
            message: 'Success fetch the video ',
            data : listVideo
        });
    } catch (error) {
        res.status(500).json({ error: 'server error' });
    }
}
