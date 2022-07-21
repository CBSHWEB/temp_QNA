import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function MeetingLogs(props) {

    const conSty = {
        margin : '0 1%'
    }

    return(
        <div style={conSty}>
            <Card>
                <CardContent>
                    <h1>환영합니다</h1>
                    <h2 style={{fontSize:"2em", margin:'5px 0px 0px 0px'}}>
                    </h2>
                    <span style={{fontSize:"1em", margin:'0px'}}>
                    <p>이 웹사이트는 "학생회-학생 소통"을 위해 만들어진 웹사이트입니다.</p>
                    <p>현재 "공지사항", "학생회 회의록", "학생회 QNA" 가 존재하며 다양한 기능을 개발 중입니다.</p>
                    <p>자세한 내용은 "공지사항 &gt; 학생회-학생 소통 플랫폼 개발" 에서 확인해주시기 바랍니다.</p>
                    <p>반드시 <b>"공지사항 &gt; 학생회-학생소통 플랫폼 사용 규정"을 확인</b>하시기 바라며, 이를 지키지 않음으로 발생하는 피해의 책임은 모두 개인에게 있습니다.</p>
                    </span>
                    
                </CardContent>
            </Card>
        </div>
    )
}