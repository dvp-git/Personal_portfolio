import React from "react";
import { useState , useRef } from 'react';
import { motion} from 'framer-motion';
import emailjs from '@emailjs/browser';

import { socialNavLinks } from '../constants';
import { NameCardCanvas } from './canvas';
import {styles } from '../style';
import { SectionWrapper } from "../hoc";
import { slideIn} from '../utils/motion'




const Contact = () =>  {
  const formRef = useRef();

  // Setting up states for form
  const [form , setForm] = useState({
    name: '',
    email:'',
    message:'',
  });

  // For loading widget
  const [loading , setLoading ] = useState(false);

  // Handlers
  const handleChange =  (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  
  
  const handleSubmit = (e) =>  {
    e.preventDefault();
    setLoading(true);

    // Pass service ID and template ID , object message, your Public API key
    emailjs
    .send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Darryl Vas Prabhu",
        from_email: form.email,
        to_email: "darrylvp@email.com",
        message: form.message,
        reply_to: form.email
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    )
    .then(
      () => {
        setLoading(false);
        // Display a modal here
        alert("Thank you. I will get back to you as soon as possible.");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        setLoading(false);
        console.error(error);

        alert("Ahh, something went wrong. Please try again.");
      }
    );
};


  return(
    <div className="flex lg:flex-row flex-col justify-evenly">
      <motion.div initial="hidden"
        animate="show"
      variants={slideIn('left', 'tween', 0.2, 1) } 
      className="lg:w-[50%] w-full bg-tertiary p-8 rounded-3xl opacity-100 shadow-lg shadow-yellow-400/40">
        <p className={styles.sectionSubText}>
        Get in touch
        </p>
        <h3 className={styles.sectionHeadText}>
          Contact
        </h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input type="text" 
            name="name" 
            placeholder="Please type in your name" 
            onChange={handleChange} 
            value={form.name} 
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none italic font-medium"/>
          </label>
        

        <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input type="email" 
            name="email" 
            placeholder="Please type in your email" 
            onChange={handleChange} 
            value={form.email} 
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none italic font-medium"/>
          </label>
        

        <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea rows={7}  
            name="message" 
            placeholder="Please type in your message"  
            onChange={handleChange} 
            value={form.message} 
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none italic font-medium"/>
          </label>

          <button type="submit" className="bg-tertiary py-3 px-8 outline-none text-white font-bold w-fit shadow-md shadow-primary rounded-xl">
            {loading? 'Sending...': 'Send'}
          </button>
        </form>
        <ul className='list-none flex flex-row mt-4 justify-center gap-10'>
                    {socialNavLinks.map((link) => (
                        <li key={link.meta_url}>
                        <a href={`${link.meta_url}`} target="_blank" rel="noopener noreferrer"><img src={`${link.icon}`} className="w-13 h-6 object-contain flex  "/></a>
                        </li>
                    ))}
                </ul>
      </motion.div>
      
      {/* // Card Canvas rendering */}
      <motion.div initial="hidden" animate="show" variants={slideIn('right', 'tween', 0.2, 1)} 
      // className="sm:flex-1 sm:h-auto md:h-auto h-[500px]"> 
    className="sm:flex-1 sm:h-auto md:h-auto h-[500px]"> 

        <NameCardCanvas / >

        </motion.div>

    </div>
  );
};
export default  SectionWrapper(Contact, "contact") ;