import { React, useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Grid from "./Grid";

export default function TabsComponent({ coins }) {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const style = {
    color: "var(--white)",
    textTransform: "capitalize",
    fontWeight: 600,
  };
  return (
    <div className="bg-black text-white">
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
              return <Grid coin={coin} key={i} />;
            })}
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div>mapping for list</div>
        </TabPanel>
      </TabContext>
    </div>
  );
}
