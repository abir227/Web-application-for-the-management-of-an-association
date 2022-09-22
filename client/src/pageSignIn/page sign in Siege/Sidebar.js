import * as React from 'react';
import { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import SmsIcon from '@mui/icons-material/Sms';

export default function TemporaryDrawer() {
const [messages, setMessages] = useState([]) 
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  useEffect(()=> {
    fetch('/myMessages').then(res => res.json()).then(result => {
        setMessages(result[0])
      
      })
})
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        <h5>Vos Messages</h5>
          <tr><th>envoyer par:</th><th>messages:</th></tr>
     
     {
      messages.map(item=>{
          return(
              <tr>
                  <td>{item.postedBy}</td>
                  <td>{item.text}</td>
              </tr>)
          
      })
     }
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><SmsIcon color="action" fontSize="large" />
            </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
