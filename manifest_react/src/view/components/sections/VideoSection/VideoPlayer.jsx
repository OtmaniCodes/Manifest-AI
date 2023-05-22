import React from 'react';
import HlsPlayer from 'react-hls-player';

class VideoPlayer extends React.Component {
    render() {
        return (
            <HlsPlayer
                url={`${import.meta.env.VITE_SERVER_URL}/api/stream/manifest.mp4`}
                autoplay={true}
                controls={true}
                width="100%"
                height="auto"
            />
        );
    }
}

export default VideoPlayer;
