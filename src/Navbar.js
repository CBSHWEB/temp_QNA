import * as React from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { Link } from 'react-router-dom';


export default function Navbar(props) {
    const [value, setValue] = React.useState();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="공지사항" component={Link} to="/announcement"></Tab>
            <Tab label="학생회 회의록" component={Link} to="/MeetingLog"></Tab>
            <Tab label="학생회 QNA" component={Link} to="/QNA"></Tab>
        </Tabs>
    )

}