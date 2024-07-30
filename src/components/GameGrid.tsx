import { Box, Typography } from '@mui/material'

import UseGames from '../hooks/UseGames'
import GameCard from './GameCard'

const GameGrid = () => {
  const { error, games } = UseGames()
  if (games.length > 0)
    console.log("=========", games[1].parent_platforms[0].platform.slug);

  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center">
      {error && <Typography color="danger">{error}</Typography>}

      {games && games.map((game) => <GameCard key={game.id} game={game} />)}
    </Box>
  );
}

export default GameGrid
