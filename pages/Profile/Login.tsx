import React from 'react'
import LoginButtonsComponent from "../../components/Login/LoginButtonsComponent"
import LoginForm from '../../components/Login/LoginForm';
import { Loading, Spacer, Grid, Progress} from "@nextui-org/react";
import { Spinner } from '@chakra-ui/react'

function Login() {
  return (
    <div className="bg-black h-screen">
        <LoginForm/>
        <div className="flex justify-center pt-10">
        <Loading size="xl" textColor="primary" type="default">Waiting For User Sign In Request!</Loading>
        </div>
        <LoginButtonsComponent/>
        
    </div>
  )
}

export default Login