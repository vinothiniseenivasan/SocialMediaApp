import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import {   Link } from "react-router-dom";




export default function CheckboxListSecondary() {


  const [users, setUsers] = useState([]);

  useEffect(() =>
  {
    axios.get( "https://dummyapi.io/data/v1/user" ,
//    js object
   {
    headers: { 'app-id' :import.meta.env.VITE_APP_ID }

   }).then( response =>

   {
    console.log("userList left",response.data.data);

    const obj = response.data;
    setUsers([...obj.data]);
   })

  } , []);

  

  return (
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {users.map((eachUser) => {
        const labelId = `checkbox-list-secondary-label-${eachUser.id}`;
        return (
          <ListItem
            key={eachUser.id}
           
            disablePadding
          >

        <Link  to = {`/user/${eachUser.id}`}>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${eachUser.firstName}`}
                  src={eachUser.picture}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={eachUser.firstName + " " + eachUser.LastName} />
            </ListItemButton>
       </Link>
           
          </ListItem>
        );
      })}
    </List>
  );
}