import React from 'react';

const VideoPlayer = ({ src, title }) => (
  <video
    controls
    width="100%"
    title={title}
  >
    <source src={src} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);

export default VideoPlayer;