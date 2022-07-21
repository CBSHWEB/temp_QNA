import * as React from 'react';

import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';

const style = {
    width: '100%',
    bgcolor: 'background.paper',
  };

export default function Announcements(props) {

    return(
        <div>
            <List sx={style} component="nav" aria-label="mailbox folders">
                <Divider/>
                {props.data.map( (data) => (
                    <ListItem button divider component={Link} to={data.id.toString()} key={data.id}>
                        
                        <ListItemIcon>
                            <ListItemText primary={data.id} />
                        </ListItemIcon>
                        <ListItemText primary={data.title} />
                    </ListItem>
                ) )}
            </List>
        </div>
    )
}