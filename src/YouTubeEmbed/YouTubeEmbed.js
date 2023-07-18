import React from "react";
import PropTypes from "prop-types";
import './YouTubeEmbed.css';


const YouTubeEmbed = ({ embedId }) => {  
  return (
    <div className="video-responsive">
      <iframe
        width='300'
        src={`https://www.youtube.com/embed/${embedId}?&showinfo=0&controls=0`}
        allow="autoplay; picture-in-picture"
        title="Embedded youtube"
        loading="lazy"
      />
    </div>  
  )
};

YouTubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YouTubeEmbed;