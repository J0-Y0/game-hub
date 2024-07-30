import { Box, Typography } from '@mui/material'

import UseGames from '../hooks/UseGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'

const GameGrid = () => {
  const { error, games ,loading} = UseGames()
  const skeletons = [1 , 2 , 3, 4 , 5 , 6,7,8,]
  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center">
      {error && <Typography color="danger">{error}</Typography>}

      {loading ?skeletons.map(() =><GameCardSkeleton/>):
        games.map((game) => (
          <GameCard  key={game.id} game={game} />
        ))}
    </Box>
  );
}

export default GameGrid
