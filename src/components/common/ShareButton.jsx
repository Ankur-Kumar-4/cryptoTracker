import React from "react";

import { RWebShare } from "react-web-share";

function ShareButton() {
  return (
    <div>
      <RWebShare
        data={{
          text: "Like humans, flamingos make friends for life",
          url: "https://on.natgeo.com/2zHaNup",
          title: "Flamingos",
        }}
        onClick={() => console.log("shared successfully!")}
      >
        <button className="min-w-[130px] outline-blue outline rounded-3xl px-7 py-[9px] text-white font-semibold text-sm hover:bg-blue capitalize ">
          Share
        </button>
      </RWebShare>
    </div>
  );
}

export default ShareButton;
