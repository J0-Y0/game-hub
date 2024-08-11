import { Box, Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import { Game } from '../hooks/UseGames';
import GamePlatformIcon from './GamePlatformIcon';
import MetaCircle from './MetaCircle';
import resizeImage from '../services/resize-image';

interface Props{
    game:Game
}
const GameCard = ({ game }: Props) => {
  return (
    <Card sx={{ maxWidth: 340, minWidth: 340, margin: 2 }}>
          <CardMedia
              
        sx={{ height: 200 }}
              image={resizeImage( game.background_image)
                 }
        title={game.name}
      />
      <CardContent>
        <Box display="flex"  justifyContent="space-between">
            <GamePlatformIcon platforms={game.parent_platforms} />
            <MetaCircle metacritic={game.metacritic} />
        </Box>
        <Typography gutterBottom variant="h5" component="div">
          {game.name}
        </Typography>
        <IconButton></IconButton>
        <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over
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
