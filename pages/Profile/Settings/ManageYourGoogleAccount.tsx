import React from 'react'
import ManageYourAccountSidebar from '../../../components/Google/ManageYourAccountSidebar'
import Head from 'next/head';
import ManageYourAccountTopBar from '../../../components/Google/ManageYourAccountTopBar';
import { Button, Collapse, Text } from '@nextui-org/react';
import AccountCollapseMenu from './../../../components/Google/AccountCollapseMenu';

function ManageYourGoogleAccount() {
  return (
    <div>
      <Head>
        <title>Google Account</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ManageYourAccountTopBar/>
      <div className="pl-30">
      <div className="flex justify-center">
        <img 
          className="h-20 rounded-full"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/d13ba675122137.5c44239685eb3.gif" alt="Profile Piture Goes here!"/>
        </div>
        <div className="flex justify-center">
          <h2 className="text-2xl font-semi-bold">Welcome, Guest!</h2>
        </div>
        <div className="flex justify-center">
        <h2 className="space-x-2 flex items-center">Manage your info, privacy and security to make Google work better for you.</h2><h2 className="cursor-pointer text-blue-500 flex items-center"> Find out more</h2>
        </div>

        <div className="flex items-center justify-center">
        <img 
            className="h-40 flex pt-10"
            src="https://cdn.discordapp.com/attachments/881019698874032220/997282817748774912/posthijackmitigation_icon_192x192_e72e201ec825af8676dcb9e6aa9994c9.png"/>
          <div className="pt-10">
            <h2 className="font-bold">Continue securing your account</h2>
            <h2 className="pt-5">Finish setting up your security if</h2>
            <h2>you haven't already!</h2>
            <a href="#" className='pt-5 cursor-pointer text-blue-500'>Continue Security Steps</a>
          </div>

          <div className="flex pl-20 items-center pt-10">
          <img 
            className="h-40 flex pt-10 space-x-5 items-center"
            src="https://cdn.discordapp.com/attachments/881019698874032220/997284522901131284/dataandpersonalization_icon_192x192_36c8f2f8cd284ca9567f6dad397345a4.png"/>
            <div>
            <h2 className="font-bold">Privacy & Personalisation</h2>
            <h2 className="pt-5">See the data in your Google Account</h2>
            <h2>and choose what activity is saved, to</h2>
            <h2>personalise your Google experience</h2>
            <a href="#" className='pt-5 cursor-pointer text-blue-500'>Manage your data and privacy</a>
            </div>
          </div>
        </div>

        <div className="flex pl-30 items-center pt-10 justify-center">
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
          

          <div className="pt-10 flex items-center justify-center">
              <AccountCollapseMenu/>
          </div>

          <div className="justify-center pt-40">
          <h2 className="flex justify-center">Only you can see your settings. You might also want to review your settings for Maps, Search or whatever Google</h2>
          <h2 className="flex justify-center">service that you use the most. Google keeps your data private, safe and secure. Find out more</h2>
        </div>

        </div>
        <ManageYourAccountSidebar/>
    </div>
  )
}

export default ManageYourGoogleAccount