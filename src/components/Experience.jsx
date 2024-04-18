import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../style';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';



const ExperienceCard = ({exper, index}) => {
    return (
    <VerticalTimelineElement 
    contentStyle={{ background: '#03213873' , color: 'white' }} 
    contentArrowStyle={{borderRight: '7px solid #03213873'}} date={exper.date } dateClassName='text-secondary' iconStyle={{background:exper.iconBg}} 
    icon={
        // Make icons centered and full width and height
        <div className="flex justify-center rounded items-center w-full h-full">
            <a href={exper.url_} target="_blank" rel="noopener noreferrer" className='flex justify-center items-center w-full h-full'>
            <img src={exper.icon}
             alt={exper.company_name} 
             className='w-[100%] h-[100%] rounded-full object-contain'/>
             </a>
        </div>
    }>
        <div>
            <a href={exper.url_} target="_blank">
            <h3 className='text-white text-[24px] font-bold'>
                {exper.company_name}</h3>
                </a>
            <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0}}>{exper.title}</p>
        </div>

        <ul className='mt-5 list-disc ml-5 space-y-2 '>
           {exper.points.map((point, index) => (
            <li key={`exper-points-${index}`} className='text-white-100 text-[14px] pl-1 tracking-wider '>{point}</li>
           ))}
        </ul>
    </VerticalTimelineElement>
    )
}


const Experience  = () => {
return (
        <><motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>My Journey</p>
            <h2 className={styles.sectionHeadText}>{`>> Education & Professional Experience`}</h2>
            </motion.div>

            <div className='mt-20 flex flex-col'>
                <VerticalTimeline>
                    {experiences.map((exper,index) => (
                        <ExperienceCard key={index} exper={exper} />)
                    )}
                </VerticalTimeline>
            </div>
        </>
    ) 
}

export default SectionWrapper(Experience,"timeline");