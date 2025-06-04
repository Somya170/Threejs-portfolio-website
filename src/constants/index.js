import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI/ML Researcher & Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "Intelligent System Development",
    icon: backend,
  },
  {
    title: "Java Development",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Python Development Intern",
    company_name: "CognoRise InfoTech",
    icon: starbucks,
    iconBg: "#383E56",
    date: "July 2024 - Aug 2024",
    points: [
      "Developed and maintained Python-based applications for automation and data processing tasks.",
      "Built a Job Listing Scraper using requests and BeautifulSoup to automate the extraction and storage of job data from various websites.",
      "Created a PDF Report Generator using OpenPyXL and ReportLab to convert Excel files into well-structured PDF documents.",
      "Collaborated with a team of developers to solve real-world problems and deliver efficient, reusable code.",
    ],
  },
  {
    title: "Generative AI Intern",
    company_name: "Prodigy InfoTech",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Sep 2024",
    points: [
      "Built a Text Generator using Markov Chains, showcasing how simple probabilistic models can mimic human-like sentence structure.",
      "Fine-tuned GPT-2 with Transformers and TensorFlow, generating contextually relevant text outputs with improved fluency.",
      "Developed an AI-based Image Generator using Diffusers, exploring latent diffusion models for high-quality image synthesis.",
      "Gained hands-on experience in Generative AI pipelines, including data preparation, model training, and prompt-based evaluation.",
    ],
  },
  {
    title: "Java Developer",
    company_name: "Ypsilon IT Solutions",
    icon: shopify,
    iconBg: "#383E56",
    date: "Dec 2023 - Feb 2024",
    points: [
      "Developed a functional online bus booking system using Java, JSP, and Servlets.",
      "Integrated JDBC with MySQL for real-time data access and booking management.",
      "Utilized external JAR files and applied MVC architecture to structure the application.",
      "Gained hands-on experience with Spring Boot, Spring MVC, and Hibernate for scalable and maintainable backend development.",
    ],
  },
  {
    title: "Java Intern",
    company_name: "Indo-German Tool Room",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jul 2023 - Aug2023",
    points: [
      " Gained foundational knowledge and hands-on practice in Core Java programming.",
      "Understood OOP concepts such as inheritance, encapsulation, and polymorphism through practical examples.",
      "Worked on basic Java applications, focusing on control structures, arrays, and exception handling.",
      "Strengthened problem-solving and logical thinking with regular coding tasks and mentorship from industry experts.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Somya’s work on our learning platform was outstanding. He created a solution that was both intuitive and highly effective.",
    name: "Dr. Yogesh Pandya",
    designation: "HOD",
    company: "Prestige Institute of Engineering and Managment Research",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "The Smart Document Scanner project wouldn’t have been the same without Somya. His attention to detail made all the difference.",
    name: "Ravi Sharma",
    designation: "Head",
    company: "Ypsilon IT Solutions",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Somya's improvements to Skillbridge led to a significant boost in student engagement. His work speaks for itself.",
    name: "Priya Mehta",
    designation: "CTO",
    company: "Prestige Institute of Engineering and Managment Research",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AQI Prediction",
    description:
      "A web-based platform that uses AI to predict Air Quality Index (AQI) based on real-time data, offering users insights into air quality and providing recommendations for better health and safety.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "Scikit-learn",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Virtual Sketch-Pad",
    description:
      "Developed a gesture-based Virtual Sketch Pad using AI and computer vision to assist individuals with motor disabilities in creative expression, educational learning, and real-time computation.",
    tags: [
      {
        name: "Sympy",
        color: "blue-text-gradient",
      },
      {
        name: "Mediapipe",
        color: "green-text-gradient",
      },
      {
        name: "Tesseract",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Online Bus Booking",
    description:
      "A robust online bus booking platform using Java, JSP, Servlets, and MySQL, enabling users to search routes, book tickets, manage bookings, and receive confirmations via email.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Apache Tomcat",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
