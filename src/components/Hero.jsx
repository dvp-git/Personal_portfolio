import React from 'react'
import { styles } from '../style';
import { profile_pic }  from '../assets';
import { useEffect, useRef } from 'react';
import { NameCardCanvas } from './canvas';
import  icons8star  from '../assets/icons8-star.gif';
const Hero  = () => 
{
    const text = `${`My journey to the world of computing technology began when I saw my brother design a hand dryer for his 12th-grade project. It seemed fascinating to me how the process of having like-minded folks who work together can come up with something so innovative at that age. It taught me that if you set your mind on something you’re passionate about, you will succeed. \n
    Following in my brother’s footsteps, I graduated with a bachelor’s degree in Electronics and communication and secured my position as a Technical Support Engineer at Dell Technologies (Dell EMC ). Learning never stops in the technology sector. I learned about how organizations at large scale deliver products and services to ease the lives of customers. Being in a customer-facing role, my job was to provide high-quality interactions and solve complex issues that arise in the infrastructure domain specifically in the Storage area network.  Solving Performance issues became my key strength and although time-consuming, I sought assistance from my seniors and the developers to provide the best service to customers. I strengthened my understanding of business impact, customer experience, and leadership and thus with teamwork became technically skilled. But my curious mind wouldn’t stop me from diving into the underlying code aspects of technology. I taught myself Python and began automating tasks with Python scripts to ease my day-to-day job. It was the first time I started using code to solve issues. \n
    I decided to increase my development skills and so I went on to pursue my Master’s in Computer Science at the University at Buffalo. I will forever be grateful to the University for instilling in me the confidence to never stop learning and growing. I developed my coding skills through various projects in Python, JavaScript, and even Machine learning. I developed a keen interest in generative AI after taking courses on Machine learning and NLP. “AI” was once a buzzword to me, but I’m glad that I understand what goes on under the hood.  A couple of my projects are showcased below. Developing this project required that I learn React and certain functionalities from three-js. \n

    In my free time, I like to listen and sing to the tunes of Beatles to Linkin Park. I also like playing the guitar and watching documentaries about the cosmos."
    To reiterate, you can learn anything you set your mind to. All it takes is a little patience and time. 
    I hope you enjoy my portfolio. Feel free to message me. I'd love to connect!
    `}`
    

    //  Simulate typing 
    const elementRef = useRef('');
    useEffect(() => {
                let i = 0;
                const intervalId = setInterval(() => {
                    if (i < text.length) {
                        elementRef.current.textContent += text.charAt(i)
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
        
    // Use overflow for smaller screens if the text exceeds length
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
                    <div ref={elementRef} className='flex flex-col text-base items-center mt-5  text-white' > 
                </div>        
            </div>
            
            {/* The navigation animated icon */}
            <div className='absolute xs:bottom-10 bottom-20  w-full flex justify-center items-center'>
                <a href='#about'>
                    <img src={icons8star} alt="loading..." className='opacity-50' />
                </a>
            </div>
        </section>
    ) 
}

export default Hero;

