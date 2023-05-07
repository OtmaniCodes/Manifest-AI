import AiJob from '../../assets/jobs/AI-job.png'
import softwarEngineer from '../../assets/jobs/software-engineer.png'
import dataScientist from '../../assets/jobs/data-scientist.png'
import dataEngineer from '../../assets/jobs/data-engineer.png'
import dataMining from '../../assets/jobs/data-mining.png'

const jobs = [
    {
      id: 1,
      title: 'AI RESEARCHER',
      location:'Tangier, Maroc',
      icon: AiJob,
      date: 'May 6, 2023',
      description:
        'Manifest AI is seeking an experienced AI Researcher to join our team. As an AI Researcher, you will be responsible for developing and implementing innovative AI solutions for our clients across various industries.If you are passionate about AI and have a track record of developing innovative solutions, we encourage you to apply for this exciting opportunity. Please submit your resume and cover letter.',
      requirements: [
        'PhD in Computer Science, Mathematics, or related fields',
        'Expertise in machine learning, deep learning, natural language processing, computer vision, or reinforcement learning',
        'Experience with popular deep learning frameworks such as TensorFlow or PyTorch',
        'Strong programming skills in languages such as Python, Java, or C++',
        'Excellent written and verbal communication skills',
        'Ability to work collaboratively in a fast-paced environment'
      ],
      responsibilities: [
        'Develop and implement machine learning models and algorithms for AI projects',
        'Conduct research and experimentation to identify new approaches to solving AI problems',
        'Collaborate with other teams to integrate AI solutions into client applications and systems',
        'Analyze and process data to improve the performance of AI models',
        'Stay up-to-date with the latest developments in AI and machine learning'
      ],
    },
    {
      id: 2,
      title: 'SOFTWARE ENGINEER',
      location:'Tangier, Maroc',
      icon: softwarEngineer,
      date: 'May 6, 2023',
      description:
        'Manifest AI is seeking a talented Software Engineer to join our team. As a Software Engineer, you will work on developing and integrating AI solutions into our client applications and systems.At Manifest AI, we believe in fostering a great work environment that encourages creativity, collaboration, and innovation. As a Software Engineer, you will have access to state-of-the-art tools and technologies, as well as a supportive and diverse team of experts. If you are passionate about software development and AI, and have experience in developing and integrating AI solutions into applications and systems, we encourage you to apply for this exciting opportunity. Please submit your resume and cover letter.',
      requirements: [
        "Bachelor's degree in Computer Science, Software Engineering, or related fields",
        "Strong programming skills in languages such as Java, Python, or C++",
        "Experience in web and mobile application development",
        "Familiarity with machine learning frameworks such as TensorFlow or PyTorch",
        "Knowledge of software development best practices, including Agile methodologies",
        "Excellent written and verbal communication skills"
      ],
      responsibilities: [
        'Design, develop, and integrate AI solutions into client applications and systems',
        'Collaborate with other teams to understand project requirements and deliver solutions on time',
        'Write high-quality, maintainable code that meets industry standards',
        'Participate in code reviews, testing, and debugging to ensure software quality',
        'Stay up-to-date with the latest software development trends and technologies'
      ]
    },
    {
      id: 3,
      title: 'DATA SCIENTIST',
      location:'Tangier, Maroc',
      icon: dataScientist,
      date: 'May 6, 2023',
      description:
        'Manifest AI is seeking a talented Data Scientist to join our team. As a Data Scientist, you will work on analyzing and processing data to develop innovative AI solutions for our clients. At Manifest AI, we believe in fostering a great work environment that encourages creativity, collaboration, and innovation. As a Data Scientist, you will have access to state-of-the-art tools and technologies, as well as a supportive and diverse team of experts. If you are passionate about data science and have experience in analyzing and processing data to develop innovative AI solutions, we encourage you to apply for this exciting opportunity. Please submit your resume and cover letter.',
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
      title: 'DATA ENGINEER',
      location:'Tangier, Maroc',
      icon: dataEngineer,
      date: 'May 6, 2023',
      description:
        'Manifest AI is seeking a talented Data Engineer to join our team. As a Data Engineer, you will be responsible for building and maintaining data pipelines and infrastructure to support AI projects. At Manifest AI, we believe in fostering a great work environment that encourages creativity, collaboration, and innovation. As a Data Engineer, you will have access to state-of-the-art tools and technologies, as well as a supportive and diverse team of experts. If you are passionate about data engineering and have experience in building and maintaining data pipelines and infrastructure, we encourage you to apply for this exciting opportunity. Please submit your resume and cover letter.',
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
        title: 'DOMAIN SPECIALIST',
        location:'Tangier, Maroc',
        icon: dataMining,
        date: 'May 6, 2023',
        description:
          'Manifest AI is seeking a talented Domain Specialist to join our team. As a Domain Specialist, you will work on developing and implementing AI solutions for clients in specific industries. At Manifest AI, we believe in fostering a great work environment that encourages creativity, collaboration, and innovation. As a Domain Specialist, you will have access to state-of-the-art tools and technologies, as well as a supportive and diverse team of experts. If you are passionate about using AI to solve real-world problems in a specific industry, and have experience in developing and implementing AI solutions for clients, we encourage you to apply for this exciting opportunity. Please submit your resume and cover letter.',
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
]
export default jobs