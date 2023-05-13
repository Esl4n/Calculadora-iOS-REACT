import { useState } from 'react'
import './App.css'

import Panel from "./components/Panel"
import Board from './components/Board'

function App() {
  const [valor,setValor] = useState("")
  
  

  return (
    <>
      <h1><span>C</span>alculadora<br/> <span>i</span>OS</h1>
      <div className='calculator'>
        <Panel valor={valor}/>
        <Board valor={valor} setValor={setValor}/>
      </div>
    </>
  )
}

export default App
