import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ToggleButtons({ priceType, handlePriceTypeChange }) {
  return (
    <ToggleButtonGroup
      sx={{
        height: "2rem",
        width:"18rem",
        "& .Mui-selected": {
          borderColor: "var(--blue)",
          borderWidth: 1.3,
        },
        borderColor: "var(--blue)",
        border: "unset !important",
        "& .MuiToggleButtonGroup-grouped": {
          border: "1px solid !important",
          borderColor: "unset",
          color: "var(--blue)",
        },
      }}
      color="primary"
      value={priceType}
      exclusive
      onChange={handlePriceTypeChange}
    >
      <ToggleButton value="prices">PRICE</ToggleButton>
      <ToggleButton value="market_caps">MKT CAP</ToggleButton>
      <ToggleButton value="total_volumes">VOLUME</ToggleButton>
    </ToggleButtonGroup>
  );
}
