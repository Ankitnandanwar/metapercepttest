import React from 'react'

const HeroSection = () => {
  return (
    <>
        <div className='herosection'>
            <div className='text-center text-white'>
              <h2 style={{fontWeight:"300"}}>Title</h2>
              <p className='m-0' style={{fontWeight:"300", fontSize:"17px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit Sunt quos voluptatibus</p>
              <p className='m-0' style={{fontWeight:"300", fontSize:"17px"}}> eum, odit a cupiditate labore eius cum autem.</p>
              <button className='btn mt-3'>Read More</button>
            </div>
        </div>   
    </>
  )
}

export default HeroSection