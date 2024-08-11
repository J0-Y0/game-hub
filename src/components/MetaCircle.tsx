import { Chip, Divider } from '@mui/material';
import React from 'react'
interface Props {
  metacritic: number;
}

const MetaCircle = ({ metacritic }: Props) => {
    const colorMap = [
      "inherit",
      "inherit",
      "inherit",
      "inherit",
      "inherit",
      "inherit",
      "gray",
      "gray",
      "#448E49",
      "#3AAE42",
    ];
          


    return (
    <Divider>
      <Chip
        sx={{ background: colorMap[Math.floor(metacritic / 10)] }}
        label={metacritic}
        size="small"
      />
    </Divider>
  );
};

export default MetaCircle
