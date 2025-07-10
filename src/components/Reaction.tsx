import { ThumbDown, ThumbUp } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { useState } from "react";

const Reaction: React.FC = () => {
  const [clicked, setClicked] = useState<"up" | "down" | null>(null);

  return (
    <>
      <Fab
        onClick={() => setClicked("up")}
        size="small"
        sx={{
          color: clicked === "up" ? "white" : "black",
          bgcolor: clicked === "up" ? "green" : "gray",
          "&:hover": {
            bgcolor: clicked === "up" ? "darkgreen" : "lightgray",
          },
        }}
        aria-label="like"
      >
        <ThumbUp />
      </Fab>
      <Fab
        onClick={() => setClicked("down")}
        size="small"
        sx={{
          color: clicked === "down" ? "white" : "black",
          bgcolor: clicked === "down" ? "red" : "gray",
          "&:hover": {
            bgcolor: clicked === "down" ? "darkred" : "lightgray",
          },
        }}
        aria-label="dislike"
      >
        <ThumbDown />
      </Fab>
    </>
  );
};

export default Reaction;
