import React from "react";
import UseGenres, { Genre } from "../hooks/UseGenres";
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Skeleton,
  Typography,
} from "@mui/material";
import resizeImage from "../services/resize-image";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenresList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data: genres, loading } = UseGenres();
  const skeletons = Array.from({ length: 12 });

  return (
    <Box
      sx={{
        height: "100%",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        bgcolor: "background.paper",
        px: 1,
        pb: 2,
      }}
    >
      {/* Sticky Header */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          bgcolor: "background.paper",
          py: 1.5,
          px: 2,
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <Typography variant="h6" fontWeight={700}>
          Browse by Genre
        </Typography>
      </Box>

      {/* Genre List */}
      <List disablePadding>
        {loading
          ? skeletons.map((_, index) => (
              <Box key={index} px={1.5} py={1}>
                <ListItem disableGutters>
                  <ListItemAvatar>
                    <Skeleton variant="circular" width={40} height={40} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={<Skeleton width="60%" />}
                    secondary={<Skeleton width="30%" />}
                  />
                </ListItem>
                <Divider sx={{ mt: 1 }} />
              </Box>
            ))
          : genres.map((genre) => (
              <Box key={genre.id} px={1.5}>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => onSelectedGenre(genre)}
                    selected={selectedGenre?.id === genre.id}
                    sx={{
                      borderRadius: 2,
                      px: 1,
                      "&.Mui-selected": {
                        bgcolor: "secondary.main",
                        color: "#fff",
                        "& .MuiTypography-root": {
                          color: "#fff",
                          fontWeight: 600,
                        },
                      },
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar
                        src={resizeImage(genre.image_background)}
                        alt={genre.name}
                        sx={{ width: 40, height: 40 }}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography variant="body1" fontWeight={500}>
                          {genre.name}
                        </Typography>
                      }
                      secondary={
                        <Typography variant="caption" color="text.secondary">
                          {genre.games_count.toLocaleString()} games
                        </Typography>
                      }
                    />
                  </ListItemButton>
                </ListItem>
              </Box>
            ))}
      </List>
    </Box>
  );
};

export default GenresList;
