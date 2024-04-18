import {
  ai,
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  typescript,
  threejs,
  carrent,
  jobit,
  tripguide,
  facebook,
  whatsapp,
  linkedin,
  twitter,
  profile_pic,
  nmam,
  dell,
  ubuffalo,
  python,
  cppprog,
  cprog,
  flask,
  postman,
  postgresql,
  mysql
} from "../assets";
  
  // Github icon
  // Facebook icon
  // Instagram icon
  // LinkedIn icon
  // Twitter icon  
  
   const socialNavLinks = [
    {
      id: "linkedin",
      icon: linkedin,
      meta_url: "https://www.linkedin.com/in/darryl-vas-prabhu/"
    },
    {
      id: "github",
      icon: github,
      meta_url: "https://github.com/dvp-git"
    },
    {
      id: "whatsapp",
      icon: whatsapp,
      meta_url: "https://wa.me/+17169364735"
    },
    {
      id: "facebook",
      icon: facebook,
      meta_url: "https://www.facebook.com/darrylvas.prabhu?mibextid=JRoKGi"
    },
    {
      id: "twitter",
      icon: twitter,
      meta_url: "https://twitter.com/VasDarryl?t=hLTz3N8kZq843cH1mJ0RZg&s=08"
    }]
    
 const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "timeline",
      title: "Timeline",
    },
    {
      id:"projects",
      title: "Projects",
    },
    {
      id : "skills",
      title:"Skills",
    },
    {
      id: "resume",
      title: "Resume",
    },
    {
      id:"certifications",
      title: "Certifications",
    },

    {
      id:"contact",
      title: "Contact",
    },

  ];
  
  const services = [
    {
      title: "Software Engineer",
      icon: backend,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "AI Engineer",
      icon: ai,
    },
    {
      title: "Technology Tinkerer",
      icon: creator,
    },
  ];
        
  const technologies = 
    { lang: [{
                name: "Python",
                icon: python,
              },
              {
                name: "JavaScript",
                icon: javascript,
              },
              {
                name: "C",
                icon: cprog,
              },
              {
                name: "C++",
                icon: cppprog,
              }],
      frameworks : 
          [{
            name: "PyTorch",
            // icon: pytorch,
          },
          {
            name: "HuggingFace",
            // icon: flask,
          },
          {
            name: "LangChain",
          }
          ,{
            name: "Flask",
          },
          {
            name: "HTML5"
          },
            {
            name: "CSS 3",
            icon: css,
            },
            {
              name: "jQuery",
            }
            ,{
            name: "SQLalchemy",
          },
          {
            name: "React JS",
            icon: reactjs,
            },
            {
              name: "Scikit-learn",
              // icon: sklearn,
            },  
            {
              name: "Numpy",
              // icon: sklearn,
            },
            {
              name: "Pandas",
              // icon: sklearn,
            },
            {
              name: "Matplotlib",
              // icon: sklearn,
            }
          ],
   database: [{
                name: "MySQL",
                icon: mysql,
              },
              {
                name: "MongoDB",
                icon: mongodb,
              },
              {
                name: "PostgreSQL",
                icon: postgresql,
              },
             ] ,
    tools :[
              {
                name: "Azure"
              },
              {
                name: "Postman",
                icon: postman,
              },
              {
                name: "Git",
                icon: git,
              },
              {
                name: "Wireshark"
              },
              { 
                name:"Deep Learning",
              },
              {name: "Code Debugging"},

              {
                name: "LLM",
              },
              {
              name: "Storage Network",
            },
            {
              name: "API"
            },
            { name : "Dcoumentation"},
            {
              name: "Teamwork"
            }

            ]
          };
  
  const experiences = [
    {
      title: "Master of Science in Computer Science and Engineering",
      company_name: "Univeristy at Buffalo, The State University of New York",
      icon: ubuffalo,
      iconBg: "#383E56",
      date: "Aug 2022 - Feb 2024",
      url_ : "https://www.buffalo.edu/",
      points: [
        "Design and develop 'Sports workout' web application using Web Technologies HTML, CSS, Javascript, Figma, Bootstrap, Flask, MySQL and AWS hosting for tracking of workout by Coaches to Athletes.",
        "Continuous exposure to deep learning algorithms RNN, LSTM, GRU, CNN, GAN, Transformer models, BERT, GPT-2, Sentence Transformers."
      ],
    },
    {
      title: "Technical Support Engineer 2",
      company_name: "Dell EMC",
      icon: dell,
      iconBg: "#E6DEDD",
      date: "Jul 2017 - Jun 2022",
      url_ : "https://www.dell.com/en-us",
      points: [
        "Collaborating with cross-functional teams including product managers, performance engineers and senior accounts managers to resolve high priority issues.",
        "Performing analysis of slow IO read write operations due to CPU utilization, disk I/O latency, network latency, queue depth, multi-pathing, CRC errors.",
        "Root Cause Analysis of outages and business impact cases.",
        "Debugging product issues with escalationg engineering team and engaging in product enhancements",
        "Deliver training to new employees on Cloud Computing and Storage Area Network technologies.",
        "Publish knowledgebase and documentation on Dell Support Services for positive customer experience and business impact."
      ],
    },
    {
      title: "Bachelor of Engineering in Electronics and Communication Engineering",
      company_name: "Visvesvaraya Technological University, N.M.A.M Institute of Technology, Nitte",
      icon: nmam,
      iconBg: "#383E56",
      date: "Sep 2013 - May 2017",
      url_ : "https://nmamit.nitte.edu.in/index.php",
      points: [
        "Experimentation on Logic Design, FPGA and integrated circuit design.",
        "Design an android based remote control car using Raspberry Pi and Python.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Sports Performance Pro",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Retrieval Augmented Generation chatbot",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Info-Extractor with Gemini pro",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    {
      name: "Personal Portfolio Website",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    {
      name: "Multi-Client TCP Chat application",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    {
      name: "Sentiment analysis using RNN, bi-RNN and LSTM",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    {
      name: "Car Booking database using PostgreSQL",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    {
      name: "ABT and GBN Transport protocol development",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
    {
      name: "Encryption Decryption using pycryptodomex",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },

  ];
  
  export {  socialNavLinks , navLinks, services, technologies, experiences, testimonials, projects };