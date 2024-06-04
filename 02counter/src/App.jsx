import { useState } from 'react'
import './App.css'

function App() {
let [counter,setCounter]  = useState(15)

  const addValue=()=>{
    if (counter<20) {
      console.log("clicked", counter)
      setCounter(counter+1)
      
    }
  }

  const removeValue= ()=>{
    if (counter >0) {
      setCounter(counter-1)
    }
  }
  return (
<>
<h1> ashvin counter</h1>
<h2>Counter Value :{counter}</h2>
<button onClick={addValue}>Add Value :{counter}</button>
<br/>
<button onClick={removeValue}>Decrease Value :{counter}</button>
<p>footer :{counter}</p>
</>
  )
}

export default App
