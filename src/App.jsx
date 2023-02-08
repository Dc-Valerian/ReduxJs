import React from 'react'
import "./App.css"
import LoginPage from './Components/LoginPage'
import Profile from './Components/Profile'

const App = () => {
  return (
    <div>
    <br/>
    <center style={{marginTop:"100px"}}>
       <LoginPage/>
    <Profile/>
    </center>
 
    </div>
  )
}

export default App