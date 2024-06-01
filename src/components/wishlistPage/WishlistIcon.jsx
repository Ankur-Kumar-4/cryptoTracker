import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { useRef } from "react";

function WishlistIcon({ onWishListIconClick, isSelected }) {
  const handleClick = () => {
    onWishListIconClick();
  };

  return (
    <div className="" onClick={handleClick}>
      {isSelected ? (
        <StarIcon fontSize="large" />
      ) : (
        <StarBorderIcon fontSize="large" />
      )}
    </div>
  );
}

export default WishlistIcon;
