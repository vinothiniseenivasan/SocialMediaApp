import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';


export default function UserDetails() {


    let { id } =useParams(); 
     const [user , setUser] = useState({});


   useEffect(() =>
   {

    axios.get(           `https://dummyapi.io/data/v1/user/${id }`  ,
    {
        headers: { 'app-id' :import.meta.env.VITE_APP_ID }
    
    }    )  
    .then((response ) =>
    {
       console.log("response" ,response);
       setUser({...response.data});
    })

   } , []);
  return (
     <>

<Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          {user.firstName}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          {user.email}
          </Typography>
        </CardContent>
        
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={user.picture}
        alt="Live from space album cover"
      />
    </Card>






{/* User Name : {user.firstName} <br></br>
Email :{user.email}
      <Avatar
        alt={user.firstName}
        src={user.picture}
        sx={{ width: 200, height: 200 }}
      /> */}
     </>
       
     
  );
}