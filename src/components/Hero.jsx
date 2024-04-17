import React from 'react'
import { styles } from '../style';
import { profile_pic }  from '../assets';
import { useEffect, useRef } from 'react';

const Hero  = () => 
{
    const text = `${`mg src={profile_pic} alt="profile_pic" style={styles.profile_pic} className=' flex rounded-full object-contain opacity-80 sm:w-[200px] w-[120px] mx-auto my-auto'/> A B C D E F G H I J K L M N O P Q R SDASD ASDAS DASD T U V W X
    {<br />}
    The image is moving because the text is being added to the div below it, which pushes the image up. To prevent this, you can use CSS to position the image and the div independently of each other.
    One way to do this is to use absolute positioning for the image and the div. Here's how you can modify your code:`}`

    const elementRef = useRef(null);
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
        <section className='relative w-full h-screen mx-auto my-auto flex sm:items-start items-center'>
           <div className='absolute top-[80px] mx-auto flex md:flex-row flex-col  justify-items-center sm:px-10 px-auto my-auto gap-1 md:gap-4' >
                <img src={profile_pic} alt="profile_pic" style={styles.profile_pic} className=' flex rounded-full object-contain opacity-80 sm:w-[200px] w-[120px] mx-auto my-auto'/>
                <div ref={elementRef} className='flex flex-col  items-center mt-5 text-white '>
                    <br />
                    </div>
                 
            </div>
        </section>
    ) 
}

export default Hero;

