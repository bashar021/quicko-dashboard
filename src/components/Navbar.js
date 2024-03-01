import React from 'react'
import './styles/Navbar.css'
import home from './images/home.jpeg'
import planning from './images/planning.jpeg'
import filing from './images/filling.jpeg'
import userLogo from './images/user-logo.jpeg'
export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar-cont'>
                <h2>ITR</h2>
                <div className='navbar-link'>
                    <p><img src={home} alt="" />Home</p>
                    <p><img src={planning} alt="" />Planing</p>
                    <p><img src={filing} alt="" />Filing</p>
                </div>
                <p>NUAMD5522P<img src={userLogo} alt="user" /></p>
            </div>
        </div>
    )
}
