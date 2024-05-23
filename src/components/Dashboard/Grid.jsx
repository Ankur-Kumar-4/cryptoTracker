import React from "react";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { motion } from "framer-motion";

function Grid({ coin }) {
  return (
    <motion.div
      className={
        coin.price_change_percentage_24h > 0
          ? "w-[300px] h-[300px] md:w-[240px] flex flex-col justify-center md:h-[240px] bg-darkgrey border-[2px] border-darkgrey rounded-xl ps-5 hover:border-[1.5px] hover:border-green transition-all delay-75 duration-200"
          : "w-[300px] h-[300px] md:w-[240px] flex flex-col justify-center md:h-[240px] bg-darkgrey border-[2px] border-darkgrey rounded-xl ps-5 hover:border-[1.5px] hover:border-red transition-all delay-75 duration-200"
      }
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="flex justify-start items-center gap-7 md:gap-[1rem]">
        <img
          className="w-[70px] h-[70px] md:w-[3.1rem]  md:h-[3.1rem]"
          src={coin.image}
          alt="coin logo"
        />
        <div>
          <p className="uppercase md:text-base text-xl font-semibold">
            {coin.symbol}
          </p>
          <p className="text-grey md:text-xs mt-1">{coin.name}</p>
        </div>
      </div>
      <div className="flex gap-5 items-center mt-7">
        {coin.price_change_percentage_24h > 0 ? (
          <div className="border-green border-[2px] w-min px-4 py-1 font-semibold rounded-[20px] md:text-sm text-green hover:bg-green hover:text-white">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
        ) : (
          <div className="border-red border-[2px] w-min px-4 py-1 font-semibold rounded-[20px] md:text-sm text-red hover:bg-red hover:text-white">
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
      <div className="md:mt-4 mt-5">
        {coin.price_change_percentage_24h > 0 ? (
          <h3 className="text-green font-bold md:text-base text-xl">
            ${coin.current_price.toLocaleString()}
          </h3>
        ) : (
          <h3 className="text-red font-bold md:text-base text-xl">
            ${coin.current_price.toLocaleString()}
          </h3>
        )}
      </div>
      <div className="mt-4">
        <p className="text-grey text-sm md:text-[11px] font-semibold">
          Total Volume :{coin.total_volume.toLocaleString()}
        </p>
        <p className="text-grey text-sm md:text-[11px] font-semibold mt-1">
          Market Cap : ${coin.market_cap.toLocaleString()}
        </p>
      </div>
    </motion.div>
  );
}

export default Grid;
