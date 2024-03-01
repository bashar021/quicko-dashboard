import React from 'react'

export default function BankAccounts() {
  return (
    <>
    <div id='bankAccounts'>
        <div id='bankAccTitleBox'>
            <h6>Your Bank Accounts</h6>
            <p className='grey'>seems like you have not added your primary bank account yet, Please add your bank account so that we can process tax refund </p>
        </div>

        <div id='addBankAccBox'>
            <ul>
                <li>
                    {/* <p></p> */}
                    <h5>Add your bank account</h5>
                    <p className='grey'>add your bank account so that we can process your Tax refund</p>
                </li>
                <li className='link'>DOMESTIC BANK ACCOUNT </li>
                <li className='link'>FOREIGN ACCOUNT</li>
            </ul>
        </div>
     
    </div>
    </>
    
  )
}
