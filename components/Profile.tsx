import { UserCircleIcon } from '@heroicons/react/solid'
import React from 'react'
import { Dropdown, Avatar, Text, Grid, User, Input, Spacer } from "@nextui-org/react";

function Profile() {
  return (
    <div className="pr-4 pl-0">
        <div className="text-white pr-4">
        <button>
          <a href="Profile/Login" className="bg-blue-600 h-10 p-3 rounded">Sign In</a>
        </button>
        </div>
    </div>
  )
}

export default Profile