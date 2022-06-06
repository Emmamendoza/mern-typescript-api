import { RequestHandler } from 'express';
import { url } from 'inspector';
import Video from './Video';

export const getVideos: RequestHandler = async (req, res) => {
    try {
        const videos = await Video.find()
        return res.json(videos);
    } catch (error) {
        res.json(error);
    }
};

export const getVideo: RequestHandler = async (req, res) => {
    
    const videoFound = await Video.findById(req.params.id);

    if(!videoFound) return res.status(204).json();

    return res.json(videoFound);
};

export const createVideo: RequestHandler = async (req, res) => {

    const videoFound = await Video.findOne({url: req.body.url});
    if(videoFound) {
        return res.status(301).json({message: 'The URL already exists'});
    }

    const video = new Video(req.body)
    console.log(video);
    const savedVideo = await video.save()
    return res.json(savedVideo);
};

export const updateVideos: RequestHandler = async (req, res) =>{
    const videoUpdated = await Video.findByIdAndUpdate(req.params.id, req.body, {new: true});

    if(!videoUpdated) return res.status(204).json();
    
    return res.json(videoUpdated);
};

export const deleteVideos: RequestHandler = async (req, res) =>{

    const deletedVideo = await Video.findByIdAndDelete(req.params.id);

    if(!deletedVideo) return res.status(204).json();

    return res.json(deletedVideo);
};