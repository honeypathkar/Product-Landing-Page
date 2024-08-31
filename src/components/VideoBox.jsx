import React from "react";

function VideoBox() {
  return (
    <div className="mt-10 flex justify-center">
      <iframe
        className="w-[90%] h-[200px] sm:w-[100%] sm:h-[300px] md:w-[75%] md:h-[350px] lg:w-[800px] lg:h-[400px]"
        src="https://www.youtube.com/embed/Sm9r_Zs2z6s"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoBox;
