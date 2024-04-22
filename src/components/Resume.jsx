import React from 'react'
import { resume } from '../assets';
import { download_, view_ } from '../assets';
import { SectionWrapper } from '../hoc';
import { styles } from '../style';
const Resume  = () => 
{
    return (
            <>
            <h2 className={styles.sectionHeadText}>{`>> Resume`}</h2>
            <div className="flex flex-start gap-3 inset-0  m-2 card-img_hover">
            <h1>My Resume</h1>
            <div onClick={()=> window.open(resume, "_blank")} className="bg-tertiary w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                            <img src={view_} alt="View icon" className="w-1/2 h-1/2 object-contain"/>
                            
                        
                        </div>
                            <a href={resume} download className="bg-tertiary w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                        <img src={download_} alt="Download icon" className="w-1/2 h-1/2 object-contain"/>
                        </a>
                        
                    </div>
                </>
    ) ;
}

export default SectionWrapper(Resume, 'resume');