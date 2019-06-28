import React, { useState, useEffect } from 'react';

const VideoStats = ({ videoId }) => {
  const [state, setState] = useState({
    stats: [],
    loaded: false
  });

  useEffect(() => {
    const videoUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${
      process.env.YOUTUBE_API_KEY
    }`;

    fetch(videoUrl)
      .then(res => res.json())
      .then(res => setState({ stats: res.items[0].statistics, loaded: true }));
  }, []);

  const { likeCount, viewCount } = state.stats;
  return (
    <div>
      {state.loaded ? (
        <div style={{ fontFamily: 'Roboto Slab' }}>
          {viewCount} Views | {likeCount} Likes
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default VideoStats;
