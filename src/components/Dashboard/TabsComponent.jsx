import { React, useEffect, useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Grid from "./Grid";
import List from "./List";

export default function TabsComponent({ coins }) {
  const [value, setValue] = useState("1");
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) ?? []
  );

  const handleWishlistToggle = (coinId) => {
    let newWishlist = [...wishlist];
    if (wishlist.includes(coinId)) {
      newWishlist = wishlist.filter((id) => id !== coinId);
    } else {
      newWishlist.push(coinId);
    }
    setWishlist(newWishlist);
  };
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const style = {
    color: "var(--white)",
    textTransform: "capitalize",
    fontWeight: 600,
  };
  const stylePanel = {
    padding: "2px",
  };
  return (
    <div className="bg-black text-white mt-3">
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label="lab API tabs example"
          variant="fullWidth"
          centered
        >
          <Tab label="Grid" value="1" sx={style} />
          <Tab label="List" value="2" sx={style} />
        </TabList>

        <TabPanel value="1">
          <div className="flex justify-center items-center flex-wrap gap-[1.7rem] mt-5 ">
            {coins.map((coin, i) => {
              return (
                <Grid
                  coin={coin}
                  key={i}
                  onWishListIconClick={() => handleWishlistToggle(coin.id)}
                  isCoinInWishlist={wishlist.includes(coin.id)}
                />
              );
            })}
          </div>
        </TabPanel>
        <TabPanel value="2" sx={stylePanel}>
          <table className="w-[100%] md:w-[93%] block ms-auto me-auto mt-8">
            {coins.map((coin, i) => {
              return <List coin={coin} key={i} />;
            })}
          </table>
        </TabPanel>
      </TabContext>
    </div>
  );
}
