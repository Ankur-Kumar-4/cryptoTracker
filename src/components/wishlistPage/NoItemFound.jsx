import React from "react";
import Button from "../common/Button";
import { Link } from "react-router-dom";

function NoItemFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 mt-10">
      <h2 className="font-bold text-2xl">No items in the Watchlist</h2>
      <Link to="/dashboard">
        <Button text="Dashboard" type="btn" />
      </Link>
    </div>
  );
}

export default NoItemFound;
