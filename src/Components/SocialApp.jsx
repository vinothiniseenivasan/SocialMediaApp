
import MainContainer from './MainContainer/MainContainer';
import { Input } from '@mui/material';
import Inputmui from './Input/Inputmui';
import PostCardContext from './Providers/PostProviders';
import { useState ,useEffect } from 'react';
import axios from 'axios';
function SocialApp()
{

    const [posts,setPosts] = useState([]);

    useEffect(  () => 
    {
        console.log(import.meta.env.VITE_APP_ID);
        // we download the content from dummy api
   axios.get( "https://dummyapi.io/data/v1/post" ,
//    js object
   {
    headers: { 'app-id' :import.meta.env.VITE_APP_ID }

   }).then( response =>

   {
    console.log("feedList right" , response.data.data);

    const obj = response.data;
    setPosts([...obj.data]);
   })
      
    } , []);
return (
<PostCardContext.Provider  value ={  {posts,setPosts} }>
    
     <Inputmui  />
     <MainContainer />

</PostCardContext.Provider>
   
)
}

export default SocialApp;
