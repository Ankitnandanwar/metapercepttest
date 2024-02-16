import React from 'react'
import { dummy } from '../Dummy/DummyData'

const Cards = () => {
    return (
        <>
            <div className='mt-3'>
                <div className='text-center'>
                    <h1 style={{ fontWeight: "300" }}>Classes</h1>
                    <p className='text-muted'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem quia voluptatum hic ullam sunt</p>
                </div>

                <div className='mt-2 container'>
                    <div className='row'>
                        {
                            dummy.map((item, i) => {
                                return (
                                    <div className='col-12 col-md-4 col-lg-4 d-flex justify-content-center align-items-center'>
                                        <div className='cardBox'>
                                            <div className='cardImg'>
                                                <img src="https://img.freepik.com/free-photo/red-buildings-households_1127-2024.jpg?" alt=""/>
                                            </div>
                                            <div className='cardbody ml-2 p-2'>
                                                <p style={{ fontWeight: "600", fontSize: "18px" }}>{item.Name}</p>
                                                <p style={{ fontSize: "14px" }}>{item.ShortDesc}</p>
                                                <button className='btn border border-secondary' style={{ fontSize: "14px" }}>View</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards