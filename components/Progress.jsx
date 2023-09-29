"use client"
import './progress.css'
import React, { useEffect, useState } from 'react'


function Progress() {
const [progress,setProgress] = useState(0)

useEffect(()=>{
    const interval = setInterval(()=>{
        setProgress((preProgress)=>
        preProgress >= 100 ? 0 : preProgress + 5)
    },600)
    return()=>{
        clearInterval(interval);
    }
},[])
return (
    
<>
<div className='loadingContainer'>
    <div className='loadingBar' style={{width:`${progress}%`}}></div>
</div>
</>  )
}

export default Progress