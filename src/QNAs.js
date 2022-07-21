import * as React from 'react';

import QNA from './QNA'

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import firebase from './firebase';
import { Typography } from '@mui/material';

import studentCode from './studentCode.json'

const FebStyPC = {
    position: 'fixed',
    right: '10vw',
    bottom : '2vh'
}

const FebStyMOB = {
    position: 'fixed',
    right: '5vw',
    bottom : '2vh'
}

const data_frame = {
    title : '',
    content : '',
    code : ''
}


export default function QNAs(props) {

    const [open, setOpen] = React.useState(false);
    const [check, setCheck] = React.useState(false);
    const [wrongCode, setWrongCode] = React.useState(false);
    const [inputData, setInputData] = React.useState(data_frame);

    
    

    console.log(inputData)

    const changeHandler = (e) => {
        console.log( e.target.value )
        const temp_data = data_frame
        temp_data[e.target.name] = e.target.value
        setInputData(temp_data)
    }

    const handleClickOpen = () => {
        setInputData(data_frame)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const checkOpen = () => {
        setCheck(true);
    };

    const checkClose = () => {
        setCheck(false);
    };

    const wrongOpen = () => {
        setWrongCode(true);
    };

    const wrongClose = () => {
        setWrongCode(false);
    };

    const Submit = () => {
        const date = new Date()
        const years = String(date.getFullYear()).padStart(2,"0")
        const months = String(date.getMonth()+1).padStart(2,"0")
        const days = String(date.getDate()).padStart(2,"0")
        const hours = String(date.getHours()).padStart(2,"0")
        const minutes = String(date.getMinutes()).padStart(2,"0")
        const seconds = String(date.getSeconds()).padStart(2,"0")

        const temp_data = {
            id : 1,
            title : '가나다라',
            question : {
                date : '',
                content : ''
            },
            answer : {
                date : '',
                content : ''
            },
            user : 'chh1025',
            hold : false,
            answerd : false
        }
        temp_data['title'] = inputData['title']
        temp_data['question']['content'] = inputData['content']

        if(studentCode[inputData['code']] == undefined ){
            wrongOpen()
            return
        }
        temp_data['user'] = studentCode[inputData['code']]

        temp_data['question']['date'] = `${years}.${months}.${days} ${hours}:${minutes}:${seconds}`
        
        props.SubmitQNA(temp_data)
        console.log(temp_data)
        handleClose()
        checkClose()
        setInputData(data_frame)
    }

    return (
        <div>
            <Fab color="primary" aria-label="add" style={props.isPc?FebStyPC:FebStyMOB} onClick={handleClickOpen}>
                <AddIcon/>
            </Fab>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>학생회 QNA 질문하기</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    질문 삭제는 불가능합니다.<br/>
                    신중히 작성해 주시기 바랍니다.
                </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        name="title"
                        label="제목"
                        fullWidth
                        variant="standard"
                        onChange={changeHandler}
                    />
                    <TextField
                        margin="dense"
                        id="content"
                        name="content"
                        label="내용"
                        multiline
                        fullWidth
                        variant="standard"
                        onChange={changeHandler}
                    />
                    <TextField
                        margin="dense"
                        id="code"
                        name="code"
                        label="개인식별번호"
                        multiline
                        fullWidth
                        variant="standard"
                        onChange={changeHandler}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={checkOpen}>제출</Button>
                </DialogActions>
            </Dialog>

            <Dialog open={check} onClose={checkClose}>
                <DialogTitle>학생회 QNA 질문하기</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography>
                            정말로 제출하시겠습니까?
                        </Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={Submit}>제출</Button>
                </DialogActions>
            </Dialog>

            <Dialog open={wrongCode} onClose={wrongClose}>
                <DialogTitle>오류</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography>
                            개인식별번호가 잘못되었습니다.<br/>
                            다시 한 번 확인해주시기 바랍니다.
                        </Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={wrongClose}>확인</Button>
                </DialogActions>
            </Dialog>
            
            {props.data.map( (data) => ( <QNA data={data} key={data.id}/>) ) }
        </div>
  );
}