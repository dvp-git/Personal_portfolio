import React from "react";
import { motion } from 'framer-motion';
import  {Tilt } from 'react-tilt';
import { styles } from '../style';
import { github } from '../assets';

import { SectionWrapper } from '../hoc';
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


// Making animation for the Project cards
const ProjectCard = ({ index, name, description, tags, image, source_code_link, }) => {
  return (
    // Rendering on all screens
    <motion.div variants={fadeIn("up","spring", index * 0.5, 0.75)} className="flex flex-wrap">
      
      {/* Display of the cards container */}

{/* 
Working
<Tilt 
      options={{max:45, scale:1, speed:450}}
      className="bg-tertiary sm:p-3 p-1 rounded-2xl sm:w-[360px] w-full shadow-lg  shadow-yellow-400/30"
      >  */}


      <Tilt 
      options={{max:45, scale:1, speed:450}}
      className="bg-tertiary sm:p-3 p-1 rounded-2xl sm:w-[360px] w-full shadow-lg  shadow-yellow-400/30"
      > 
      <div className="relative w-full  sm:h-[230px]">
        <img src={image} alt={name} className="w-[200px] flex justify-center xs:w-full h-full object-cover rounded-2xl"/>
        
      

    {/* // Making the Github icons on top of each card */}
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                <div onClick={()=> window.open (source_code_link, "_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                  <img src={github} alt="github" className="2-1/2 h-1/2 object-contain"/>
                </div>
                
                <div onClick={()=> window.open (source_code_link, "_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                  <img src={github} alt="github" className="2-1/2 h-1/2 object-contain"/>
                </div>
            </div>
        </div>

      {/* Name and description - Issue detected smaller screens*/}
      {/* <div className="mt-5 ">
        <h3 className="text-white text-center font-bold sm:text-[24px]">{name}</h3>          
        <p className="mt-2 text-secondary sm:text-[14px]">{description}</p>
      </div>  */}

      {/* Hashtags for topics - Change color: Make common for same tags */}
      {/* <div className="mt-4 ">
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>))}
      </div>  */}
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
    <motion.p variants={fadeIn("", "",0.1, 1) } className="mt-3 text-secondary text-[17px] max-w-7xl leading-[30px]">
    It works in React apps because the code is transpiled before it's loaded into the
browser. Therefore, you won't find that import statement in the final JavaScript
code that's executed in the browser. Instead, during the transpilation process, the
transpiler identifies the CSS import, removes it from the JavaScript file, and injects
the CSS code (or an appropriate link to the potentially bundled and optimized CSS
file) into the index.html file. You can confirm this by inspecting the rendered
Document Object Model (DOM) content of the loaded web page in the browser.

    </motion.p>
    </div>

  {/* Wrapper for project cards */}
    <div className="mt-30 flex flex-wrap gap-7">
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