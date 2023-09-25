import Nav from '@/components/AdminSlider'
import React from 'react'

function layout({children}) {
  return (
    <div className=' max-w-[1535px] mx-auto'>
        <Nav/>
        {children}
    </div>
  )
}

export default layout