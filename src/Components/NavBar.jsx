import { useState } from 'react';
import HamburgerIcon from "../assets/icon-hamburger.svg";
import HamburgerIconDeactivated from "../assets/icon-hamburger-deactivate.svg";
import ArrowIcon from "../assets/icon-chevron.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  const navbarHeight = '4rem';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 text-white border-b border-white font-antonio bg-black-space">
      <div className="max-w-6xl mx-auto px-4 flex justify-between md:flex-col xl:flex-row">
        <div className="flex items-center py-4 md:justify-center xl:justify-normal">
          <a href="#" className="font-bold text-xl tracking-widest uppercase">The Planets</a>
        </div>
        <div className="hidden md:flex items-center space-x-1 uppercase text-white opacity-80 text-base tracking-wide
        md:justify-center xl:justify-normal desktop-link">
         
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
            <img src={isMenuOpen ? HamburgerIconDeactivated : HamburgerIcon} alt='Menu Icon' />
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      <div 
        className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} fixed top-[${navbarHeight}] left-0 right-0 bottom-0 z-40 bg-black-space font-spartan
        pt-4`}
        style={{ top: navbarHeight }}
      >
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
                 </li>                 <li className='flex justify-between items-center border-b border-white px-4'>
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