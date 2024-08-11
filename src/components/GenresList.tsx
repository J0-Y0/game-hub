import React from 'react'
import UseGenres, { Genre } from '../hooks/UseGenres'
import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Skeleton, Typography } from '@mui/material'
import resizeImage from '../services/resize-image';
interface Props {
  onSelectedGenre: (genre:Genre) => void;
}
const GenresList = ({ onSelectedGenre }: Props) => {
  const { data: genres, loading } = UseGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {loading
        ? skeletons.map((s) => (
            <Box key={s}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Skeleton height={40} width={40} variant="circular" />
                </ListItemAvatar>
                <ListItemText
                  primary={<Skeleton width={100} />}
                  secondary={<Skeleton width={50} />}
                />
              </ListItem>

              <Divider variant="inset" component="li" />
            </Box>
          ))
        : genres.map((genre) => (
            <Box key={genre.id}>
              <ListItem disablePadding alignItems="flex-start">
                <ListItemButton onClick={() => onSelectedGenre(genre)}>
                  <ListItemAvatar>
                    <Avatar
                      alt="Image"
                      src={resizeImage(genre.image_background)}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={genre.name}
                    secondary={genre.games_count + ""}
                  />
                </ListItemButton>
              </ListItem>

              <Divider variant="inset" component="li" />
            </Box>
          ))}
    </List>
  );
};

export default GenresList;
