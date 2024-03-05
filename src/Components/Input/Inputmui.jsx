import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useContext, useState } from 'react';
import axios from 'axios';
import { LoadingButton } from '@mui/lab';
import { ImageOutlined } from '@mui/icons-material';
import PostCardContext from '../Providers/PostProviders';

function Inputmui() {

    const [postText, setPostText] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [loading , setLoading] =useState(false);
    const {posts,setPosts} = useContext(PostCardContext);
  
    async function createPost() {
        console.log("createPost is  called");
       setLoading(true);
        axios.post( "https://dummyapi.io/data/v1/post/create" ,
        {
            owner : '60d0fe4f5311236168a109ca' ,
            text:postText, 
            image:imageUrl ,
            likes: 0
        } ,
        //    js object
           {
            headers: { 'app-id' :import.meta.env.VITE_APP_ID }
        
           })
           .then( response =>
        
           {
            console.log("post data",response.data.image  );
            setPosts([ response.data ,  ...posts]);
            setLoading(false);
            setPostText("");
            setImageUrl("");
        
            const obj = response.data;
            
           }  )
    }

  
  
    return (
        <Box sx={{ mt: '3rem' }}>
            <TextField fullWidth 
                id="outlined-basic"
                label="Your Next Post" 
                variant="outlined" 
                value={postText }
                onChange={(e) => setPostText(e.target.value)}
            />
            <TextField  
                sx={{ mt: '1rem', mb: '1rem' }} 
                fullWidth 
                id="outlined-basic" 
                label="Your image Post" 
                value={imageUrl }
                onChange={(e) => setImageUrl(e.target.value)}
                variant="outlined" 
            />
           {
           (loading)  ?  
            <LoadingButton loading variant="outlined"> 
          submit
           </LoadingButton>  :
         <Button onClick={createPost} variant="contained">Submit</Button>  
             
            }
           
        </Box>
    );
}



export default Inputmui;
