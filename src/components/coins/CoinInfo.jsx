import React, { useState } from "react";

function CoinInfo({ coinData }) {
  const shortDesc = coinData.desc.slice(0, 350) + `<p> Read More...<p/>`;
  const longDesc = coinData.desc + `<p> Read Less...<p/>`;
  const [paraSize, setParaSize] = useState(true);
  return (
    <div className=" text-white bg-darkgrey mt-4 md:w-[93%] w-[95%] mx-auto rounded-xl px-4 py-4 mb-5">
      <h3 className="font-bold text-xl mb-4 ">{coinData.name}</h3>
      {coinData.desc.length > 350 ? (
        <p
          onClick={() => setParaSize(!paraSize)}
          className="desc-anchor text-[0.8rem]"
          dangerouslySetInnerHTML={{ __html: paraSize ? shortDesc : longDesc }}
        ></p>
      ) : (
        <p dangerouslySetInnerHTML={{ __html: coinData.desc }} />
      )}
    </div>
  );
}

export default CoinInfo;
