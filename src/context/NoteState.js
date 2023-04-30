import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) =>{
    const s1= {
        "name":"hassaan",
        "reg":"FA20-BCS-055"
    }   
    const [state,setState] = useState(s1)

    
    const update = ()=>{
        setTimeout(()=>{
            setState({
                "name":"Muhammad Hassaan Ali",
                "reg":"Fa20-bcs-055"
            })
        },2000)
    }
    return(
        <noteContext.Provider value={{state:state, update:update}}>
            {props.children}
        </noteContext.Provider>
    )
}
export default NoteState