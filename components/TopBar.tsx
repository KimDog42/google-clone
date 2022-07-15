import React from 'react'
import{
    HomeIcon, 
    UserCircleIcon, 
    ViewGridIcon,
} from "@heroicons/react/solid"
import Profile from "./Profile"



function TopBar() {
  return (
    <div className="items-center">

        <div className="flex items-center space-x-5 text-white justify-end pt-4">
        <a href="https://google.com/gmail">Gmail</a>
        <a href="https://www.google.co.uk/imghp?hl=en&ogbl">Images</a>
        <ViewGridIcon className="h-8 hover:bg-gray-400 rounded-full"/>
        <Profile/>
        <a href="Profile/Settings/ManageYourGoogleAccount" className="bg-blue-600 h-10 p-3 rounded">Manage Your Account (Temp Placement for this)</a>
        </div>
    </div>
  )
}

export default TopBar