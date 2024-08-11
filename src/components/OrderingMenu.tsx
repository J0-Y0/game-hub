import { Button, Chip, Divider, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import { AiOutlineSortAscending } from "react-icons/ai";

interface Props {
  setOrdering:(order:string)=>void
}
const OrderingMenu = ({ setOrdering }:Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const orders = [
    { key: "-name", value: "Name" },
    { key: "rating", value: "Rating " },
    { key: "metacritic", value: "Popularity" },
    { key: "-released", value: "Released date " },
    { key: "-added", value: "Added date " },
    { key: "-created", value: "Created date " },
  ];
  return (
    <>
      <Button
        sx={{ m: 1 }}
        variant="outlined"
        endIcon={<AiOutlineSortAscending />}
        onClick={(event) => setAnchorEl(anchorEl ? null : event.currentTarget)}
      >
        Sorting
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {orders.map((order) => (
          <MenuItem
            key={order.key}
            onClick={() => {
              setAnchorEl(null);
              setOrdering(order.key);
            }}
          >
            {order.value}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default OrderingMenu
