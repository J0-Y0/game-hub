import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  useTheme,
  alpha,
  Chip,
  Stack,
} from "@mui/material";
import { Game } from "../hooks/UseGames";
import GamePlatformIcon from "./GamePlatformIcon";
import MetaCircle from "./MetaCircle";
import resizeImage from "../services/resize-image";
import Reaction from "./Reaction";
import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card
        sx={{
          width: 320,
          height: 420,
          borderRadius: 4,
          overflow: "hidden",
          position: "relative",
          boxShadow: theme.shadows[2],
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: theme.shadows[6],
          },
        }}
      >
        {/* Game Image with Gradient Overlay */}
        <Box sx={{ position: "relative" }}>
          <CardMedia
            sx={{
              height: 200,
              transition: "transform 0.5s ease",
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
            image={resizeImage(game.background_image)}
            title={game.name}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "60%",
              background: `linear-gradient(to top, ${theme.palette.background.paper} 20%, transparent)`,
            }}
          />
        </Box>

        {/* Game Content */}
        <CardContent
          sx={{
            position: "relative",
            height: "calc(100% - 200px)",
            display: "flex",
            flexDirection: "column",
            bgcolor: "background.paper",
          }}
        >
          {/* Top Row: Platforms and Score */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={1.5}
          >
            <GamePlatformIcon platforms={game.parent_platforms} />
            <MetaCircle metacritic={game.metacritic} />
          </Box>

          {/* Game Title */}
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              fontWeight: 700,
              lineHeight: 1.3,
              mb: 1.5,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {game.name}
          </Typography>

          {/* Genres */}
          <Stack direction="row" spacing={1} sx={{ mb: 1.5, flexWrap: "wrap" }}>
            {game.genres.slice(0, 3).map((genre) => (
              <Chip
                key={genre.id}
                label={genre.name}
                size="small"
                sx={{
                  borderRadius: 1,
                  bgcolor: alpha(theme.palette.primary.main, 0.1),
                  color: theme.palette.text.primary,
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  mb: 0.5,
                }}
              />
            ))}
          </Stack>

          {/* Release Date */}
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{
              mt: "auto",
              display: "block",
              fontWeight: 500,
            }}
          >
            Released: {new Date(game.released).toLocaleDateString()}
          </Typography>
        </CardContent>

        {/* Actions */}
        <CardActions
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            bgcolor: "background.paper",
            borderTop: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
            px: 2,
            py: 1.5,
          }}
        >
          <Reaction />
        </CardActions>
      </Card>
    </motion.div>
  );
};

export default GameCard;
