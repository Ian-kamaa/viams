import React from 'react';

type VideoPlayerProps = {
  src: string;
  title: string;
  autoplay?: boolean;
  muted?: boolean;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, title, autoplay = false, muted = false }) => (
  <video
    controls
    width="100%"
    title={title}
    autoPlay={autoplay}
    muted={muted}
  >
    <source src={src} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);

export default VideoPlayer;