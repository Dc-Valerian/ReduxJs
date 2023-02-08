import React from 'react'
import { useDispatch } from 'react-redux'
import { LoginUser,logoutUser } from './ReduxState/ReduceState'

const LoginPage = () => {
  const dispatch = useDispatch()
  return (
    <div>
    <div>
    <button
    onClick={()=>{
      dispatch(LoginUser({UserName:"Valerian",Age:20,Email:"valerianpedro03@gmail",Stack:"fullstack"}))
    }}
    >
    Login
    </button>
    <button
    onClick={()=>{
      dispatch(logoutUser())
    }}
    >
    LoginOut
    </button>
    </div>
    </div>
  )
}

export default LoginPage