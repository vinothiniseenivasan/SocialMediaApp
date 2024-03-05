import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import UserList from '../UserList/UserList';
import PostCardContext from '../Providers/PostProviders';
import PostCardList from '../PostCard/PostCardList';


export default function MainContainer () {
  return (
    <Box  sx={{  mt: '3rem' }}>
      <Grid container   justifyContent= {"center"} alignItems={"start"} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md:  40}}>
        <Grid>
          {/* for USERS  */}
          <UserList />
        </Grid>
        <Grid   
         container
         justifyContent= {"center"}
        alignItems={"center"}
        direction={"column"}  md = {8} >
        
         {/* Posts */}
          <PostCardList />
          
        </Grid>
       
      </Grid>
    </Box>
  );
}

