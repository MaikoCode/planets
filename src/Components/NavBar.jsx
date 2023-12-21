import  { useState } from 'react';
import HamburgerIcon from "../assets/icon-hamburger.svg";

import HamburgerIconDeactivated from "../assets/icon-hamburger-deactivate.svg"

import ArrowIcon from "../assets/icon-chevron.svg"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="text-white font-antonio">
      <div className="max-w-6xl mx-auto">
          <div className="flex justify-between space-x-7 border-b px-4 border-white">
            <div className="flex items-center py-4 px-2">
                <a href="#" className="font-bold text-xl tracking-widest uppercase">The Planets</a>
            </div>
            <div className="hidden md:flex items-center space-x-1 uppercase text-gray text-base tracking-wide mx-auto">
              <a href="#" className="py-4 px-2">mercury</a>
              <a href="#" className="py-4 px-2">venus</a>
              <a href="#" className="py-4 px-2">earth</a>
              <a href="#" className="py-4 px-2">mars</a>
              <a href="#" className="py-4 px-2">jupiter</a>
              <a href="#" className="py-4 px-2">saturn</a>
              <a href="#" className="py-4 px-2">uranus</a>
              <a href="#" className="py-4 px-2">neptune</a>
            </div>

            <div className="md:hidden flex items-center">
                <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? 
                   <img src={HamburgerIconDeactivated} alt='icon' /> :
                   <img src={HamburgerIcon} alt='icon' /> 
                    }
                </button>
            </div>
          </div>
       
      </div>
      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} font-spartan`}>
              <ul>
                <li className='flex justify-between items-center border-b border-white px-4'>
                    <div className='flex items-center py-4'>
                        <span className='w-4 h-4 rounded-full bg-mercury block mr-4'></span>
                        <span className='uppercase tracking-widest text-xs mt-0.5 font-bold'>mercury</span>
                    </div>
                    <div>
                        <img src={ArrowIcon} alt="icon" />
                    </div>
                </li>
               
                <li className='flex justify-between items-center border-b border-white px-4'>
                    <div className='flex items-center py-4'>
                        <span className='w-4 h-4 rounded-full bg-venus block mr-4'></span>
                        <span className='uppercase tracking-widest text-xs mt-0.5 font-bold'>venus</span>
                    </div>
                    <div>
                        <img src={ArrowIcon} alt="icon" />
                    </div>
                </li>
                <li className='flex justify-between items-center border-b border-white px-4'>
                    <div className='flex items-center py-4'>
                        <span className='w-4 h-4 rounded-full bg-earth block mr-4'></span>
                        <span className='uppercase tracking-widest text-xs mt-0.5 font-bold'>earth</span>
                    </div>
                    <div>
                        <img src={ArrowIcon} alt="icon" />
                    </div>
                </li>
                <li className='flex justify-between items-center border-b border-white px-4'>
                    <div className='flex items-center py-4'>
                        <span className='w-4 h-4 rounded-full bg-mars block mr-4'></span>
                        <span className='uppercase tracking-widest text-xs mt-0.5 font-bold'>mars</span>
                    </div>
                    <div>
                        <img src={ArrowIcon} alt="icon" />
                    </div>
                </li>
                <li className='flex justify-between items-center border-b border-white px-4'>
                    <div className='flex items-center py-4'>
                        <span className='w-4 h-4 rounded-full bg-mercury block mr-4'></span>
                        <span className='uppercase tracking-widest text-xs mt-0.5 font-bold'>mercury</span>
                    </div>
                    <div>
                        <img src={ArrowIcon} alt="icon" />
                    </div>
                </li>
                <li className='flex justify-between items-center border-b border-white px-4'>
                    <div className='flex items-center py-4'>
                        <span className='w-4 h-4 rounded-full bg-jupiter block mr-4'></span>
                        <span className='uppercase tracking-widest text-xs mt-0.5 font-bold'>jupiter</span>
                    </div>
                    <div>
                        <img src={ArrowIcon} alt="icon" />
                    </div>
                </li>
                <li className='flex justify-between items-center border-b border-white px-4'>
                    <div className='flex items-center py-4'>
                        <span className='w-4 h-4 rounded-full bg-saturn block mr-4'></span>
                        <span className='uppercase tracking-widest text-xs mt-0.5 font-bold'>saturn</span>
                    </div>
                    <div>
                        <img src={ArrowIcon} alt="icon" />
                    </div>
                </li>
                <li className='flex justify-between items-center border-b border-white px-4'>
                    <div className='flex items-center py-4'>
                        <span className='w-4 h-4 rounded-full bg-uranus block mr-4'></span>
                        <span className='uppercase tracking-widest text-xs mt-0.5 font-bold'>uranus</span>
                    </div>
                    <div>
                        <img src={ArrowIcon} alt="icon" />
                    </div>
                </li>
                <li className='flex justify-between items-center border-b border-white px-4'>
                    <div className='flex items-center py-4'>
                        <span className='w-4 h-4 rounded-full bg-neptune block mr-4'></span>
                        <span className='uppercase tracking-widest text-xs mt-0.5 font-bold'>neptune</span>
                    </div>
                    <div>
                        <img src={ArrowIcon} alt="icon" />
                    </div>
                </li>
              </ul>
     
      </div>
    </nav>
  );
};

export default Navbar;