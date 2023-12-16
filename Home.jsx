import React from 'react'
import './home.css'
import Sidebar from '../Sidebar/Sidebar'
import Topbar from '../Topbar/Topbar'



const Home = (props) => {
  return (
    <div>
      <div>
    <Topbar xxx={props.checkLogout}/>
    <Sidebar/>

 </div>
    </div>
  )
}

export default Home
