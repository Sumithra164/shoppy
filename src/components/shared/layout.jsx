import React from 'react'
import {Outlet} from 'react-router-dom'
import Sidebar from './sidebar';
import Header from './header';
export default function layout() {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
        <Sidebar/>
        <div className="flex-1">
        <Header/>
        <div>{<Outlet/>}</div>
        </div>
       
    </div>
  )
 
}
