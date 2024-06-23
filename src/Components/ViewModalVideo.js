import React from "react";
import ModalVideo from "react-modal-video";

const ViewModalVideo = ({ isOpen, handleClose }) => {
  return (
    <div className={`modal ${isOpen === true ? "open" : ""}`}>
      <div className="border-2">
        <ModalVideo
          channel="youtube"
          youtube={{ mute: 0, autoplay: 0 }}
          classNames='w-full h-full '
          isOpen={isOpen}
          videoId="L61p2uyiMSo"
          onClose={handleClose}
        />
      </div>
    </div>
  );
};

export default ViewModalVideo;
