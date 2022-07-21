import * as React from 'react';

import './App.css';

import { db } from "./firebase";
import { ref, get, child, onValue } from "firebase/database";
import { collection, doc, setDoc, addDoc, onSnapshot, getDoc, query, where, getDocs, orderBy } from "firebase/firestore";


import Announcements from './Announcements'
import Announcement from './Announcement'
import MeetingLogs from './MeetingLogs'
import MeetingLog from './MeetingLog'
import QNAs from './QNAs'
import Navbar from './Navbar'
import Greet from './Greet'

import Divider from '@mui/material/Divider';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { useMediaQuery } from "react-responsive"

import { AnnouncementRawData } from './AnnouncementRawData';
import { MeetingLogRawData } from './MeetingLogRawData';
import { QNARawData } from './QNARawData';

function App() {

  const loadData = async () => {
    try {
      var loader = []
      const QNARef = collection(db, "cbshweb");
      const q = query(QNARef, orderBy("question.date", "desc"));
      const querySnapshot = await getDocs(q);
      console.log(querySnapshot)
      querySnapshot.forEach((doc) => {
        var temp = doc.data()
        temp['id'] = doc.id
        console.log(temp)
        loader = [...loader, temp]
      });
      
      console.log(loader)
      setQNAdata(loader)
    } catch (e) {
      console.log(e);
    }
  }

  const addData = async (input_data) => {
    console.log('add test')
    await setDoc( doc(collection(db, "cbshweb")) , input_data );
  }

  React.useEffect(() => {

    const raw_data = loadData()
    
  }, []);

  // const [QNAdata, setQNAdata] = React.useState(QNARawData);
  const [QNAdata, setQNAdata] = React.useState([]);
  const [Announcementdata, setAnnouncementdata] = React.useState(AnnouncementRawData);
  const [MeetingLogdata, setMeetingLogdata] = React.useState(MeetingLogRawData);

  const isPc = useMediaQuery ({
      query: "(min-width:768px)"
  });

  const SubmitQNA = (input_data) => {
    addData(input_data)
    setQNAdata([...QNAdata, input_data].sort(
      function(a, b) {
        var dateA = a.question.date.toUpperCase(); // ignore upper and lowercase
        var dateB = b.question.date.toUpperCase(); // ignore upper and lowercase
        if (dateA > dateB) {
          return -1;
        }
        if (dateA < dateB) {
          return 1;
        }
        return 0;
      }
      ))
  }

  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <header><Link to="/" style={{textDecoration : 'none', color:'royalblue'}}><h1>&nbsp;CBSH web</h1></Link></header>
          <Navbar/>
          <Divider/>
          <Routes>
            <Route path="/" element={<Greet/>}></Route>
            <Route path="/announcement" element={<Announcements data={Announcementdata}/>}></Route>
            <Route path="/announcement/:AnnouncementID" element={<Announcement data={Announcementdata}/>}></Route>
            <Route path="/MeetingLog" element={<MeetingLogs data={MeetingLogdata}/>}></Route>
            <Route path="/MeetingLog/:MeetingLogID" element={<MeetingLog data={MeetingLogdata}/>}></Route>
            <Route path="/QNA" element={<QNAs data={QNAdata} isPc={isPc} SubmitQNA={SubmitQNA}/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
