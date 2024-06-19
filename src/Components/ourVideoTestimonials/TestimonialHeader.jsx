import React from "react";

const VideoTestimonilaHeader = ({ourWhat, headerCaption}) => {
  return (
    <>
      <div>
        <h1 className="">{ ourWhat }</h1>
        <p className="fs-5">
          {headerCaption}
        </p>
      </div>
    </>
  );
};

export default VideoTestimonilaHeader;
