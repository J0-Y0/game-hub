import React from 'react'
import { Platform } from '../hooks/UseGames';
import {  Box, Typography } from '@mui/material';
import { IoLogoAndroid } from "react-icons/io";

import {
  FaXbox,
  FaPlaystation,
  FaWindows,
  FaApple,
    FaLinux,
  FaAndroid
} from "react-icons/fa";
import { IconType } from 'react-icons';

interface Props {
    platforms: { platform: Platform }[];
}
const GamePlatformIcon = ({ platforms }: Props) => {
    const iconMap: { [key: string]: IconType } = {
      pc: FaWindows,
      xbox: FaXbox,
      playstation: FaPlaystation,
      mac: FaApple,
      linux: FaLinux,
      android: IoLogoAndroid,
    };
    return (
      <Box color="gray" display="flex" flexDirection="row-reverse">
        {platforms.map(({ platform }) => (
          <Box
            key={platform.id}
            sx={{ marginRight: 1 }}
            component={iconMap[platform.slug]}
          ></Box>
        ))}
      </Box>
    );
};

export default GamePlatformIcon
