import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

export default function SelectDays({ handleDaysChange, days ,noptag}) {
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

  return (
    <div className="w-max flex items-center gap-3 md:mb-4 mb-8 text-white">
     {!noptag && <h3> Price Change in</h3>}
      <Select
        sx={style}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={days}
        label="Age"
        onChange={(e) => handleDaysChange(e)}
      >
        <MenuItem value={7}>7 Days</MenuItem>
        <MenuItem value={30}>30 Days</MenuItem>
        <MenuItem value={60}>60 Days</MenuItem>
        <MenuItem value={90}>90 Days</MenuItem>
        <MenuItem value={120}>120 Days</MenuItem>
        <MenuItem value={365}>1 Year</MenuItem>
      </Select>
    </div>
  );
}
