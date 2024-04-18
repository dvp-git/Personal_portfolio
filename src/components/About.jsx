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
        <Tilt className="xs:w-[250px] w-40"> 
        <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full blue-yellow-gradient p-[1px] rounded-[20px] shadow-lg  shadow-yellow-400/30'>
            <div options={{
                max: 45,
                scale:1,
                speed:450
            }} className='bg-tertiary rounded-[20px] px-12 py-5 min-h-[280px] flex justify-evenly items-center flex-col'>
                <img src={icon} alt={title} className='w-16 h-16  object-contain'/>
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
         "The variants prop in Framer Motion takes an object where each key is the name of a variant and each value is an object describing the state of the animation for that variant. The state object can contain properties like x, y, scale, rotate, backgroundColor, opacity, etc., and a transition object that describes how the animation should transition to this state.

        "Here's the general structure of a variants object:          
       
                 {
            variantName1: {
                property1: value,
                property2: value,
                // ...
                transition: {
                // transition properties...
                },
            },
            variantName2: {
                // ...
            },
            // ...
            } 
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