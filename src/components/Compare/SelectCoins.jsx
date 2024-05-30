import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import { get100Coins } from "../../functions/get100Coins";

export default function SelectCoins({ crypto1, crypto2, handleCoinChange }) {
  const [allCoins, setAllCoins] = useState([]);
  const style = {
    height: "2.5rem",
    color: "var(--white)",
    fontWeight: 500,
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--blue)",
      borderWidth: 1.3,
    },
    "& .MuiSvgIcon-root": {
      color: "var(--white)",
    },
    "&:hover": {
      "&& fieldset": {
        borderColor: "#3a80e9",
      },
    },
  };
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const coins100 = await get100Coins();
    setAllCoins(coins100.data);
  };

  return (
    <div className="w-max flex items-center gap-4 md:mb-4 mb-8 text-white">
      <h3> Crypto 1 </h3>
      <Select
        sx={style}
        value={crypto1}
        label="Age"
        onChange={(event) => handleCoinChange(event, false)}
      >
        {allCoins
          .filter((item) => item.id != crypto2)
          .map((coin, index) => (
            <MenuItem key={index} value={coin.id}>
              {coin.name}
            </MenuItem>
          ))}
      </Select>
      <h3> Crypto 2 </h3>
      <Select
        sx={style}
        value={crypto2}
        label="Age"
        onChange={(event) => handleCoinChange(event, true)}
      >
        {allCoins
          .filter((item) => item.id != crypto1)
          .map((coin, index) => (
            <MenuItem key={index} value={coin.id}>
              {coin.name}
            </MenuItem>
          ))}
      </Select>
    </div>
  );
}
