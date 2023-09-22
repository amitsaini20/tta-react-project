import React from 'react'
import { NavLink } from 'react-router-dom'
import Content from './content'
import Footer from './footer'


function Navbar() {
    return (
        <div className='layout'>
            <div className='nav'>
                <div className='left-nav'>
                    <p className='txt'>Amit Profile</p>
                </div>
                <div className='right-nav'>
                <button className='btn'><NavLink className="link" to="/">Sign Up</NavLink></button>
                    {/* <NavLink className="link" to="/">Sign Up</NavLink> */}
                </div>
            </div>
            <Content/>
            <Footer/>

        </div>


    )
}

export default Navbar