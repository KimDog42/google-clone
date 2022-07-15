import { ShareIcon } from '@heroicons/react/solid'
import React from 'react'
import { Input, Spacer, Loading } from "@nextui-org/react";


function SearchFunction() {
  return (
    <div className="flex justify-center bg-black pt-80">
        <img className="h-40" src="https://cdn.discordapp.com/attachments/881019698874032220/996773429975990272/googlelogo_light_color_272x92dp.png"/>
        <ShareIcon className='h-6 flex text-gray-400 hover:text-white cursor-pointer'/>
        </div>
  )
}

export default SearchFunction