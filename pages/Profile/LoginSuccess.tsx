import React from 'react';
import { Loading, Spacer, Grid, Progress} from "@nextui-org/react";

function LoginSuccess() {
  return (
    <div className="bg-black h-screen">
        <div className="flex justify-center pt-80">
        <Loading size="xl" color="primary" textColor="primary">You Can Now Return Back To Google!</Loading>
        </div>
        <div className="flex justify-center pt-10">
        <a href="/" className="rounded p-3 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-160 hover:bg-gray-900 duration-300 cursor-pointer">Take Me Back To The Google Clone Google</a>
        </div>
    </div>
  )
}

export default LoginSuccess