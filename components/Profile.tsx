import { UserCircleIcon } from '@heroicons/react/solid'
import React from 'react'
import { Dropdown, Avatar, Text, Grid, User, Input, Spacer } from "@nextui-org/react";

function Profile() {
  return (
    <div className="pr-4 pl-0">
        <div className="text-white pr-4">
          <a href="/Profile/Login">
          <UserCircleIcon className="h-10"/>
          </a>
        </div>
    </div>
  )
}

export default Profile