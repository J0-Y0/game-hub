import { Box, Typography } from "@mui/material";
import UseGames from "../hooks/UseGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "../hooks/UseGames";
import { motion } from "framer-motion";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { error, data: games, loading } = UseGames(gameQuery);
  const skeletons = Array.from({ length: 8 });

  return (
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      {error && (
        <Typography
          color="error"
          variant="h6"
          sx={{ textAlign: "center", mb: 4 }}
        >
          {error}
        </Typography>
      )}

      <Box
        display="grid"
        gridTemplateColumns={{
          xs: "repeat(auto-fill, minmax(300px, 1fr))",
          md: "repeat(auto-fill, minmax(320px, 1fr))",
        }}
        gap={4}
      >
        {loading
          ? skeletons.map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <GameCardSkeleton />
              </motion.div>
            ))
          : games.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
              >
                <GameCard game={game} />
              </motion.div>
            ))}
      </Box>
    </Box>
  );
};

export default GameGrid;
