import { useState } from 'react'

function App() {
  const [counter, calculated] = useState(15)
  // let counter = 5;
  const addValue = () => {
    calculated(counter+1)
  }
  const removeValue = () =>{
    calculated(counter-1)
    
  }

  return (
    <>
    
      <h1>Counter Value: {counter}</h1>
      <button onClick={addValue}>Add</button>
      <br />
      <button onClick={removeValue}>Remove</button>
    </>
  )
}

export default App
