import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import { Game } from '../hooks/UseGames';
import { Window } from '@mui/icons-material';
import GamePlatformIcon from './GamePlatformIcon';

interface Props{
    game:Game
}
const GameCard = ({ game }: Props) => {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 340, margin: 2 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={game.background_image}
        title={game.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {game.name}
        </Typography>
        <GamePlatformIcon platforms={game.parent_platforms} />

        <IconButton></IconButton>
        <Typography variant="body2" color="text.secondary">
          ====Lizards are a widespread group of squamate reptiles, with over
          6,000 species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default GameCard
