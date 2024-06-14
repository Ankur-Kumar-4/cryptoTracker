import { useState } from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationComponent({ page, handlePageChange }) {
  return (
    <div className="flex justify-center items-center mt-6 mb-8">
      <Pagination
        count={25}
        page={page}
        onChange={(event, value) => handlePageChange(event, value)}
        sx={{
          color: "var(--white) !important",
          "& .Mui-selected": {
            backgroundColor: "var(--blue) !important",
            color: "#ffff !important",
            borderColor: "var(--blue) !important",
          },
          "& .MuiPaginationItems-ellipsis": {
            border: "0px solid var(--grey) !important",
          },
          "& .MuiPaginationItem-text": {
            color: "var(--white) !important",
            border: "1px solid var-(--grey)",
          },
        }}
      />
    </div>
  );
}
