import React from 'react'
import { Toaster } from 'react-hot-toast';

function ToastCont() {
  return (
    <div><Toaster
    position="top-center"
    reverseOrder={false}
    duration= "4000"
  />
    </div>
  )
}

export default ToastCont