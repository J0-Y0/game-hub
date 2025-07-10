import { Box, Card, CardContent, Skeleton, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const GameCardSkeleton = () => {
  const theme = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
    >
      <Card
        sx={{
          width: 320,
          height: 420,
          borderRadius: 4,
          overflow: "hidden",
          position: "relative",
          bgcolor: theme.palette.background.paper,
          boxShadow: theme.shadows[1],
        }}
      >
        <Skeleton variant="rectangular" width="100%" height={200} />

        <CardContent sx={{ height: "calc(100% - 200px)" }}>
          <Box display="flex" justifyContent="space-between" mb={2}>
            <Skeleton width={120} height={24} sx={{ borderRadius: 1 }} />
            <Skeleton variant="circular" width={32} height={32} />
          </Box>

          <Skeleton width="80%" height={28} sx={{ mb: 1.5, borderRadius: 1 }} />
          <Skeleton width="60%" height={28} sx={{ mb: 2, borderRadius: 1 }} />

          <Box display="flex" gap={1} mb={2}>
            <Skeleton width={60} height={24} sx={{ borderRadius: 1 }} />
            <Skeleton width={60} height={24} sx={{ borderRadius: 1 }} />
            <Skeleton width={60} height={24} sx={{ borderRadius: 1 }} />
          </Box>

          <Skeleton width={120} height={16} sx={{ borderRadius: 1 }} />
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default GameCardSkeleton;
