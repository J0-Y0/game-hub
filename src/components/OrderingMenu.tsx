import {
  Button,
  Menu,
  MenuItem,
  Typography,
  useTheme,
  alpha,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import {
  AiOutlineSortAscending,
  AiOutlineArrowUp,
  AiOutlineStar,
  AiOutlineFire,
  AiOutlineCalendar,
} from "react-icons/ai";
import { motion } from "framer-motion";

interface Props {
  setOrdering: (order: string) => void;
}

const OrderingMenu = ({ setOrdering }: Props) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const orders = [
    { key: "-name", value: "Name", icon: <AiOutlineArrowUp /> },
    { key: "rating", value: "Rating", icon: <AiOutlineStar /> },
    { key: "metacritic", value: "Popularity", icon: <AiOutlineFire /> },
    { key: "-released", value: "Release Date", icon: <AiOutlineCalendar /> },
  ];

  return (
    <Box>
      <Button
        variant="contained"
        size="medium"
        endIcon={<AiOutlineSortAscending />}
        onClick={(event) => setAnchorEl(anchorEl ? null : event.currentTarget)}
        sx={{
          borderRadius: 3,
          px: 3,
          py: 1,
          textTransform: "none",
          fontWeight: 600,
          bgcolor: alpha(theme.palette.primary.main, 0.1),
          color: theme.palette.text.primary,
          "&:hover": {
            bgcolor: alpha(theme.palette.primary.main, 0.2),
          },
        }}
      >
        Sort By
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        PaperProps={{
          sx: {
            mt: 1,
            borderRadius: 3,
            minWidth: 200,
            boxShadow: theme.shadows[3],
            bgcolor: theme.palette.background.paper,
          },
        }}
      >
        {orders.map((order) => (
          <motion.div
            key={order.key}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <MenuItem
              onClick={() => {
                setAnchorEl(null);
                setOrdering(order.key);
              }}
              sx={{
                py: 1.5,
                "&:hover": {
                  bgcolor: alpha(theme.palette.primary.main, 0.1),
                },
              }}
            >
              <Box display="flex" alignItems="center" gap={1.5}>
                {order.icon}
                <Typography variant="body1" fontWeight={500}>
                  {order.value}
                </Typography>
              </Box>
            </MenuItem>
          </motion.div>
        ))}
      </Menu>
    </Box>
  );
};

export default OrderingMenu;
