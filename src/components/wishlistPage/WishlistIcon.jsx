import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function WishlistIcon({ onWishListIconClick, isSelected }) {
  // const notify = () => {
  //   toast.success("Wow so easy !");
  // };
  const handleClick = () => {
    onWishListIconClick();
  };

  return (
    <div
      className=""
      onClick={() => {
        handleClick();
        // notify();
      }}
    >
      {isSelected ? (
        <StarIcon fontSize="large" />
      ) : (
        <StarBorderIcon fontSize="large" />
      )}
      <ToastContainer />
    </div>
  );
}

export default WishlistIcon;
