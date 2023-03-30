import React from 'react'
import BurgerMenu from '../components/BurgerMenu'

export const Home = () => {
  return (
    <div className='background'>
        <BurgerMenu />
        <h1>Home</h1>
        <div className='homeFlexBox'>
          <div className='home1'></div>
          <div className='home2'></div>
        </div>
        <div className='homeBorder'></div>
    </div>
  )
}