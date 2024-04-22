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
  mysql,
  azure,
  databricks,
  dellva,
  dellvi,
  freecodecamp ,
  intel,
  ism,
  jovian,
  mongodb_,
  networking,
  postman_,
  coursera,
  award1,
  award2,
  award3,
  award4,
  award5,
  award1_pdf,
  award2_pdf,
  award3_pdf,
  award4_pdf,
  award5_pdf,
  machine_learning_img,
  biLSTM_img,
  gemini_img,
  personal_website_img,
  pycryptodomex_img,
  rag_img,
  socket_programming_img,
  Sports_performance_img,
  transport_protocol_img,
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
      id:"dell_awards",
      title: "Awards",
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
  

  const certifications = [
    {
      name: "Microsoft Certified: Azure Fundamentals",
      description:
        "A cloud computing certification that teaches you the fundamentals of the Azure cloud platform.",
      img_ : azure,
        url_ : "https://learn.microsoft.com/api/credentials/share/en-us/darrylvp/6C91D218F66E876F?sharingId=5028B3A4CA1E8AB7",
        date_: "December 24, 2023",
    },
    {
      name: "Intel Certified Developer - MLOps Professional",
      description:
        "Learn the process of developing, deploying, and managing machine learning models in production",
      img_ : intel,
        url_ : "https://www.credly.com/badges/76c48263-6607-4f19-9c56-f0f190869a2d/",
        date_: "December 31, 2023 - December 31, 2026",
    },
    {
      name: "MongoDB Associate Developer",
      description:
        "Learn to effectively use MongoDB NoSQL database.",
      img_ : mongodb_,
        url_ : "https://www.credly.com/badges/4b34d9ef-82bf-422a-bbbf-f51a35c6f3e5",
        date_: "January 24, 2024",
    },
    {
      name: "Postman API Fundamentals Student Expert",
      description:
        "Learn the process of developing and testing APIs using Postman.",
      img_ : postman_,
        url_ : "https://badgr.com/public/assertions/7bpB-dezQVeZELUjBQjNlw?identity__email=darrylvasprabhu@gmail.com",
        date_: "Dec 30, 2023",
    },
    {
      name: "Databricks Academy Accreditation - Generative AI Fundamentals",
      description:
        "Beginner friendly introduction to Generative AI and large language models.",
      img_ : databricks,
        url_ : "https://credentials.databricks.com/8fa1e56a-4621-49db-8daf-2ec50e983f33#gs.88nk92",
        date_: "April 7, 2024 - April 7, 2026",
    },
    {
      name: "Dell Technologies: Associate - Networking Version 1.0",
      description:
        "Comprehensive understanding of the network architecture, protocols, and services provided by Dell Technologies.",
      img_ : networking,
        url_ : "https://www.credly.com/badges/797ede7f-b1b6-472f-98a3-f04592977630",
        date_: "March 18, 2021",
    },
    {
      name: "Dell Technologies: Associate - Information Storage and Management Version 3.0",
      description:
        "Understanding of technology behdind data center infrastructure and services including business continuity, data storage, and data management.",
      img_ : ism,
        url_ : "https://www.credly.com/badges/33136a81-b03a-4eca-a0c0-776b65776dc0",
        date_: "July 29, 2017",
    },
    {
      name: "Dell Technologies: Specialist - Implementation Engineer, VPLEX Version 2.0",
      description:
        "Expertise in the deployment of Storage area netowrk solution VPLEX systems, including installation, configuration, troubleshooting and management architecture.",
      img_ : dellvi,
        url_ : "https://www.credly.com/badges/52b8bc79-2aa3-4ba7-bd34-ff4bd8eb1b44",
        date_: "January 29, 2019",
    },
    {
      name: "Dell Technologies: Specialist - Systems Administrator, VPLEX Version 2.0",
      description:
        "Expertise in the deployment of Storage area netowrk solution VPLEX systems, including management and operations of VPLEX high availabilty storage solution.",
      img_ : dellva,
        url_ : "https://www.credly.com/badges/822c878d-0662-41e1-853c-9e006e95342b",
        date_: "June 04, 2022",
    },
    {
      name: "freeCodeCamp: Data Analysis with Python",
      description:
        "Understanding process involved in data preparation and transformation using Python, Numpy and Pandas.",
      img_ : freecodecamp,
        url_ : "https://www.freecodecamp.org/certification/darryl_vp/data-analysis-with-python-v7",
        date_: "October 14, 2021",
    },
    {
      name: "Jovian: Data Structures and Algorithms in Python",
      description:
        "Introduction to data structures and algorithms in Python",
      img_ : jovian,
        url_ : "https://jovian.ai/certificate/MFQTIOBSGA",
        date_: "April 27, 2021",
    },
    {
      name: "Coursera: Data Science Math Skills",
      description:
        "An understanding of essential mathematics required for data science.",
      img_ : coursera,
        url_ : "https://www.coursera.org/account/accomplishments/verify/Y4J8Z8VRXN43",
        date_: "January 15, 2024",
    },
  ]




