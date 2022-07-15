import React from 'react'
import ManageYourAccountSidebar from '../../../components/Google/ManageYourAccountSidebar'
import ManageYourAccountTopBar from './../../../components/Google/ManageYourAccountTopBar';
import Head from 'next/head';

function YourInfo() {
  return (
    <div>
        <Head>
        <title>Google Account</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <ManageYourAccountTopBar/>
        <div className="flex justify-center">
        <img 
          className="h-20 rounded-full"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/d13ba675122137.5c44239685eb3.gif" alt="Profile Piture Goes here!"/>
        </div>
        <div className="flex justify-center">
          <h2 className="text-2xl font-semi-bold">Welcome, KimDog</h2>
        </div>
        <div className="flex justify-center">
        <h2 className="space-x-2 flex items-center">Manage your info, privacy and security to make Google work better for you.</h2><h2 className="cursor-pointer text-blue-500 flex itmes-center"> Find out more</h2>
        </div>
        <ManageYourAccountSidebar/>
    </div>
  )
}

export default YourInfo