import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton'; // Update this import
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import { useState } from 'react';

// Import IconButtonProps if needed

export default function PostCard({content ,firstLetter,image,firstName}) {
  

  const [isLiked ,setIsLiked] = useState(false);
  return (
    <Card sx={{ maxWidth: 345 , mb:'3rem'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
           {firstLetter}
          </Avatar>
        }
        title={firstName}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image=  {image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites"onClick = {() => setIsLiked(!isLiked)}>

          {
            (isLiked) ?    <FavoriteIcon sx ={{color:red[500]}}  /> :  <FavoriteBorderSharpIcon />
          }
        

         
        </IconButton>
      </CardActions>
    </Card>
  );
}
