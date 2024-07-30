import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import apiClientc from '../services/api-client'
import apiClient from '../services/api-client'
import UseGames from '../hooks/UseGames'
import GameCard from './GameCard'

const GameGrid = () => {
    const {error,games} = UseGames()
  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center">
      {error && <Typography color="danger">{error}</Typography>}

      {games && games.map((game) => <GameCard key={game.id} game={game} />)}
    </Box>
  );
}

export default GameGrid
