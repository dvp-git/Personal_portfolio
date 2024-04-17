import React, { useState, useEffect} from 'react'
import  { Link } from 'react-router-dom';

import { styles } from '../style';
import { navLinks, socialNavLinks } from  '../constants'
import { logo, menu, close } from '../assets';


const Navbar  = () => 
{
    // Keep track of the tab we are at 
    const [active , setAcive] = useState('');
    const [toggle, setToggle] = useState(false);
    return (
         <nav className={`${styles.paddingX} w-full  flex items-center  py-3 fixed  top-0 z-20 bg-primary bg-opacity-40`  }>
             <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                 <Link to="/" className=' flex items-center gap-2' 
                 onClick={() => { setAcive('');
                 window.scrollTo(0,0)}}>
                 <img src={logo} alt='logo' className='w-13 h-6 object-contain'></img>    
                 </Link>
                    {/* Social media links */}
                 <ul className='list-none hidden sm:flex flex-row-reverse gap-10'>
                    {socialNavLinks.map((link) => (
                        <li key={link.meta_url}>
                        <a href={`${link.meta_url}`} target="_blank" rel="noopener noreferrer"><img src={`${link.icon}`} className="w-13 h-6 object-contain lg:flex hidden "/></a>
                        </li>
                    ))}
                    </ul>
                    {/* Navigation tabs */}
                <ul className='list-none sm:flex hidden flex-row gap-10'>
                    {navLinks.map((link) => (
                        <li key={link.id} className={`${active === link.title ? "hover:text-yellow-400" : "text-secondary" } hover:text-yellow-400 text-[19-px] font-medium cursor-pointer`} onClick={()=> setAcive(link.title)}>
                        <a href={`#${link.id}`}> { link.title } </a>
                        </li>
                    ))}
                    </ul>

                    {/* The sm mean from sm size onwards */}

                    {/* For mobile screens */}
                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    <img src={ toggle? close: menu}  
                    alt="menu" 
                    className='w-[28px] h-[28px] object-contain cursor-pointer' 
                    onClick={() => setToggle(!toggle)}/>
                    <div className={`${!toggle?'hidden': 'flex'} p-4 bg-sky-750 border-1 absolute top-16 right-0 mx-3 min-w-[95px] z-10 rounded-xl`}>

                    {/* <ul className=' sm:hidden  justify-end items-end flex flex-row gap-10'>
                    {socialNavLinks.map((link) => (
                        <li key={link.meta_url}>
                        <a href={`${link.meta_url}`}><img src={`${link.icon}`} className='w-13 h-7 object-contain'/></a>
                        </li>
                    ))}
                    </ul> */}
                    <ul className=' sm:hidden bg-primary bg-opacity-70 justify-end items-start flex flex-col gap-4'>
                    {navLinks.map((link) => (
                        <li key={link.id} className={`${active === link.title ? "hover:text-yellow-400" : "text-secondary" } hover:text-yellow-400 text-[5-px] font-poppins font-small `} onClick={()=> { 
                            setAcive(link.title)
                        setToggle(!toggle)}}>
                        <a href={`#${link.id}`}> { link.title } </a>
                        </li>
                    ))}
                    </ul>
                    </div>
                </div>



                 </div>
         </nav>
    ) 
};

export default Navbar;
