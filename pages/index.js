import React from 'react'
import { Product , FooterBanner , HeroBanner } from '../components'
const Home = () => {
  return (
    <>
      <HeroBanner/>
      <div className='products-heading'>
        <h2>Best Selling</h2>
        <p>Cookies with many tastes</p>
      </div>
      <div className='products-container'>
        {['Product1', 'Product2', 'Product3'].map((product)=>product)}
      </div>
      <FooterBanner/>
    </>
  )
}

export default Home
