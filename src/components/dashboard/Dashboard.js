// import React from 'react'
import React,{useState,useContext,useEffect} from 'react'
import Sidebar from './Sidebar'
import './styles/Dashboard.css'
import BankAccounts from './BankAccounts'
import Taxreturn from './Taxreturn'
import Preferences from './Preferences'
import Salary from './Salary'
import Profile from './Profile'
export default function Dashboard() {
  const [profile,setProfile] = useState(true)
  const [BankAcc,setBankAcc] = useState(false)
  const [taxReturn,setTaxreturn] = useState(false)
  const [preferences,setPreferences] = useState(false)
  const [salary,setSalary] = useState(false)
  useEffect(() => {
    
    
   
  })
  

  return (
    <>
    <Sidebar setProfile = {setProfile}  setBankAcc={setBankAcc} setTaxreturn = {setTaxreturn} setPreferences={setPreferences} setSalary={setSalary} ></Sidebar>
    <div id='optionViewBox'>
          {profile === true?<Profile></Profile>:null}
         {BankAcc === true?<BankAccounts></BankAccounts>:null}
         {taxReturn === true? <Taxreturn></Taxreturn>:null}
         {preferences === true? <Preferences></Preferences>:null }
         {salary === true ? <Salary></Salary>:null}
    </div>
    </>
    
  )
}
