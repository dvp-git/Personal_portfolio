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
    <motion.div variants={fadeIn("up","spring", index * 0.5, 0.75)}>
      <Tilt 
      options={{max:45, scale:1, speed:450}}
      className="bg-tertiary p-5 rounded-2xl  sm:w-[360px] w-full"
      >
      <div className="relative w-full h-[230px]">
        <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl"/>
     

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

      {/* Name and description */}
      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>          
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      {/* Hashtags for topics - Change color: Make common for same tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>


        ))}
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
        My Work 
      </p>
      <h2 className={styles.sectionHeadText}>
        {`>> Projects`}
      </h2>
    </motion.div>

    <div className="w-full flex">
    <motion.div variants={fadeIn("", "",0.1, 1) } className="mt-3 text-secondary text-[17px] max-2-3xl leading-[30px]">
    It works in React apps because the code is transpiled before it's loaded into the
browser. Therefore, you won't find that import statement in the final JavaScript
code that's executed in the browser. Instead, during the transpilation process, the
transpiler identifies the CSS import, removes it from the JavaScript file, and injects
the CSS code (or an appropriate link to the potentially bundled and optimized CSS
file) into the index.html file. You can confirm this by inspecting the rendered
Document Object Model (DOM) content of the loaded web page in the browser.

    </motion.div>
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