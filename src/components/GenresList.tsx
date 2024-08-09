import React from 'react'
import UseGenres from '../hooks/UseGenres'
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Skeleton, Typography } from '@mui/material'
import resizeImage from '../services/resize-image';
const GenresList = () => {
    const { data:genres,loading } = UseGenres()
    const skeletons = [1,1,1,1,1,1,11,1,1,1]
    return (
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {loading
          ? skeletons.map(() => (
              <>
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
              </>
            ))
          : genres.map((genre) => (
              <>
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src={resizeImage(genre.image_background)}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={genre.name}
                    secondary={genre.games_count + ""}
                  />
                </ListItem>

                <Divider variant="inset" component="li" />
              </>
            ))}
      </List>
    );
}

export default GenresList;
