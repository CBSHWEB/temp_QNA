import * as React from 'react';
import { useParams } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import ReactMarkdown from 'react-markdown'

import { audio202204121, audio202204122, audio202204123 } from './audio'

const audio = { audio202204121, audio202204122, audio202204123 }

export default function MeetingLog(props) {
    const { MeetingLogID } = useParams();
    
    const res = props.data.filter( (data) => data.id.toString() === MeetingLogID.toString() )[0]

    return(
        
        <div style={{margin:'0 0 3% 0'}}>
            <br/>
            <Card>
                <CardContent>
                    <h2 style={{fontSize:"2em", margin:'5px 0px 0px 0px'}}>
                        {res.title}
                    </h2>
                    <span style={{fontSize:"1em", margin:'0px', color:'darkgray'}}>
                        {res.date}
                    </span>
                    <br/><br/>
                    <div style={{fontSize:"1em", margin:'0px'}}>
                        <ReactMarkdown children={res.content}></ReactMarkdown>
                        {/* {res.content} */}
                    </div>
                    <br/>
                    {/* <audio src={ audio[res.src.toString()] } controls/> */}
                </CardContent>
            </Card>
        </div>
    )
}