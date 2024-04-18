// HOC: Higher order Component Wraps all components to be in the center
// Pass all Components to this and it reenders the component
import { motion, stagger } from 'framer-motion';

import {styles } from '../style';
import {staggerContainer} from '../utils/motion';

const SectionWrapper = (Component, idName) => {
    return function HOC() {
        // https://www.framer.com/motion/animation/
        return ( <motion.section 
        variants={staggerContainer()} initial="hidden" 
        // Show once and animate for 2.5 seconds
        whileInView={"show"} viewport={{once: true , amount :0.25}} 
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>

            {/* For Scrolling */}
         <span className='hash-span' id={idName}>
            &nbsp;
        </span> 
            <Component/>
        </motion.section>
        );
    }
}


export default  SectionWrapper;