const dell_awards = [
    {
      name: "Dell Technologies: Cheers",
      description: "Customer satisfaction award",
      img_ : award1,
      pdf_ : award1_pdf,
        date_ : "July 24, 2019",
    },
    {
      name: "Dell Technologies: Bravo",
      description:
        "Saving the day for our customer",
      img_ : award2,
      pdf_ : award2_pdf,
        date_: "March 25, 2020",
    },
    {
      name: "Dell Technologies: Bravo",
      description:
        "Outstanding support",
      img_ : award3,
      pdf_ : award3_pdf,
        date_: "March 25, 2020",
    },
    {
      name: "Dell Technologies: Cheers",
      description:
        "Customer Excellence",
      img_ : award4,
      pdf_ : award4_pdf,
        date_: "April 06, 2020",
    },
    {
      name: "Dell Technologies: Cheers",
      description:
        "Exceptional customer service",
      img_ : award5,
      pdf_ : award5_pdf,
        date_: "January 19, 2021",
    }];




  const projects = [
    {
      name: "Sports Performance Pro",
      description:
        "A responsive web application that enables easy access for coaches to track their athletes performances. The application allows coaches to search for athletes, view their performance, and track their progress. The application also allows coaches to view their profile and edit their profile. Design and development followed Agile methodology to improve the efficiency of the application and continous improvement. Technologies used: HTML, CSS, Javascript , jQuery, Bootstrap , DataTables , Async/Await and fetch API for the front-end. The back-end was developed using Flask framework , SQLAlchemy ORM, Postman and MySQL database. Application was delivered to client as part of the capstone project and among top 10 projects for Fall 2023 MS 611 Project Development course at University at Buffalo.",
      tags: [
        {
          name: "HTML",
          color: "yellow-text-gradient",
        },
        {
          name: "CSS",
          color: "yellow-text-gradient",
        },
        {
          name: "Javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "yellow-text-gradient",
        },
        {
          name: "Flask",
          color: "yellow-text-gradient",
        },
        {
          name: "Python",
          color: "yellow-text-gradient",
        },
        {
          name: "MySQL",
          color: "yellow-text-gradient",
        },
        {
          name: "SQLAlchemy",
          color: "yellow-text-gradient",
        },
        {
          name: "Postman",
          color: "yellow-text-gradient",
        },
        {
          name: "AWS",
          color: "yellow-text-gradient",
        },
        {
          name: "Peer Code Review",
          color: "yellow-text-gradient",
        }
      ],
      image: Sports_performance_img,
      source_code_link: "https://github.com/dvp-git/Sports-Performance-Pro-MS611/",
      online_link: '',
    },
    {
      name: "Retrieval Augmented Generation chatbot",
      description:
        "A personal PDF assistant using Retrieval Augmented Generation (RAG) algorithm to extract information from PDF's and server as a knowledge base for your generative AI chat bot. I used all-mpnet-base-v2 for the tokenization of query and pdf text documents. Searching of similar documents is performed using Meta's FAISS library. The generator uses mistral-7b-instruct-v0.2 as the large language model for generation of answers. Scope for future would be to create a gradio chat application using API's to GPU's for retrieval of encodings and decoding of answers.",
      tags: [
        {
          name: "Generative AI",
          color: "yellow-text-gradient",
        },
        {
          name: "PyTorch",
          color: "yellow-text-gradient",
        },
        {
          name: "HuggingFace Transformers",
          color: "yellow-text-gradient",
        },
        {
          name: "Large Language Model",
          color: "yellow-text-gradient",
        },
        {
          name: "Pandas",
          color: "yellow-text-gradient",
        },
        {
          name: "Numpy",
          color: "yellow-text-gradient",
        },
        {
          name: "Python",
          color: "yellow-text-gradient",
        },
        {
          name: "Jupyter Notebook",
          color: "yellow-text-gradient",
        },
      ],
      image: rag_img,
      source_code_link: "https://github.com/dvp-git/RAG_mistralai_chat_bot/",
      online_link: '',
    },
    {
      name: "Info-Extractor with Gemini pro",
      description:
        "A web application that analyzes and extracts information from uploaded images using Google's latest version of Gemini. Users can upload an image and type in a prompt for either summarization , extraction or generation task. I used Gemini pro vision API from google for running the inference and deployed the application on streamlit's workspace. The site is live at https://gemini-information-extractor-9hvvirtqtzkvdt7ypmv9ju.streamlit.app/",
      tags: [
        {
          name: "Gemini Vision API",
          color: "yellow-text-gradient",
        },
        {
          name: "LLM",
          color: "yellow-text-gradient",
        },
        {
          name: "Generative AI",
          color: "yellow-text-gradient",
        },
        {
          name: "Streamlit",
          color: "yellow-text-gradient",
        }
      ],
      image: gemini_img,
      source_code_link: "https://github.com/dvp-git/gemini-information-extractor/",
      online_link: 'https://gemini-information-extractor-9hvvirtqtzkvdt7ypmv9ju.streamlit.app/',
    },
    {
      name: "Personal Portfolio Website",
      description:
        "Development of personal portfolio website using React, Javascript, Tailwind CSS, and certain functionalities from Three.JS. Designed my 3d model ( gilf) NameCard file using Blender and Photoshop for intergration into the website using react-three-fiber and react-three-drei utilities.",
      tags: [
        {
          name: "Javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "React JS",
          color: "yellow-text-gradient",
        },
        {
          name: "Three.js",
          color: "yellow-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "yellow-text-gradient",
        },
        {
          name: "Photoshop",
          color: "yellow-text-gradient",
        },
        {
          name: "Blender",
          color: "yellow-text-gradient",
        },
      ],
      image: personal_website_img,
      source_code_link: "https://github.com/dvp-git/Personal_portfolio/",
      online_link: 'http://darrylvasprabhu.me',
    },
    {
      name: "Sentiment analysis using RNN, bi-RNN and LSTM",
      description:
        "Implementation of a sentiment analysis on IMDB Dataset using RNN, bi-RNN and LSTM. PyTorch was used as the framework for the project. The models were trained and tested on the IMDB Dataset using Googble Collab notebooks.",
      tags: [
        {
          name: "Deep Learning",
          color: "yellow-text-gradient",
        },
        {
          name: "PyTorch",
          color: "yellow-text-gradient",
        },
        {
          name: "Google Collab",
          color: "yellow-text-gradient",
        },
      ],
      image: biLSTM_img,
      source_code_link: "https://github.com/dvp-git/NaturalLanguageProcessing/",
      online_link: '',
    },
    {
      name: "ABT and GBN Transport protocol development",
      description:
        "Simulation of ABT and GBN Transport protocol using C. The protocol was developed and tested using for various levels of loss compression ratios. Code was developed using the starter code provided by the course.",
      tags: [
        {
          name: "C programming",
          color: "yellow-text-gradient",
        },
        {
          name: "Network Programming",
          color: "yellow-text-gradient",
        },
        {
          name: "Computer Networking",
          color: "yellow-text-gradient",
        }
      ],
      image: transport_protocol_img,
      source_code_link: "https://github.com/dvp-git/Transport-protocol/",
      online_link: '',
    },
    {
      name: "Multi-Client TCP Chat application",
      description:
        "A TCP command line client server application using Socket Programming in C. Clients can connect ti the Server and send messages to clients and the server. Blocking and Broadcasting features was also included. Select system call was used on the server to keep track of incoming connections via file descriptors. Code was developed using the starter code provided by the course.",
      tags: [
        {
          name: "C programming",
          color: "yellow-text-gradient",
        },
        {
          name: "Socket Programming",
          color: "yellow-text-gradient",
        },
        {
          name: "Computer Networking",
          color: "yellow-text-gradient",
        },
      ],
      image: socket_programming_img,
      source_code_link: "https://github.com/dvp-git/ModernNetworking-SocketProgramming/",
      online_link: '',
    },
    {
      name: "Encryption Decryption using pycryptodomex",
      description:
        "Development of scripting application to test the reposne time of encryption and decryption algorithms. The algorithms tested were RSA, AES and DES. A script was developed on Ubuntu for the same.",
      tags: [
        {
          name: "Python",
          color: "yellow-text-gradient",
        },
        {
          name: "Linux",
          color: "yellow-text-gradient",
        },
        {
          name: "css",
          color: "yellow-text-gradient",
        },
      ],
      image: pycryptodomex_img,
      source_code_link: "https://github.com/dvp-git/computer-security/",
      online_link: '',
    },
    {
      name: "Standard Machine learning models",
      description:
        "Implemented the standard machine learning models : Linear regression, Logistic regression, SVM, Naive Bayes Classifier, GMM  using scikit-learn .",
      tags: [
        {
          name: "Sckit-Learn",
          color: "yellow-text-gradient",
        },
        {
          name: "Jupyter Notebook",
          color: "yellow-text-gradient",
        },
        {
          name: "Machine Learning",
          color: "yellow-text-gradient",
        },
      ],
      image: machine_learning_img,
      source_code_link: "https://github.com/dvp-git/MachineLearning/",
      online_link: '',
    }, 
  ];
  
  export {   dell_awards, certifications, socialNavLinks , navLinks, services, technologies, experiences, testimonials, projects };