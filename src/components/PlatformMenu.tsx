import { Box, Button, Chip, Divider, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import usePlatform, { Platform } from '../hooks/usePlatform';
import { BsFilterLeft } from "react-icons/bs";
interface Props {
  selectedPlatform: Platform|null
  onSelectPlatform: (platform: Platform) => void
}

const PlatformMenu = ({ onSelectPlatform, selectedPlatform }:Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const { data: platforms } = usePlatform();
  return (
    <>
      <Button
        sx={{ m: 1 }}
        variant="outlined"
        endIcon={<BsFilterLeft />}
        onClick={(event) => setAnchorEl(anchorEl ? null : event.currentTarget)}
      >
        {selectedPlatform ? selectedPlatform?.name : "Platform"}
      </Button>
     
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {platforms.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => {
              setAnchorEl(null);
              onSelectPlatform(platform);
            }}
          >
            {platform.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default PlatformMenu;
