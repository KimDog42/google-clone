import React from 'react'
import ManageYourAccountSidebar from '../../../components/Google/ManageYourAccountSidebar'
import ManageYourAccountTopBar from './../../../components/Google/ManageYourAccountTopBar';
import {
    ArrowDownIcon,
} from "@heroicons/react/outline"

function DataAndPrivacy() {
  return (
    <div className="pl-30">
        <ManageYourAccountTopBar/>
        <div>
            <div>
            <h1 className="text-black flex justify-center font-bold text-4xl">Data and Privacy</h1>
            </div>
            <h2 className="flex justify-center pt-5">Key privacy options to help you choose the data saved in your account, the ads you</h2>
            <h2 className="flex justify-center">see, info you share with others and more</h2>
        </div>

        <div className="flex pl-30 items-center pt-5 justify-center">
          <img 
            className="h-40 flex pt-10 space-x-5 items-center"
            src="https://cdn.discordapp.com/attachments/881019698874032220/997291117693378640/48cd8abcf379b6ae.png"/>
            <div>
            <h2 className="font-bold">Privacy suggestions available</h2>
            <h2>Take the Privacy Check-Up and choose the settings that are right for</h2>
            <h2>you.</h2>
            <a href="#" className='pt-5 cursor-pointer text-blue-500'>Review suggestion</a>
            </div>
          </div>

          <div className="pl-30">
            <h2 className="flex justify-center font-bold text-2xl pt-10">Your data and privacy options</h2>
            <h2 className="flex justify-center pt-5">Things you've done and places you've been</h2>
            <h2 className="flex justify-center pt-5">Info that you can share with others</h2>
            <h2 className="flex justify-center pt-5">Data from apps and services that you use</h2>
            <h2 className="flex justify-center pt-5">More Options</h2>
          </div>

          <div>
            <h2 className="font-bold text-2xl pt-10 flex justify-center">Things you’ve done and places</h2>
            <h2 className="font-bold text-2xl flex justify-center">you’ve been</h2>
            <h2 className="flex justify-center pt-10">Your options for history, ads and personalisation. Rediscover the</h2>
            <h2 className="flex justify-center">things that you’ve searched for, read and watched, and see the</h2>
            <h2 className="flex justify-center">places where you’ve visited.</h2>
          </div>


        <ManageYourAccountSidebar/>
    </div>
  )
}

export default DataAndPrivacy