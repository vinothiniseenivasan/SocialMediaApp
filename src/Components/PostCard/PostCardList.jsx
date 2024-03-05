import { useEffect, useState } from "react";
import PostCard from "../PostCard";
import axios from "axios";
import { useContext } from "react";
import PostCardContext from "../Providers/PostProviders";
  


function PostCardList()
{
    const {posts,setPosts} = useContext(PostCardContext);
// https://dummyapi.io/data/v1/user
 


    return (
  
    //  (posts.length == 0)  ? "Loading ...."  :
    posts.map ( (eachPost) => < PostCard
         key={eachPost.id} 
         content ={eachPost.text}
         firstLetter={eachPost.owner.firstName.substring(0,1)}
         image ={eachPost.image}
         firstName = {eachPost.owner.firstName}
         />) 

         
    )
}

export default PostCardList;