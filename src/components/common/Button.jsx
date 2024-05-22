import React from "react";

function Button({ text, type }) {
  return (
    <button
      className={
        type == "btn"
          ? "min-w-[130px] bg-blue px-7 py-[9px] rounded-3xl text-white font-semibold text-sm hover:shadow-lg transition-shadow delay-200 ease-in duration-100 capitalize "
          : "min-w-[130px] outline-blue outline rounded-3xl px-7 py-[9px] text-white font-semibold text-sm hover:bg-blue capitalize "
      }
    >
      {text}
    </button>
  );
}

export default Button;
