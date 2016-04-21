import React from 'react';

// we can import props if ({keyword}) is used instead of (props)
const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading...</div>;
    }

    // youtube video url is the same for all videos, only ID is different
    const videoId = video.id.videoId;
    //const url = 'https://www.youtube.com/embed/' + videoId; ***string interpellation***
    const url = `https://www.youtube.com/embed/${videoId}`;


    return (
        <div className="video-detail col-md-8">

            <div className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item" src={url}></iframe>
            </div>

            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>

        </div>
    );
};

export default VideoDetail;