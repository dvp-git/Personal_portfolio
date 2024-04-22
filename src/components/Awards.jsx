import React from 'react'
import  { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { SectionWrapper } from '../hoc'
import { dell_awards } from "../constants"
import { download_, view_ } from '../assets';
import { styles } from '../style';
import { fadeIn } from '../utils/motion';



const Award = ({index, name, description, img_, pdf_,date_ }) => {
     return (
                /* Removed min-h-11 *
        /* sm:min-h-11 h-fit  - 3d effect */


        // Always include initial and animate attributes 
        <motion.div    initial="hidden"
        animate="show" variants={fadeIn("right", "spring",0.5, 0.75)} >
            <div options={{
                max: 45,
                scale:1,
                speed:450,
            }} className='bg-tertiary  shadow-yellow-400/40 rounded-2xl shadow-lg  w-[100%]  sm:w-[320px] gap-3  h-full p-1 justify-center  flex flex-wrap text-center text-secondary'>
        


                {/* <img src={img_} alt={name} className='w-16 h-16 object-contain'/>
                <h3 className='text-white text-[15px] font-bold text-center'>{name}</h3> */}

                <div className="relative">
                    
                    <img src={img_} alt={name} className="rounded-2xl w-full h-full"/>


                    {/* Icons for download and Viewing */}

                    {/*  Download */ }
                    <div className="absolute inset-0 flex justify-end items-end m-2 card-img_hover ">
                        <div onClick={()=> window.open(pdf_, "_blank")} className="bg-tertiary w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                            <img src={view_} alt="View icon" className="w-1/2 h-1/2 object-contain"/>
                            
                        
                        </div>
                            <a href={pdf_} download className="bg-tertiary w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                        <img src={download_} alt="Download icon" className="w-1/2 h-1/2 object-contain"/>
                        </a>
                        
                    </div>
                </div>   
                {name}
                <span className='text-white px-1'>{description}</span>
            </div>




        </motion.div>
        // </div>
     )
    }


const Awards  = () =>  
{
    return (
        <>
        
        {/* // Framer motion */}
            {/* Display cards */}
        <p className={styles.sectionSubText}>Inspire Awards during my time at Dell Technologies</p>
            <h2 className={styles.sectionHeadText}>{`>> Awards`}</h2>


        {/* <p className='text-white'>Certifications I earned over the course of my learning</p> */}
            <div className='flex flex-wrap gap-10 justify-center '>
            
            {dell_awards.map((awards, index) => (
                <Award key={`${awards.name}-${index}`} index={index} { ...awards}/>
            ))}
        </div>

        

        </>
    ) 
};



export default SectionWrapper(Awards, "dell_awards");