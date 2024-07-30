import { Box, Grid, Paper, styled } from "@mui/material";
import Navbar from "./components/Navbar";
import './App.css'

function App() {

 return (
   <Box sx={{ flexGrow: 1}}>
     <Grid container spacing={2}>
       <Grid item xs={12}  p={0} m={0}>
        <Navbar />
       </Grid>
       <Grid item xs={12} sm={4} >
         <Paper sx={{ p: 2 }}>xs=4</Paper>
       </Grid>
     </Grid>
   </Box>
 );
}

export default App
