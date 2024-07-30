import { Box, Button, Card, CardActions, CardContent, Skeleton } from "@mui/material";

const GameCardSkeleton = () => {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 340, margin: 2 }}>
      <Skeleton sx={{ height: 200 }} animation="wave" variant="rectangular" />

      <CardContent>
        <Box display="flex" justifyContent="space-between">
          <Skeleton width={100} animation="wave" />
                  <Skeleton animation="wave" variant="circular" width={20} height={20} />
        </Box>
        <Skeleton animation="wave" />
        <Skeleton animation="wave" />
        <Skeleton width={250} animation="wave" />
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default GameCardSkeleton;
