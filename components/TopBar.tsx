import React from 'react'
import{
    HomeIcon, 
    UserCircleIcon, 
    ViewGridIcon,
} from "@heroicons/react/solid"
import Profile from "./Profile"



function TopBar() {
  return (
    <div className="itmes-center">

        <div className="flex items-center space-x-5 text-white justify-end pt-4">
        <a href="#">Gmail</a>
        <a href="#">Images</a>
        <ViewGridIcon className="h-8 hover:bg-gray-400 rounded-full"/>
        <Profile/>
        </div>
    </div>
  )
}

export default TopBar