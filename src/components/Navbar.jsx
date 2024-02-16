import React from 'react'
import { IoMdMenu } from "react-icons/io";


const Navbar = () => {
    return (
        <>
            <div className='d-flex justify-content-between pt-2 px-3 border border-muted' style={{cursor:"pointer"}}>
                <div>
                    <h3 className='text-danger'>Title</h3>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <ul className='d-flex justify-content-center align-items-center' style={{gap:"1rem"}}>
                        <li>Home</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li><button className='btn text-primary border border-primary bg-white p-1 px-2' style={{borderRadius:"4px", fontSize:"14px"}}>Button</button></li>
                    </ul>
                </div>
                <div className='hamburgerMenu'>
                    <IoMdMenu />
                </div>

            </div>
        </>
    )
}

export default Navbar