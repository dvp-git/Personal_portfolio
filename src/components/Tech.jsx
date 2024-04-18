import React from 'react'
import  { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { SectionWrapper } from '../hoc'
import { technologies } from "../constants"

import { styles } from '../style';
import { fadeIn, textVariant } from '../utils/motion';



const SkillCard = ({index, name, icon}) => {
     return (
        <Tilt className="xs:w-[150px] w-full"> 
        <motion.div variants={fadeIn("right", "spring", "", 0.75)} className='w-full blue-yellow-gradient p-[1px] rounded-full shadow-lg  shadow-yellow-400/30'>
            <div options={{
                max: 45,
                scale:1,
                speed:450
            }} className='bg-tertiary rounded-full min-h-11 flex justify-evenly items-center flex-col'>
                {/* <img src={icon} alt={name} className='w-16 h-16 object-contain'/> */}
                <h3 className='text-white text-[15px] font-bold text-center'>{name}</h3>
            </div>

        </motion.div>
        </Tilt>
     )
    }


const Tech  = () =>  
{
    return (
        <>
        
        {/* // Framer motion */}
            {/* Display cards */}
        <p className={styles.sectionSubText}>Programming languages, frameworks and areas of interest</p>
            <h2 className={styles.sectionHeadText}>{`>> Skills`}</h2>


            <p className='text-white'>Programming Languages:</p>
            <div className='mt-10 mb-10  flex justify-center flex-wrap gap-10'>
            
            {technologies.lang.map((skill, index) => (
                <SkillCard key={skill.name} index={index} { ...skill}/>
            ))}
        </div>

        <p className='text-white'>Database:</p>
        <div className='mt-10 mb-10 flex justify-center flex-wrap gap-10'>
        
            {technologies.database.map((skill, index) => (
                <SkillCard key={skill.name} index={index} { ...skill}/>
            ))}
        </div>

        <p className='text-white'>Frameworks and Libraries:</p>
        <div className='mt-10 mb-10  flex justify-center flex-wrap gap-10'>
            {technologies.frameworks.map((skill, index) => (
                <SkillCard key={skill.name} index={index} { ...skill}/>
            ))}
        </div>

        <p className='text-white'>Tools & Technology:</p>
        <div className='mt-10 mb-10 flex justify-center flex-wrap gap-10'>
            {technologies.tools.map((skill, index) => (
                <SkillCard key={skill.name} index={index} { ...skill}/>
            ))}
        </div>

        </>
    ) 
};



export default SectionWrapper(Tech, "skills");