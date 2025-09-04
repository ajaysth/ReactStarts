import React, { useEffect, useRef, useState } from 'react'

function Lets() {
    const [name, setname] = useState("")

    

    const count = useRef(0)

    const incNum = useRef()
    useEffect(()=>{
        count.current = count.current +1
        console.log(incNum.current)
    },[name])

    // const handleClick = () =>{
    //     console.log(incNum.current)

    // }

  return (
    <>
        <input className='border border-2 bg-amber-50' type="text" onChange={(e)=>{setname(e.target.value)}} />
        <h1 className='text-5xl'>{name}</h1>
        <h1 className='text-5xl' ref={incNum} >{count.current}</h1>

        {/* <button className='border border-2'onClick={handleClick} >INc</button> */}

        



        


    </>
    )
}

export default Lets