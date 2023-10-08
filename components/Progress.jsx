"use client"
import './progress.css'
import React, { useEffect, useState } from 'react'


function Progress() {
const [progress,setProgress] = useState(0)

useEffect(()=>{
    const interval = setInterval(()=>{
        setProgress((preProgress)=>
        preProgress >= 100 ? 0 : preProgress + 10)
    },500)
    return()=>{
        clearInterval(interval);
    }
},[])
return (
    
<>
<div className='loadingContainer'>
    <div className='loadingBar' style={{width:`${progress}%`}}></div>
</div>
<div className='flex items-center justify-center w-screen h-screen overflow-hidden'>
<span class="loader"></span>
</div>
</>  )
}

export default Progress