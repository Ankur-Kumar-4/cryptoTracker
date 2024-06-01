import React, { useEffect, useRef } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function BackToTopBtn() {
  const buttonRef = useRef(null);

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      if (buttonRef.current) {
        buttonRef.current.style.display = "flex";
      }
    } else {
      if (buttonRef.current) {
        buttonRef.current.style.display = "none";
      }
    }
  };

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    window.onscroll = scrollFunction;
    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <div
      onClick={topFunction}
      ref={buttonRef}
      id="TopBtn"
      className="fixed flex justify-center items-center rounded-full w-[2.5rem] h-[2.5rem] border-[2px] border-blue bottom-6 right-3 cursor-pointer"
      style={{ display: "none" }} // Initially hide the button
    >
      <ArrowUpwardIcon
        sx={{
          color: "var(--blue)",
        }}
      />
    </div>
  );
}

export default BackToTopBtn;
