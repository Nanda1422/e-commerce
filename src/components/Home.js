import React from 'react';
import Navbar from './Navbar';
import ImgSlider from './ImgSlider';
import Voucher from './Voucher';
import Deals from './Deals';
import TitleName from './Title'
import Title2 from './Title2'
import Bestsellers from './Bestsellers';
import Footer from './Footer';
function Home() {
  return (
    <>
    <Navbar />
    <ImgSlider />
    <Voucher/>
    <TitleName/>
    <Deals />
    <Title2/>
    <Bestsellers/> 
    <Footer/>
    </>
  )
}

export default Home