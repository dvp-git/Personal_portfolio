import React from 'react';

import  { Tilt } from 'react-tilt';
import  VerticalTimeline  from 'react-vertical-timeline-component';

import { motion } from 'framer-motion';

import { styles } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';



const ServiceCard = ({index, title, icon}) => {
     return (
        <Tilt className="xs:w-[250px] w-40 flex"> 
        <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-32 sm:w-full blue-yellow-gradient p-[1px] rounded-[20px] shadow-lg  shadow-yellow-400/30 '>
            <div options={{
                max: 45,
                scale:1,
                speed:450
            }} className='bg-tertiary rounded-[20px] px-1 py-5 sm:min-h-[250px] h-[100px] flex justify-evenly items-center flex-col'>
                <img src={icon} alt={title} className='sm:w-16 w-10 h-16  object-contain'/>
                <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
            </div>

        </motion.div>
        </Tilt>
     )
    }


const About  = () =>  
{
    return (
        <>
        <motion.div variants={textVariant()}>
            {/* <p className={styles.sectionSubText}>Introduction</p> */}
            <h2 className={styles.sectionHeadText}> {`>> Overview`}</h2>
        </motion.div>

        {/* // Framer motion */}
        <motion.p variants={fadeIn("", "", 0.1, 1)}
        // https://stackoverflow.com/questions/34932063/use-code-or-similar-tags-in-reactjs-using-jsx
        className='mt-3 text-secondary text-[17px] w-max-3xl leading-[30px]'>
         {`
            Throughout my career, I have worked on a variety of projects ranging from web development to machine learning. I have a passion for learning new things and I am always looking for opportunities to learn new technologies and expand my skillset. Below are some of the tags that would describe me.
        `}
        </motion.p>

            {/* Display cards */}
        <div className='mt-20 flex flex-wrap gap-10'>
            {services.map((service, index) => (
                <ServiceCard key={service.title} index={index} { ...service}/>
            ))}
        </div>

        </>
    ) 
};

export default SectionWrapper(About,'about');