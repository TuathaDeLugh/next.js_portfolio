import Nav from '@/components/AdminSlider'
import React from 'react'

function layout({children}) {
  return (
    <div>
        <Nav/>
        <div className="relative bg-green-300 md:pt-32 -mt-2 pb-32 pt-12">
      </div>
    <div className="flex max-w-7xl -mt-52 pt-10 flex-wrap mx-auto pb-48">
        {children}
        </div>
    </div>
  )
}

export default layout