import React, {useContext, useEffect} from 'react'
import noteContext from './context/noteContext'

export default function Home() {
    const a  = useContext(noteContext)

    useEffect(()=>{
        a.update()
    },[])
  return (
    <div>Currently working in home directory and my name is {a.state.name} and my registration number is {a.state.reg}</div>
  )
}
