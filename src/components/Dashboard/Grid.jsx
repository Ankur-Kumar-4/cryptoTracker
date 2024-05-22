import React from "react";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

function Grid({ coin }) {
  console.log(coin);
  return (
    <div className="w-[240px] flex flex-col justify-center h-[240px] bg-darkgrey border-[2px] border-darkgrey rounded-xl ps-5">
      <div className="flex justify-start items-center gap-[1rem]">
        <img
          className="w-[3.1rem] h-[3.1rem]"
          src={coin.image}
          alt="coin logo"
        />
        <div>
          <p className="uppercase font-semibold">{coin.symbol}</p>
          <p className="text-grey text-xs mt-1">{coin.name}</p>
        </div>
      </div>
      <div className="flex gap-5 items-center mt-7">
        {coin.price_change_percentage_24h > 0 ? (
          <div className="border-green border-[2px] w-min px-4 py-1 font-semibold rounded-[20px] text-sm text-green hover:bg-green hover:text-white">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
        ) : (
          <div className="border-red border-[2px] w-min px-4 py-1 font-semibold rounded-[20px] text-sm text-red hover:bg-red hover:text-white">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
        )}
        {coin.price_change_percentage_24h > 0 ? (
          <div className="border-green border-[2px] rounded-full text-green p-[5px] flex items-center hover:text-white hover:bg-green">
            <TrendingUpIcon fontSize="small" />
          </div>
        ) : (
          <div className="border-red border-[2px] rounded-full text-red p-[5px] flex items-center hover:text-white hover:bg-red">
            <TrendingDownIcon fontSize="small" />
          </div>
        )}
      </div>
      <div className="mt-4">
        {coin.price_change_percentage_24h > 0 ? (
          <h3 className="text-green">${coin.current_price.toLocaleString()}</h3>
        ) : (
          <h3 className="text-red">${coin.current_price.toLocaleString()}</h3>
        )}
      </div>
      <div className="mt-4">
        <p className="text-grey text-[11px] font-semibold">
          Total Volume :{coin.total_volume.toLocaleString()}
        </p>
        <p className="text-grey text-[11px] font-semibold mt-1">
          Market Cap : ${coin.market_cap.toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default Grid;
