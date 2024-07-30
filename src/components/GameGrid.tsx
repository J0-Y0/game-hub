import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import apiClientc from '../services/api-client'
import apiClient from '../services/api-client'
import UseGames from '../hooks/UseGames'

const GameGrid = () => {
    const {error,games} = UseGames()
  return (
    <Box>
      {error && <Typography color="danger">{error}</Typography>}
      <ul>
        {games&&games.map((game) => (
          <li key={game.id}>
            {game.name} | {game.released}
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default GameGrid
