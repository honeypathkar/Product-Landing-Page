import React from "react";

function VideoBox() {
  return (
    <div className="mt-10">
      <iframe
        width="200%"
        height="315"
        src="https://www.youtube.com/embed/Sm9r_Zs2z6s"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoBox;
