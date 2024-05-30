import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function BackToTopBtn() {
  let mybutton = document.getElementById("TopBtn");
  window.onscroll = function () {
    scrollFunction();
  };
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  function scrollFunction() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      mybutton.style.display = "flex";
    } else {
      mybutton.style.display = "none";
    }
  }

  return (
    <div
      onClick={() => topFunction()}
      id="TopBtn"
      className="fixed flex justify-center items-center rounded-full w-[2.5rem] h-[2.5rem] border-[2px] border-blue bottom-6 right-3 cursor-pointer"
    >
      <ArrowUpwardIcon
        style={{
          color: "var(--blue)",
        }}
      />
    </div>
  );
}

export default BackToTopBtn;
