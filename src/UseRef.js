import React, { useEffect, useState, useRef } from 'react'

export default function UseRef() {
    const [value,setValue] = useState("")

    const count = useRef(-1) //CREATES A MUTABLE VARIABLE THAT WILL NOT RE-RENDER THE ENTIRE COMPONENT
    
    useEffect(()=>{
        count.current +=1

    })


    // WE CAN GET THE TEXT INSIDE THE INPUT FIELD THROUGH THIS METHOD BUT WE CANNOT ACCESS THE WHOLE INPUT FIELD IN ORDER TO CHANGE ITS BACKGROUND COLOR OR ANY OTHER PROPERTY WE HAVE TO USE THE USEREF
    const changed = () =>{
       // console.log("the value is" + value)
    }

    //ACCESSING THE INPUT FIELD THROUGH THE USE REF AND THEN CHANGING THE BACKGROUND COLOR
    const thatButton2 = useRef("");
    const changed2 = ()=>{
        thatButton2.current.style.backgroundColor="black"
    }

    // 2ND USAGE IS TO ACCESS THE DOM DIRECTLY
  return (
    <div>
        <input type='text' ref={thatButton2} value={value} onChange={(e)=>setValue(e.target.value)}/>

        <label>{count.current}</label>
        <button onClick={changed}>Submit</button>


        <button onClick={changed2}>Submit2</button>
        
    </div>
  )
}
