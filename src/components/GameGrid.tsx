import { Box, Typography } from '@mui/material'

import UseGames from '../hooks/UseGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import { Genre } from '../hooks/UseGenres';
import { Platform } from '../hooks/usePlatform';
import { GameQuery } from '../App';
interface Props {
  gameQuery:GameQuery|null
}

const GameGrid = ({ gameQuery }: Props) => {
  const { error, data: games, loading } = UseGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center">
      {error && <Typography color="danger">{error}</Typography>}

      {loading
        ? skeletons.map((s) => <GameCardSkeleton key={s} />)
        : games.map((game) => <GameCard key={game.id} game={game} />)}
    </Box>
  );
};

export default GameGrid
