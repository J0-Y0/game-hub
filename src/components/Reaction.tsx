import { ThumbDown, ThumbUp } from "@mui/icons-material";
import { IconButton, Tooltip, Box } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";

const Reaction: React.FC = () => {
  const [clicked, setClicked] = useState<"up" | "down" | null>(null);
  const [hovered, setHovered] = useState<"up" | "down" | null>(null);

  return (
    <Box display="flex" alignItems="center" gap={1}>
      <Tooltip title="Like">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onHoverStart={() => setHovered("up")}
          onHoverEnd={() => setHovered(null)}
        >
          <IconButton
            onClick={() => setClicked(clicked === "up" ? null : "up")}
            sx={{
              color:
                clicked === "up"
                  ? "#fff"
                  : hovered === "up"
                  ? "#4caf50"
                  : "text.secondary",
              bgcolor: clicked === "up" ? "#4caf50" : "transparent",
              "&:hover": {
                bgcolor: clicked === "up" ? "#388e3c" : "#4caf50",
              },
            }}
          >
            <ThumbUp />
          </IconButton>
        </motion.div>
      </Tooltip>

      <Tooltip title="Dislike">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onHoverStart={() => setHovered("down")}
          onHoverEnd={() => setHovered(null)}
        >
          <IconButton
            onClick={() => setClicked(clicked === "down" ? null : "down")}
            sx={{
              color:
                clicked === "down"
                  ? "#fff"
                  : hovered === "down"
                  ? "#f44336"
                  : "text.secondary",
              bgcolor: clicked === "down" ? "#f44336" : "transparent",
              "&:hover": {
                bgcolor: clicked === "down" ? "#d32f2f" : "f44336",
              },
            }}
          >
            <ThumbDown />
          </IconButton>
        </motion.div>
      </Tooltip>
    </Box>
  );
};

export default Reaction;
