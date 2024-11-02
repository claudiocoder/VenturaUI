import React from "react";

const SocialMediaShare = () => {
  return (
    <div className="mb-5 font-bold">
      <div className="flex justify-end w-full">
        <div>
          <a
            className="twitter-share-button"
            href="https://twitter.com/share?ref_src=twsrc%5Etfw"
            data-size="large"
            data-show-count="true"
          >
            Compartir en X
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaShare;
