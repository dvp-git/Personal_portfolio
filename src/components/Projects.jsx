import React from "react";
import { motion } from 'framer-motion';
import  {Tilt } from 'react-tilt';
import { styles } from '../style';
import { github } from '../assets';

import { SectionWrapper } from '../hoc';
import { projects } from "../constants";
import {  view_ } from '../assets';
import { fadeIn, textVariant } from "../utils/motion";


// Making animation for the Project cards
// #ISSUE: On small screens aspect ratio issue. Workaround setting opcacity to 60%

// #FIXED: Fixed with attributes: initial="hidden" animate="show"
    
const ProjectCard = ({ index, name, description, tags, image, source_code_link, online_link }) => {
  return (
    // Rendering on all screens
    <motion.div initial="hidden"
    animate="show" variants={fadeIn("up","spring", index * 0.5, 0.75)} className="bg-tertiary   sm:p-1 p-1  w-full xs:w-[300px] sm:w-[360px] shadow-lg   shadow-yellow-400/40 rounded-2xl" >

  

{/* // Screen size below 450 having issue with titl effect - workaround opacity pre-loaded for now */}
<Tilt 
      options={{max:15, scale:1, speed:450}} className="w-full h-full">
        <div className="relative">
          <img src={image} alt={name} className="w-full h-full rounded-2xl"/>    


    {/* // Making the Github icons on top of each card */}
           {/* <div className="absolute inset-0 flex justify-end m-3 card-img_hover ">
                <div onClick={()=> window.open (source_code_link, "_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                  <img src={view_} alt="View icon" className="w-1/2 h-1/2 object-contain"/>
                </div> */}

                  <div className="absolute inset-0 flex justify-end m-3 card-img_hover ">
                  {online_link && (
                    <div onClick={()=> window.open (online_link, "_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                      <img src={view_} alt="View icon" className="w-1/2 h-1/2 object-contain"/>
                    </div>
                    )}


                
                <div onClick={()=> window.open (source_code_link, "_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                  <img src={github} alt="github" className="w-1/2 h-1/2 object-contain"/>
                </div>
          </div>  
        </div>   

      {/* Name and description - Issue detected smaller screens*/}
      <div className="mt-1">
        <h3 className="text-white font-bold object-contain">{name}</h3>          
        <p className="my-2 text-secondary text-[14px] object-contain">{description}</p>
      </div> 
      

      {/* Hashtags for topics - Change color: Make common for same tags */}
          <div className="mt-0 space-x-3 space-y-3">
        {tags.map((tag) => (
          <button type="button" key={tag.name} className={`${tag.color} border border-cyan-950 border-spacing-2 p-1 rounded-full `}>{ tag.name }</button>))}
        </div>     

  
      </Tilt> 
    </motion.div>
  )
}


const Projects = () => {
  return(
    <>
    <motion.div >
    <p className={styles.sectionSubText}>
        Academic and personal projects 
      </p>
      <h2 className={styles.sectionHeadText}>
        {`>> Projects`}
      </h2>
    </motion.div>

    <div className="w-full flex">
    <motion.p variants={fadeIn("", "",0.1, 1) } initial="hidden"
    animate="show" className="mt-3 text-secondary text-[17px] max-w-7xl leading-[30px]">
    It is essential to work on projects in order to experiment and learn new things. Below are some of the projects that I have worked on.
    </motion.p>
    </div>

  {/* Wrapper for project cards */}
    <div className="flex flex-wrap gap-7 justify-center">
    {projects.map((project, index) => (
      <ProjectCard
        key={`project-${index}`}
        index={index} 
        {...project}/>
    ))}


    </div>



    </>
    
  )
}

// Always wrap the above retrun in <><> when using SectionWrapper
export default  SectionWrapper(Projects,"projects") ;