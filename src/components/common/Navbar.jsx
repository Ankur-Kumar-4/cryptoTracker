import React, { useState } from "react";
import AnchorTemporaryDrawer from "./Drawer";
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Button from "./Button";
import { Link } from "react-router-dom";

function Navbar({ toggleTheme }) {
  const [themeIsDark, setThemeIsDark] = useState(
    localStorage.getItem("theme") == "dark" ? true : false
  );
  const [select, setSelect] = useState("home");

  // console.log(themeIsDark);
  const handleChange = () => {
    setThemeIsDark(!themeIsDark);
    toggleTheme();
  };

  const handleSelect = (val) => {
    setSelect(val);
  };

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 8,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#8796A5" : "#3a80e9",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&::before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));

  return (
    <div className="flex px-4 md:px-11 py-3 items-center justify-between bg-black text-white sticky top-0 w-full z-50">
      <h1 className="font-[700] text-[1.4rem] md:text-[1.6rem]">
        CryptoTracker<span className="text-blue">.</span>
      </h1>

      <div className="hidden md:flex text-grey text-[0.9rem] gap-8 items-center font-bold">
        <div className="translate-x-7">
          <FormControlLabel
            control={
              <MaterialUISwitch
                checked={themeIsDark}
                onChange={handleChange}
                sx={{ m: 1 }}
                // defaultChecked
              />
            }
          />
        </div>

        <Link to="/">
          <div
            onClick={() => handleSelect("home")}
            className={
              select === "home"
                ? "hover:text-white text-white cursor-pointer"
                : "hover:text-white cursor-pointer"
            }
          >
            Home
          </div>
        </Link>
        <Link to="/compare">
          <div
            onClick={() => handleSelect("compare")}
            className={
              select === "compare"
                ? "hover:text-white text-white cursor-pointer"
                : "hover:text-white cursor-pointer"
            }
          >
            Compare
          </div>
        </Link>

        <Link to="/watchlist">
          <div
            onClick={() => handleSelect("watchlist")}
            className={
              select === "watchlist"
                ? "hover:text-white text-white cursor-pointer"
                : "hover:text-white cursor-pointer"
            }
          >
            Watchlist
          </div>
        </Link>

        <Link to="/dashboard">
          <Button text="Dashboard" type="btn" />
        </Link>
      </div>
      <div className="flex md:hidden">
        <AnchorTemporaryDrawer />
      </div>
    </div>
  );
}

export default Navbar;
