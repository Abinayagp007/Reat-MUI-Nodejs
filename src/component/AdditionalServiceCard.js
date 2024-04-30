import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { List, ListItem, ListItemText, Paper, Avatar, Box, Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: 'hidden',
    width: '300px', // Adjust the width as needed
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '16px', // Adjust the padding as needed
    borderBottom: '1px solid #ddd', // Border between items
  },
  avatar: {
    marginRight: '16px', // Adjust the margin as needed
    width: '50px', // Adjust the width as needed
    height: '30px', // Adjust the height as needed
  },
  itemBox: {
    // border: '1px solid #ddd', // Border around each item
    // borderRadius: '8px', // Adjust the borderRadius as needed
    padding: '6px', // Adjust the padding as needed
  },
}));

const AdditionalServiceCard = () => {
  const classes = useStyles();
  const [items, setItems] = useState([
    { name: 'Dashboard', header: 'Header 1', image: 'https://icon-library.com/images/icon-dashboard/icon-dashboard-14.jpg' },
    { name: 'Temple Information', header: 'Header 2', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHrAUirjYV51fTNm_NjiuKMgHh8J0QiqMjGuItf0C43AY3jyIfA5q0GHvTNm_KQzcz3U8&usqp=CAU' },
    { name: 'Invitations', header: 'Header 3', image: 'https://cdn2.iconfinder.com/data/icons/fashion-week-aesthetics-vol-2/256/Invitation_Only_Event-512.png' },
    { name: '360 Degree View', header: 'Header 4', image: 'https://winpure.com/wp-content/uploads/2019/07/360-degree-customer-view-1.png' },
    { name: 'Events', header: 'Header 5', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRShxMgGooApNnWAKOMSW4rVRQmAUZxpT2C7Q&usqp=CAU' },
  ]);

  useEffect(() => {
    const moveItemsUpward = () => {
      setItems((prevItems) => {
        const newItems = [...prevItems];
        const movedItem = newItems.shift();
        newItems.push(movedItem);
        return newItems;
      });
    };

    const intervalId = setInterval(moveItemsUpward, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>

    <Paper elevation={3} className={classes.root} sx={{marginLeft:"20vh", backgroundColor:"white", marginBottom:"10px", padding:"10px"}}>
    <Typography variant="h6" sx={{textAlign:"center",backgroundColor:"dodgerblue",padding:"5px", borderRadius:"30px",width:"33vh",marginLeft:"40px",color:"whitesmoke",marginTop:"15px"}}>Additional Services</Typography>
{/* <hr/> */}

      <List>
        {items.map((item, index) => (
          <ListItem key={index} className={classes.listItem} sx={{marginTop:"-2px"}}>
            <Avatar className={classes.avatar} src={item.image} alt={item.name} />
            <Box className={classes.itemBox}>
              {/* <Typography variant="h6">{item.header}</Typography> */}
              <Typography variant="body1">{item.name}</Typography>
            </Box>
          </ListItem>
        ))}
      </List>
    </Paper>
    </div>
  
  );
};

export default AdditionalServiceCard;
