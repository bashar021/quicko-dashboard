import React from 'react'
import avatar  from './images/avatar.png'
export default function Sidebar(props) {
  function closeAllViews(){
    props.setPreferences(false);
    props.setTaxreturn(false);
    props.setBankAcc(false);
    props.setSalary(false)
    props.setProfile(false);
  }
  

  return (
    <div id='sideBar'>
      <div id='profileImgShowBox'>
        <img src={avatar} alt="avatar"  />
        <p>HIMANSHU SINGH</p>
        <p>NUAps6483</p>
      </div>

      <div id='dashboardSidebarOptions'>
        <ul>
          <li onClick={()=>{closeAllViews();props.setProfile(true)}}>Profile</li>
          <li onClick={()=>{closeAllViews();props.setBankAcc(true)}}>Bank Accounts</li>
          <li onClick={()=>{closeAllViews();props.setTaxreturn(true);}}>TAX Return</li>
          <li onClick={()=>{closeAllViews();props.setPreferences(true);}}>Preferences</li>
          <li onClick={()=>{closeAllViews();props.setSalary(true)}}>Salary</li>



        </ul>
      </div>
    </div>
  )
}
