
import { useEffect, useState } from 'react'
import './App.css'

function App() {
const [answer,setAnswer] =useState('');
useEffect(() => {
    const fetchAnswer = async () => {
const res = await fetch('http://56.228.33.155:3001/api/get-answer');
      const json = await res.json();
      setAnswer(json.data);
    };

    fetchAnswer();

    const interval = setInterval(fetchAnswer, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
     <span id="answer">{answer}</span>
    </>
  )
}

export default App;
