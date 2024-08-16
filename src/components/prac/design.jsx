import React from 'react'
import {Outlet} from 'react-router-dom'
import Myinside from './myinside';

export default function Design() {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen  overflow-hidden">
        <Myinside/>
        <div>{<Outlet/>}</div>    
    </div>
  )
 
}
