import React from 'react';
import MobileHero from '../img/image-hero-mobile.jpg';
import desktopHero from "../img/image-hero-desktop.jpg";
const Showcase = () => {
  return ( 
    <>
      <section className="md:hidden">
       <img src={MobileHero} alt="" />
      </section>

      <section className="hidden md:block">
      <img src={desktopHero} alt="" className="w-full"/>
      </section>
    </>
  )
}
export default Showcase;
