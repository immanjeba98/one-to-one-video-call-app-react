import { useEffect, useRef, useState } from 'react';
import './App.css';
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt"
import { generateToken, getRandomName, randomId } from './util';

function App() {

  const myMeeting = useRef("")
  const [token, setToken] = useState("")

  useEffect(() => {
    const getData = async () => {
      const { token } = await generateToken(randomId(6), "3423", getRandomName())
      setToken(token)
    }
    getData();
  }, [])

  useEffect(() => {
    if (token && myMeeting.current) {
      const inst = ZegoUIKitPrebuilt.create(token);
      inst.joinRoom({
        container: myMeeting.current,
      })
    }
  }, [token, myMeeting.current])
  return (
    <div className='h-100'>
      <div ref={myMeeting}>
      </div>
    </div>
  );
}

export default App;
