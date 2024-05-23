import React from "react";
import Button from "../common/Button";

function NoitemFound({setSearchParam}) {
  return (
    <div className="mt-14 mx-auto">
      <center>
        <h3 className="text-white font-bold text-3xl mb-5">No Items Found</h3>
        <div onClick={()=> setSearchParam("")}>
          <Button text={"Clear Search"} type={"btn"} />
        </div>
      </center>
    </div>
  );
}

export default NoitemFound;
