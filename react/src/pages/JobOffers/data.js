import AiJob from "../../assets/jobs/AI-job.png";
import softwarEngineer from "../../assets/jobs/software-engineer.png";
import dataScientist from "../../assets/jobs/data-scientist.png";
import dataEngineer from "../../assets/jobs/data-engineer.png";
import dataMining from "../../assets/jobs/data-mining.png";
import uiDesigner from "../../assets/jobs/ui-designer.png";
import productManager from "../../assets/jobs/product-manager.png";
import security from "../../assets/jobs/cyber-security.png";
import marketing from "../../assets/jobs/marketing.png";
import intern from "../../assets/jobs/intern.png";

const jobs = [
    {
        id: 1,
        title: "AI RESEARCHER",
        location: "Tangier, Maroc",
        icon: AiJob,
        date: "May 6, 2023",
        description:
            "Manifest AI is seeking an experienced AI Researcher to join our team. As an AI Researcher, you will be responsible for developing and implementing innovative AI solutions for our clients across various industries.If you are passionate about AI and have a track record of developing innovative solutions, we encourage you to apply for this exciting opportunity. Please submit your resume and cover letter.",
        requirements: [
            "PhD in Computer Science, Mathematics, or related fields",
            "Expertise in machine learning, deep learning, natural language processing, computer vision, or reinforcement learning",
            "Experience with popular deep learning frameworks such as TensorFlow or PyTorch",
            "Strong programming skills in languages such as Python, Java, or C++",
            "Excellent written and verbal communication skills",
            "Ability to work collaboratively in a fast-paced environment",
        ],
        responsibilities: [
            "Develop and implement machine learning models and algorithms for AI projects",
            "Conduct research and experimentation to identify new approaches to solving AI problems",
            "Collaborate with other teams to integrate AI solutions into client applications and systems",
            "Analyze and process data to improve the performance of AI models",
            "Stay up-to-date with the latest developments in AI and machine learning",
        ],
    },
    {
        id: 2,
        title: "SOFTWARE ENGINEER",
        location: "Tangier, Maroc",
        icon: softwarEngineer,
        date: "May 6, 2023",
        description:
            "Manifest AI is seeking a talented Software Engineer to join our team. As a Software Engineer, you will work on developing and integrating AI solutions into our client applications and systems.At Manifest AI, we believe in fostering a great work environment that encourages creativity, collaboration, and innovation. As a Software Engineer, you will have access to state-of-the-art tools and technologies, as well as a supportive and diverse team of experts. If you are passionate about software development and AI, and have experience in developing and integrating AI solutions into applications and systems, we encourage you to apply for this exciting opportunity. Please submit your resume and cover letter.",
        requirements: [
            "Bachelor's degree in Computer Science, Software Engineering, or related fields",
            "Strong programming skills in languages such as Java, Python, or C++",
            "Experience in web and mobile application development",
            "Familiarity with machine learning frameworks such as TensorFlow or PyTorch",
            "Knowledge of software development best practices, including Agile methodologies",
            "Excellent written and verbal communication skills",
        ],
        responsibilities: [
            "Design, develop, and integrate AI solutions into client applications and systems",
            "Collaborate with other teams to understand project requirements and deliver solutions on time",
            "Write high-quality, maintainable code that meets industry standards",
            "Participate in code reviews, testing, and debugging to ensure software quality",
            "Stay up-to-date with the latest software development trends and technologies",
        ],
    },
    {
        id: 3,
        title: "DATA SCIENTIST",
        location: "Tangier, Maroc",
        icon: dataScientist,
        date: "May 6, 2023",
        description:
            "Manifest AI is seeking a talented Data Scientist to join our team. As a Data Scientist, you will work on analyzing and processing data to develop innovative AI solutions for our clients. At Manifest AI, we believe in fostering a great work environment that encourages creativity, collaboration, and innovation. As a Data Scientist, you will have access to state-of-the-art tools and technologies, as well as a supportive and diverse team of experts. If you are passionate about data science and have experience in analyzing and processing data to develop innovative AI solutions, we encourage you to apply for this exciting opportunity. Please submit your resume and cover letter.",
        requirements: [
            "Master's degree or PhD in Computer Science, Mathematics, or related fields",
            "Expertise in statistical analysis, data visualization, and machine learning",
            "Experience with programming languages such as R or Python",
            "Proficiency in SQL and database technologies",
            "Knowledge of data warehousing and big data technologies such as Hadoop and Spark",
            "Strong analytical and problem-solving skills",
            "Excellent written and verbal communication skills",
        ],
        responsibilities: [
            "Analyze and process data using statistical and machine learning techniques",
            "Develop and implement machine learning models and algorithms for AI projects",
            "Collaborate with other teams to integrate AI solutions into client applications and systems",
            "Conduct research and experimentation to identify new approaches to solving AI problems",
            "Stay up-to-date with the latest developments in AI and machine learning",
        ],
    },
    {
        id: 4,
        title: "DATA ENGINEER",
        location: "Tangier, Maroc",
        icon: dataEngineer,
        date: "May 6, 2023",
        description:
            "Manifest AI is seeking a talented Data Engineer to join our team. As a Data Engineer, you will be responsible for building and maintaining data pipelines and infrastructure to support AI projects. At Manifest AI, we believe in fostering a great work environment that encourages creativity, collaboration, and innovation. As a Data Engineer, you will have access to state-of-the-art tools and technologies, as well as a supportive and diverse team of experts. If you are passionate about data engineering and have experience in building and maintaining data pipelines and infrastructure, we encourage you to apply for this exciting opportunity. Please submit your resume and cover letter.",
        requirements: [
            "Bachelor's degree in Computer Science or related fields",
            "Proficiency in programming languages such as Java or Python",
            "Experience with databases, distributed systems, and ETL processes",
            "Knowledge of data warehousing and big data technologies such as Hadoop and Spark",
            "Familiarity with cloud-based storage and processing services such as AWS or GCP",
            "Strong problem-solving and debugging skills",
        ],
        responsibilities: [
            "Design, build, and maintain data pipelines and infrastructure to support AI projects",
            "Work with other teams to ensure data quality, integrity, and availability",
            "Develop ETL (Extract, Transform, Load) processes to process and transform data",
            "Manage and optimize data storage and retrieval systems",
            "Stay up-to-date with the latest developments in data engineering technologies",
        ],
    },
    {
        id: 6,
        title: "DOMAIN SPECIALIST",
        location: "Tangier, Maroc",
        icon: dataMining,
        date: "May 6, 2023",
        description:
            "Manifest AI is seeking a talented Domain Specialist to join our team. As a Domain Specialist, you will work on developing and implementing AI solutions for clients in specific industries. At Manifest AI, we believe in fostering a great work environment that encourages creativity, collaboration, and innovation. As a Domain Specialist, you will have access to state-of-the-art tools and technologies, as well as a supportive and diverse team of experts. If you are passionate about using AI to solve real-world problems in a specific industry, and have experience in developing and implementing AI solutions for clients, we encourage you to apply for this exciting opportunity. Please submit your resume and cover letter.",
        requirements: [
            "Master's degree or PhD in relevant fields",
            "Deep understanding of the industry and relevant technologies",
            "Experience working with large datasets and developing solutions for real-world problems",
            "Strong analytical and problem-solving skills",
            "Excellent written and verbal communication skills",
        ],
        responsibilities: [
            "Work with clients to understand their business and technical requirements",
            "Analyze large datasets and develop solutions to real-world problems",
            "Develop and implement machine learning models and algorithms for AI projects",
            "Collaborate with other teams to integrate AI solutions into client applications and systems",
            "Stay up-to-date with the latest developments in AI and machine learning in your specific industry",
        ],
    },
    {
        id: 7,
        title: "UX/UI DESIGNER",
        location: "Tangier, Maroc",
        icon: uiDesigner,
        date: "May 6, 2023",
        description:
            "Manifest AI is seeking a talented UX/UI Designer to join our team. As a UX/UI Designer, you will be responsible for designing and improving the user interface and user experience of our AI solutions. At Manifest AI, we believe in fostering a great work environment that encourages creativity, collaboration, and innovation. As a UX/UI Designer, you will have access to state-of-the-art tools and technologies, as well as a supportive and diverse team of experts.If you are passionate about designing intuitive and user-friendly interfaces for AI solutions, and have experience in UX/UI design, we encourage you to apply for this exciting opportunity. Please submit your resume and cover letter.",
        requirements: [
            "Bachelor's degree in Graphic Design, UX Design, or related fields",
            "Experience with designing intuitive and user-friendly interfaces",
            "Proficiency in design tools such as Adobe Creative Suite or Sketch",
            "Knowledge of front-end development technologies such as HTML, CSS, and JavaScript",
            "Familiarity with user research and testing methodologies",
            "Excellent communication and collaboration skills",
        ],
        responsibilities: [
            "Design intuitive and user-friendly interfaces for AI solutions",
            "Conduct user research and testing to identify user needs and preferences",
            "Collaborate with other teams to ensure a cohesive user experience across all platforms",
            "Create wireframes, prototypes, and design mockups to communicate design ideas",
            "Stay up-to-date with the latest trends and best practices in UX/UI design",
        ],
    },
    {
        id: 8,
        title: "Project Manager",
        location: "Tangier, Maroc",
        icon: productManager,
        date: "May 6, 2023",
        description:
            "Manifest AI is seeking an experienced Project Manager to join our team. As a Project Manager, you will be responsible for managing the delivery of AI solutions to our clients, ensuring timely delivery, and high-quality results.At Manifest AI, we believe in fostering a great work environment that encourages creativity, collaboration, and innovation. As a Project Manager, you will have access to state-of-the-art tools and technologies, as well as a supportive and diverse team of experts.If you are an experienced project manager, with a track record of successful delivery of AI projects, we encourage you to apply for this exciting opportunity. Please submit your resume and cover letter to.",
        requirements: [
            "Bachelor's degree in Computer Science, Business Administration, or related fields",
            "Proven experience as a project manager, preferably in AI projects",
            "Strong organizational and leadership skills",
            "Excellent communication and interpersonal skills",
            "Experience with project management tools and methodologies, such as Agile and Scrum",
            "Familiarity with AI technologies and their application in real-world projects",
        ],
        responsibilities: [
            "Develop project plans, timelines, and budgets",
            "Manage project scope, schedule, and budget to ensure successful delivery",
            "Monitor and report project status to stakeholders and senior management",
            "Identify and mitigate project risks",
            "Collaborate with cross-functional teams to ensure project success",
        ],
    },
    {
        id: 9,
        title: "COMPLIANCE AND SECURITY OFFICER",
        location: "Tangier, Maroc",
        icon: security,
        date: "May 6, 2023",
        description:
            "Manifest AI is seeking a skilled Compliance and Security Officer to join our team. As a Compliance and Security Officer, you will be responsible for ensuring our AI solutions comply with all relevant regulations and security standards.At Manifest AI, we believe in fostering a great work environment that encourages creativity, collaboration, and innovation. As a Compliance and Security Officer, you will have access to state-of-the-art tools and technologies, as well as a supportive and diverse team of experts.If you are a skilled Compliance and Security Officer, with a track record of ensuring compliance and security in AI solutions, we encourage you to apply for this exciting opportunity. Please submit your resume and cover letter.",
        requirements: [
            "Bachelor's degree in Computer Science, Cybersecurity, or related fields",
            "Proven experience in compliance and security, preferably in AI projects",
            "Knowledge of relevant regulations and security standards, such as GDPR and ISO 27001",
            "Strong analytical and problem-solving skills",
            "Excellent communication and interpersonal skills",
            "Experience with security incident management and response",
            "Familiarity with AI technologies and their impact on compliance and security",
        ],
        responsibilities: [
            "Develop and implement compliance and security policies and procedures",
            "Monitor and audit compliance with relevant regulations and security standards",
            "Collaborate with cross-functional teams to ensure compliance and security in AI solutions",
            "Manage security incidents and breaches",
            "Stay up-to-date with the latest developments in compliance and security regulations",
        ],
    },
    {
        id: 10,
        title: "MARKETING AND SALES SPECIALIST",
        location: "Tangier, Maroc",
        icon: marketing,
        date: "May 6, 2023",
        description:
            "Manifest AI is seeking a talented Marketing and Sales Specialist to join our team. As a Marketing and Sales Specialist, you will be responsible for promoting our AI solutions and generating revenue through sales and marketing activities.At Manifest AI, we believe in fostering a great work environment that encourages creativity, collaboration, and innovation. As a Marketing and Sales Specialist, you will have access to state-of-the-art tools and technologies, as well as a supportive and diverse team of experts.If you are a talented Marketing and Sales Specialist, with a track record of promoting AI solutions and generating revenue through sales and marketing activities, we encourage you to apply for this exciting opportunity. Please submit your resume and cover letter.",
        requirements: [
            "Bachelor's degree in Marketing, Business Administration, or related fields",
            "Proven experience in sales and marketing, preferably in AI solutions",
            "Strong communication and interpersonal skills",
            "Familiarity with digital marketing techniques and tools",
            "Excellent writing and content creation skills",
            "Experience in lead generation and customer acquisition",
            "Knowledge of the AI industry and its potential applications in different sectors",
        ],
        responsibilities: [
            "Develop and implement marketing strategies to promote AI solutions to potential clients",
            "Identify potential clients and develop relationships with them",
            "Work with cross-functional teams to develop sales materials and collateral",
            "Participate in sales meetings and presentations to prospective clients",
            "Stay up-to-date with the latest trends and best practices in sales and marketing",
        ],
    },
    {
        id: 11,
        title: "INTERN",
        location: "Tangier, Maroc",
        icon: intern,
        date: "May 6, 2023",
        description:
            "We are an AI-focused company looking for talented individuals to join our dynamic team. We believe that AI can have a positive impact on our society, but only if it is developed in an ethical and sustainable way.That's why we are seeking artists and computer engineers from all backgrounds to work with us and bring both artistic and technical expertise to our projects while ensuring their ethical integrity and sustainability.",
        requirements: [
            "For artists: Relevant professional experience in an artistic field and proficiency in graphic design software such as Photoshop, Illustrator, etc.",
            "For computer engineers: Relevant experience in software development, in-depth knowledge of common programming languages (Python, C++, Java, etc.), and ability to work in a team.",
            "For all: Passion for art, creativity, AI, and ethical and environmental issues.",
        ],
        responsibilities: [
            "Contribute to the creation of innovative AI applications and products.",
            "Bring an artistic and technical touch to our projects to make them more attractive.",
            "Contribute to the design of visual and functional content for our websites, applications, and social media.",
            "Provide creative and technical support to our development team.",
            "Ensure the ethical integrity and sustainability of our AI products.",
        ],
    },
];
export default jobs;
