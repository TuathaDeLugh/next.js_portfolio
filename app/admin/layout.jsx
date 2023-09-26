import Nav from '@/components/AdminSlider'
import React from 'react'

function layout({children}) {
  return (
    <div>
        <Nav/>
        <div className="relative bg-green-50 md:pt-8 -mt-2 pb-36 pt-12 -z-10">
      </div>
    <div className="flex max-w-7xl -mt-44 pt-10 flex-wrap mx-auto pb-48">
        {children}
        </div>
    </div>
  )
}

export default layout