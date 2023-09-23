"use client"
import Typewriter from "typewriter-effect";
import React from 'react'

function TypeW() {
  return (   
<Typewriter
options={{
  strings: [
    "Software Developer",
    "Web Developer",
    "Full Stack Developer",
    "Backend-API Builder ",
  ],
  autoStart: true,
  loop: true,
  deleteSpeed: 50,
}}
/>
  )
}

export default TypeW