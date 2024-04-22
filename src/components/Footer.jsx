import React, { useState, useEffect} from 'react'
import  { Link } from 'react-router-dom';
import { styles } from '../style';
import { socialNavLinks } from  '../constants'

const Footer  = () => 
{

    return (
         <nav className={`${styles.paddingX} w-full  flex items-center  py-3  bottom-0 z-20 bg-primary bg-opacity-80`  }>
             <footer className="w-full flex justify-center items-center max-w-7xl mx-auto">
                <p>Thank you for visiting my website.</p>
                <br />
                    <p>©️ Darryl Vas Prabhu</p>
            </footer>
        </nav>

    ) 
};

export default Footer;
