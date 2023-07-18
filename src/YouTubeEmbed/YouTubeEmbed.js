import React, { useState } from "react";
import PropTypes from "prop-types";
import './YouTubeEmbed.css';
import { Spinner } from "../Components/Spinner/Spinner";


const YouTubeEmbed = ({ embedId }) => {
  const [load, setLoad] = useState(false);
  
  const loaded = () => {
    setLoad(true)
  }
  
  return (
    <div className="video-responsive">
      <iframe
        onLoad={loaded}
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