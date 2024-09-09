import React from 'react'
import TextEditor from './components/TextEditor'
import './App.css';
function App() {
  return (
    <div className='wrapper'>
    <div style={{width:"70%",height:"90%",backgroundColor:"white",borderRadius:"0.5rem"}}>
    <TextEditor />
    </div>
    
    </div>
  )
}

export default App