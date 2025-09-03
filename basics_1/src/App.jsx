

import { useState, useEffect, useContext, createContext } from "react";
import Second from "./ssecond";

export const logincontext = createContext();

function App() {
  // const [counter,setCounter] = useState(22)
  // const [name, setname] = useState("")

  // const [details, setDetails] = useState({age : 0, counter2 : 10})

  


  // function increaseCounter(){
  //   setCounter(prevcounter => prevcounter + 1)
  //   setCounter(prevcounter => prevcounter + 1)
  // }

  // function alterValue(){
  //   setDetails(prevdetails =>({age : prevdetails.age+1,
  //     counter2 : prevdetails.counter2 +2
  //   }))
    
  // }

  // useEffect(() => {
  //   // document.title = `${counter} new messages!!`;
  //   document.title = Math.random();

  // }, [counter])

  return (
    <>
    <logincontext.Provider value={"ajay"}>
        {/* <input type="text" onChange={e =>{setname(e.target.value)}}  />
        <h1> {name} clicked Counter : {counter}  times!!</h1>
        <button onClick={increaseCounter}>Change it</button>

        <label htmlFor="Another counter and age"></label>
        <h2>Age is :  {details.age} and counter2 is : {details.counter2}</h2>
        
        <button onClick={alterValue}>Alter</button> */}

        <Second />

    </logincontext.Provider>

    
    

      
    </>
  )
}

export default App
