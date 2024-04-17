import React from 'react'
import { styles } from '../style';
import { profile_pic }  from '../assets';
import { useEffect, useRef } from 'react';
import { NameCardCanvas } from './canvas';
import  icons8star  from '../assets/icons8-star.gif';
const Hero  = () => 
{
    const text = `${`mg src={profile_pic} alt="profile_pic" style={styles.profile_pic} className=' flex rounded-full object-contain opacity-80 sm:w-[200px] w-[120px] mx-auto my-auto'/> A B C D E F G H I J K L M N O P Q R SDASD ASDAS DASD T U V W X
    {<br />}
    The image is moving because the text is being added to the div below it, which pushes the image up. To prevent this, you can use CSS to position the image and the div independently of each other.
    One way to do this is to use absolute positioning for the image and the div. Here's how you can modify your code:`}`

    const elementRef = useRef('');
    useEffect(() => {
                let i = 0;
                const intervalId = setInterval(() => {
                    if (i < text.length) {
                        elementRef.current.textContent += text.charAt(i);
                        i++;
                    } else {
                        clearInterval(intervalId);
                    }
                }, 10); // Speed value
        
                // Cleanup during function unmounts
                return () => {
                    clearInterval(intervalId);
                elementRef.current.textContent = '';
                };
            }, [text]);
    return (
        <section className='relative w-full h-screen mx-auto  overflow-auto overscroll-y'>
           {/* <div className='absolute top-[80px] mx-auto flex md:flex-row flex-col  justify-items-center sm:px-10 px-auto my-auto gap-1 md:gap-4 max-2-7xl' > */}
          
            <div className={`${styles.paddingX} absolute top-[80px] max-2-7xl mx-auto flex md:flex-row flex-col items-start gap-5`}>
                
                <div className='flex flex-col items-center justify-center mt-5'>
                <h1 className={`${styles.heroHeadText} mx-auto flex-row`}>Hi, I'm <span className='text-yellow-400'>Darryl</span></h1>
                <p className={`${styles.heroSubText} mx-auto flex-row`}>Nice to meet you!</p>
                </div>
                {/* <img src={profile_pic} alt="profile_pic" style={styles.profile_pic} className=' flex rounded-full object-contain opacity-80 sm:w-[200px] w-[120px] mx-auto my-auto'/> */}
                <img src={profile_pic} alt="profile_pic" style={styles.profile_pic} className='object-contain rounded-full opacity-80 sm:w-[180px] w-[100px] sm:mx-auto mx-auto'/>
                    <div ref={elementRef} className='flex flex-col  items-center mt-5  text-white' > 
                </div>        
            </div>
            
            {/* The navigation icon */}
            <div className='absolute xs:bottom-10 bottom-20  w-full flex justify-center items-center'>
                <a href='#about'>
                    <img src={icons8star} alt="loading..." className='opacity-50' />
                </a>
            </div>
        </section>
    ) 
}

export default Hero;

