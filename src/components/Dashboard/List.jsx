import React from "react";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { motion } from "framer-motion";
import { Tooltip } from "@mui/material";
import { convertNumber } from "../../functions/convertNumber";
import { Link } from "react-router-dom";

function List({ coin }) {
  return (
    <Link to={`/coin/${coin.id}`}>
      <tr className="flex mx-auto md:w-auto w-[95vw] justify-between items-center md:mx-[1.5rem] hover:bg-darkgrey py-3 md:px-6 px-5 rounded-xl cursor-pointer">
        <td className="flex justify-start items-center gap-3 md:gap-[3rem] text-center w-[18%]">
          <Tooltip title="Logo">
            <img
              className="w-[30px] h-[30px] md:w-[2.7rem]  md:h-[2.7rem]"
              src={coin.image}
              alt="coin logo"
            />
          </Tooltip>
          <div>
            <Tooltip title="Symbol">
              <p className="uppercase md:text-base text-xs font-semibold text-left">
                {coin.symbol}
              </p>
            </Tooltip>

            <Tooltip title="Name">
              <p className="text-grey md:text-[11px] text-[8px] mt-1 text-left w-max ">
                {coin.name}
              </p>
            </Tooltip>
          </div>
        </td>

        <td className="text-left w-[9%] md:w-[18%] md:ms-[4rem] ms-3  items-center flex">
          <div className="flex gap-5 items-center">
            {coin.price_change_percentage_24h > 0 ? (
              <div className="border-green border-[1px] md:border-[2px] text-[10px] md:h-auto h-[20px] items-center flex justify-center  w-[45px] md:w-[80px] rounded-2xl md:px-4 py-1 font-semibold md:rounded-[20px] md:text-sm text-green hover:bg-green hover:text-white">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
            ) : (
              <div className="border-red border-[1px] md:border-[2px] text-[10px] md:h-auto h-[20px] items-center flex justify-center w-[45px] md:w-[80px] rounded-2xl md:px-4 py-1 font-semibold md:rounded-[20px] md:text-sm text-red hover:bg-red hover:text-white">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
            )}
            {coin.price_change_percentage_24h > 0 ? (
              <div className="border-green border-[2px] rounded-full text-green p-[5px] hidden md:flex items-center hover:text-white hover:bg-green">
                <TrendingUpIcon fontSize="small" />
              </div>
            ) : (
              <div className="border-red border-[2px] rounded-full text-red p-[5px] hidden md:flex items-center hover:text-white hover:bg-red">
                <TrendingDownIcon fontSize="small" />
              </div>
            )}
          </div>
        </td>
        <Tooltip title="Price Change % in 24H">
          <td className="text-left w-[9%] md:w-[18%] md:hidden mobile">
            {coin.price_change_percentage_24h > 0 ? (
              <h3 className="text-green font-bold text-[11px] text-left">
                ${convertNumber(coin.current_price)}
              </h3>
            ) : (
              <h3 className="text-red font-bold text-[11px] text-left">
                ${convertNumber(coin.current_price)}
              </h3>
            )}
          </td>
        </Tooltip>
        <Tooltip title="Current Price">
          <td className="text-center w-[9%] md:w-[18%] hidden md:block md:ms-[3rem] desktop">
            {coin.price_change_percentage_24h > 0 ? (
              <h3 className="text-green font-bold md:text-base text-xl text-left">
                ${coin.current_price.toLocaleString()}
              </h3>
            ) : (
              <h3 className="text-red font-bold md:text-base text-xl text-left">
                ${coin.current_price.toLocaleString()}
              </h3>
            )}
          </td>
        </Tooltip>

        <td className="w-[9%] md:w-[18%] text-center">
          <Tooltip title="Total Volume">
            <p className="text-white text-sm md:text-[14px] hidden md:block  text-right desktop">
              ${coin.total_volume.toLocaleString()}
            </p>
          </Tooltip>
          <Tooltip title="Total Volume">
            <p className="text-white text-[10px] md:hidden  text-right mobile">
              ${convertNumber(coin.total_volume)}
            </p>
          </Tooltip>
        </td>

        <td className="w-[9%] md:w-[18%] text-center">
          <Tooltip title="Market Cap">
            <p className="text-white text-sm md:text-[14px] hidden md:block  text-right desktop">
              ${coin.market_cap.toLocaleString()}
            </p>
          </Tooltip>
          <Tooltip title="Market Cap">
            <p className="text-white text-[10px]  md:hidden  text-right mobile">
              ${convertNumber(coin.market_cap)}
            </p>
          </Tooltip>
        </td>
      </tr>
    </Link>
  );
}

export default List;
