import React from 'react'
import UseGenres from '../hooks/UseGenres'
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import resizeImage from '../services/resize-image';
const GenresList = () => {
    const { data:genres } = UseGenres()
    
    return (<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
               
                {genres.map((genre)=>
                <>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src= {resizeImage(genre.image_background) }/>
                        </ListItemAvatar>
                        <ListItemText
                            primary={genre.name}
                            secondary={genre.games_count+""}
                        />
                    </ListItem>

                    <Divider variant="inset" component="li" />
                </>
                )}
                
            </List>
            
    );
}

export default GenresList;
