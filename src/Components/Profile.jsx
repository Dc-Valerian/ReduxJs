import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const user = useSelector((state)=>state.myReducer.current)
  return (
    <div>
    <div>UserName:{user?.userName}</div>
    <div>Age:{user?.Age}</div>
    <div>Email:{user?.Email}</div>
    <div>Stack:{user?.Stack}</div>
    </div>
  )
}

export default Profile