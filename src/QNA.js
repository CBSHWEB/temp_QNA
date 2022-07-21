import * as React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import Box from '@mui/material/Box';

export default function QNA(props) {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event) => {
        setExpanded(!expanded);
    };

    return (
        <Accordion onChange={handleChange()} disabled={props.data.hold} >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <span>
                    <h2>
                        <b style={{fontSize:'1.6em'}}>Q.</b>
                        &nbsp;&nbsp;
                        {props.data.hold?
                                <i>보류 처리 된 질문입니다</i>
                                :
                                <>
                                    {props.data.title}
                                    &nbsp;
                                    {props.data.answerd?
                                        <CheckCircleIcon
                                            fontSize="inherit"
                                            color="success"
                                        />:<></>
                                    }
                                </>
                        }
                    
                    </h2>
                    {expanded?
                    <>
                        <Box display="grid" gridTemplateColumns="repeat(30, 1fr)" gap={1} style={{color:'darkgray', fontSize:'0.9em'}}>
                            <Box gridColumn="span 13" style={{minWidth:'100px'}}>
                                {props.data.user}
                            </Box>
                            <Box gridColumn="span 17">
                                {props.data.question.date}
                            </Box>
                        </Box>
                    </>
                    :<></>}
                </span>
            </AccordionSummary>
            <AccordionDetails>
            <Box style={{padding:'0% 1%'}}>
                <Box>
                    {props.data.question.content}
                </Box>
            </Box>
            
            <br/>
            
                <span>
                    
                    {props.data.answerd?
                        <>
                            <h2><b style={{fontSize:'1.6em'}}>A.</b></h2>
                            <span style={{color:'darkgray'}}>
                                {props.data.answer.date}
                            </span>
                            <br/>
                            <br/>
                            <Box style={{padding:'0% 1%'}}>
                                {props.data.answer.content}
                            </Box>
                        </>
                    :
                        <h2 style={{color:'darkgray'}}>답변대기중입니다.</h2>
                    }
                </span>

            </AccordionDetails>
        </Accordion>
    );
}
