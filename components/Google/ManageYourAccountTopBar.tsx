import React from 'react';
import { Grid, Input, Loading } from '@nextui-org/react';
import GoogleMicIcon from '../../Assetts/GoogleMicIcon';
import GoogleLogo from '../../Assetts/GoogleLogo';
import {
  QuestionMarkCircleIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";
import Profile from './../Profile';


function ManageYourAccountTopBar() {
  return (
    <div className="p-2 overflow-auto">
      <div className="flex text-white p-3 w-full space-x-5 items-center">
        <h2 className="text-black flex items-center space-x-5 font-bold">Google Account</h2>
        <div className="space-x-10 flex text-4xl items-center">
        <Grid>
          <Input
            clearable
            size="md"
            bordered
            color="primary"
            contentLeft={<GoogleLogo/>}
            labelPlaceholder="Search Google Account"
            contentRight={<GoogleMicIcon/>}
          />
        </Grid>
        </div>
    </div>

    <div className="flex absolute top-5 overflow-x-auto right-0 flex-auto space-x-5 items-center pr-5">
          <QuestionMarkCircleIcon className="h-7 text-black"/>
          <ViewGridIcon className="h-7 text-black"/>
          <img 
          className="h-10 rounded-full flex items-center"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/d13ba675122137.5c44239685eb3.gif"/>
        </div>

    </div>
  )
}

export default ManageYourAccountTopBar