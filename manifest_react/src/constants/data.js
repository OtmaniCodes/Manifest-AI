//! JOB OFFERS ICONS ASSETS ================================
import AiJob from '../assets/icons/AI-job.png';
import softwarEngineer from '../assets/icons/software-engineer.png';
import dataScientist from '../assets/icons/data-scientist.png';
import dataEngineer from '../assets/icons/data-engineer.png';
import dataMining from '../assets/icons/data-mining.png';
import uiDesigner from '../assets/icons/ui-designer.png';
import productManager from '../assets/icons/product-manager.png';
import security from '../assets/icons/cyber-security.png';
import marketing from '../assets/icons/marketing.png';
import intern from '../assets/icons/intern.png';
//! JOB OFFERS ICONS ASSETS ================================

//! SERVICES ICONS ASSETS ===========================================
import consultation from '../assets/icons/consultation.png';
import SUSTAINABILITY from '../assets/icons/SUSTAINABILITY.png';
import ai from '../assets/icons/ai.png';
import auditing from '../assets/icons/auditor.png';
//! SERVICES ICONS ASSETS ===========================================



export const moreAboutData = [
  {
    title: 'Ethical AI Development',
    descriptions: [
      'Design and implement AI systems with fairness and transparency',
      'Ensure AI solutions align with ethical principles and human values',
      'Promote responsible AI use to avoid unintended consequences',
      'Integrate privacy-by-design and security-by-design approaches',
      'Encourage collaboration among stakeholders to address ethical concerns',
    ],
    graphic:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
  },
  {
    title: 'Sustainable AI Solutions',
    descriptions: [
      'Leverage AI to optimize resource management and reduce waste',
      'Utilize AI-powered analytics for better decision-making in sustainability',
      'Develop AI models that support clean energy and green technologies',
      'Enhance environmental monitoring and forecasting using AI',
      'Drive sustainable innovation in various industries, such as agriculture and transportation',
    ],
    graphic:
      'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Collaborative Innovation',
    descriptions: [
      'Foster a culture of collaboration to drive innovation in AI development',
      'Share knowledge and ideas across multidisciplinary teams',
      'Engage with partners and stakeholders to co-create impactful AI solutions',
      'Accelerate AI adoption by connecting with industry leaders and experts',
      'Cultivate a diverse and inclusive environment to inspire creative problem-solving',
    ],
    graphic:
      'https://images.pexels.com/photos/171198/pexels-photo-171198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'AI Research & Education',
    descriptions: [
      'Stay at the forefront of AI research to fuel cutting-edge solutions',
      'Empower individuals and organizations through AI-focused education',
      'Participate in conferences, workshops, and knowledge-sharing events',
      'Collaborate with academic institutions and research organizations',
      'Promote lifelong learning and upskilling in the field of AI',
    ],
    graphic:
      'https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

export const servicesData = [
  {
    id: 1,
    title: 'Business, Strategy & Consulting Services',
    slug: 'business-strategy',
    smallDescription: 'Small description about consulting!!',
    image:
      'https://static1.s123-cdn-static-a.com/ready_uploads/media/19472/2000_5cdbb33416b39.jpg',
    icon: consultation,
    bigDescription:
      'Our agency offers consulting services to help businesses identify opportunities for improvement in their sustainability practices. Manifest AI also provides expert advice and hands-on help to assist clients in reducing their environmental impact, improving resource efficiency, and implementing sustainable and up to date practices:',
    list: [
      'Conducting a lifecycle assessment to measure the environmental impact of a product or process and identify areas for improvement',
      'Developing a sustainable supply chain strategy to reduce carbon emissions and promote ethical sourcing',
      'Conducting employee engagement surveys to identify opportunities for improving sustainability practices and increasing employee involvement',
      'Conducting sustainability benchmarking against industry peers to identify areas for improvement',
      'Providing guidance on sustainability reporting and communication strategies to help clients effectively share their sustainability achievements with stakeholders.',
    ],
    date: '26/04/2023',
  },
  {
    id: 2,
    title: 'Sustainability & Environmental Solutions',
    slug: 'sustainability',
    smallDescription: 'Small description about SUSTAINABILITY!!',
    image:
      'https://static1.s123-cdn-static-a.com/ready_uploads/media/53733/2000_5ce3c1231b659.jpg',
    icon: SUSTAINABILITY,
    bigDescription:
      'Our sustainability services can help businesses create a more sustainable future by developing strategies and initiatives that align with their values and goals. This may include:',
    list: [
      'Developing a circular economy strategy to minimize waste and promote resource efficiency',
      'Developing a green procurement program to ensure the products and services purchased by a company meet sustainability criteria',
      'Designing sustainable packaging that reduces waste and promotes recycling',
      'Providing sustainability training and education to employees, suppliers, and customers to increase awareness and promote sustainable practices',
      'Developing a community outreach program to engage with local stakeholders and promote sustainable practices.',
      'Developing sustainability plans',
    ],
    date: '26/04/2023',
  },
  {
    id: 3,
    title: 'AI-Driven Technology Innovations',
    slug: 'ai-technology',
    smallDescription: 'Small description about AI TECHNOLOGY!!',
    image:
      'https://static1.s123-cdn-static-a.com/uploads/7883034/2000_64494c20e694e.png',
    icon: ai,
    bigDescription:
      'Our sustainability services can help businesses create a more sustainable future by developing strategies and initiatives that align with their values and goals, by:',
    list: [
      'Developing a smart building system that optimizes energy usage and reduces operating costs',
      'Developing a carbon management tool that enables clients to track and reduce their carbon footprint',
      'Developing a waste management system that uses sensors and data analytics to reduce waste and increase recycling rates',
      'Developing a sustainable transportation strategy that uses data analytics to optimize transportation routes and reduce emissions',
      'Developing a virtual energy audit tool that enables clients to identify opportunities for reducing energy consumption.',
    ],
    date: '26/04/2023',
  },
  {
    id: 4,
    title: 'Professional Auditing Services',
    slug: 'auditing',
    smallDescription:
      'Expert auditing services for sustainable business practices.',
    image:
      'https://cdn.corporatefinanceinstitute.com/assets/social-impact.jpeg',
    icon: auditing,
    bigDescription:
      'Our auditing services provide businesses with comprehensive assessments of their current sustainability practices, identify areas for improvement, and ensure compliance with relevant regulations and standards:',
    list: [
      'Assessing compliance with environmental regulations and industry-specific sustainability standards',
      'Evaluating the effectiveness of sustainability initiatives and identifying areas for improvement',
      'Identifying potential risks and opportunities related to environmental and social aspects of business operations',
      'Providing recommendations for enhancing sustainability performance and reducing environmental impact',
      'Assisting with the development and implementation of sustainability management systems and processes',
      'Conducting supply chain audits to ensure ethical sourcing and responsible resource management',
    ],
    date: '26/04/2023',
  },
];

export const directivesData = [
  {
    title: 'Respect for human autonomy',
    description:
      'Never design or deploy AI that infringes on the autonomy, freedom of choice, or dignity of individuals.',
  },
  {
    title: 'Beneficence and non-maleficence',
    description:
      'Beneficence and non-maleficence: Ensure that AI is developed and used to improve human well-being and minimize potential risks or harm.',
  },
  {
    title: 'Equity and non-discrimination',
    description:
      'Commit to designing AI systems that treat all individuals fairly, avoiding biases and discrimination.',
  },
  {
    title: 'Transparency and explainability',
    description:
      'Ensure transparency in the design, development, and deployment of AI by providing understandable explanations about its functioning and decisions.',
  },
  {
    title: 'Responsibility and accountability',
    description:
      'Take responsibility for the actions and decisions made by AI systems and be prepared to account for their impact on individuals and society.',
  },
  {
    title: 'Privacy and data protection',
    description:
      "Protect personal data and respect individuals' privacy by designing AI systems that ensure information security and data confidentiality.",
  },
  {
    title: 'Safety and robustness',
    description:
      'Ensure that AI systems are safe, reliable, and resilient against attacks, errors, and unforeseen circumstances.',
  },
  {
    title: 'Cooperation and partnership',
    description:
      'Collaborate with other organizations, researchers, and stakeholders to share knowledge, resources, and best practices in ethical AI.',
  },
  {
    title: 'Education and awareness',
    description:
      'Promote education and awareness of ethical AI among developers, users, and the general public to strengthen understanding and adoption of ethical principles.',
  },
  {
    title: 'Adaptability and evolution',
    description:
      'Commit to continuous improvement in ethical AI, taking into account new discoveries, technological advancements, and changing societal needs.',
  },
];

export const manifestoData = [
  {
    title: 'AI in the service of humanity',
    descriptions: [
      'We place humans at the heart of our concerns.',
      'We are dedicated to designing, developing, and deploying AI solutions that improve quality of life, reduce inequalities, and strengthen solidarity among people.',
      'Our goal is to use AI to solve the most pressing global challenges, such as hunger, poverty, climate change, and diseases.',
    ],
    graphic:
      'https://images.pexels.com/photos/8728388/pexels-photo-8728388.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Ethics and responsibility',
    descriptions: [
      'We solemnly commit to respecting and promoting fundamental ethical principles in the development and application of AI.',
      'These principles include respect for privacy, transparency, fairness, non-discrimination, and considering the long-term consequences of our actions.',
      'We will ensure that AI serves the common good and is not used to amplify disparities or inflict harm on others.',
    ],
    graphic:
      'https://images.pexels.com/photos/4207908/pexels-photo-4207908.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Participation and collaboration',
    descriptions: [
      'We believe in the importance of cooperation and sharing knowledge to ensure a prosperous and harmonious future, as knowledge is the only thing that multiplies when shared.',
      'We commit to working closely with other organizations, governments, researchers, and citizens to encourage cross-communication, mutual understanding, and collaboration to address the challenges posed by AI.',
    ],
    graphic:
      'https://images.pexels.com/photos/5641902/pexels-photo-5641902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Education and awareness',
    descriptions: [
      'We dedicate ourselves to promoting education and awareness of AI-related issues, in order to encourage responsible, reasoned, and informed adoption of these technologies, highlighting their beneficial potential while warning of the risks associated with them.',
      'We will ensure that current and future generations understand the opportunities and risks associated with AI and can contribute to its development in an ethical and beneficial way for all.',
    ],
    graphic:
      'https://img.freepik.com/premium-photo/green-information-technology-environmentally-sustainable-it-green-plant-growing-white-keyboard_536572-148.jpg',
  },
  {
    title: 'Emotion at the heart of our mission',
    descriptions: [
      'We fully recognize the primordial influence of human emotions in our professional practice.',
      'Aware that AI cannot be a mere automaton, we nurture the conviction that it becomes our intuitive ally, capable of deciphering and accurately expressing our deepest emotional needs.',
      'We will integrate empathy, compassion, and humanity into our AI solutions to strengthen the bond between humans and technology, to create a future where we work together to overcome challenges and celebrate our successes.',
    ],
    graphic:
      'https://www.heartmath.org/assets/uploads/2015/05/making-of-emotions-article.jpg',
  },
  {
    title: 'Inclusive innovation',
    descriptions: [
      'We dedicate ourselves to promoting inclusive innovation, ensuring that the benefits of AI are accessible to all, regardless of their origin, gender, age, or economic status.',
      'We will fight against bias anddiscrimination in AI technologies, and work tirelessly to create fair and equitable solutions.',
    ],
    graphic:
      'https://images.pexels.com/photos/15177559/pexels-photo-15177559.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Transparency and accountability',
    descriptions: [
      'We commit to being transparent in our intentions, methods, and results.',
      'We will be accountable for our actions, and our unwavering determination towards the evaluation and continuous improvement of our practices will demonstrate our desire to ensure a positive impact on humanity, as a symbol of our deep respect for the well-being of all.',
      'We invite all those who share our vision of ethical AI that benefits humanity to join us in this exciting and essential quest.',
      'Together, we can forge a future where technology serves humanity, protects our values, and nourishes our spirit of innovation and cooperation.',
      "Together, let's write the history of a better world, shaped by ethical artificial intelligence in the service of humanity.",
      'Join us and take part in this collective adventure to shape the future we want to leave for generations to come.',
    ],
    graphic:
      'https://images.pexels.com/photos/1071249/pexels-photo-1071249.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export const teamMembersDara = [
  {
    name: 'Riad Lahlou',
    title: 'CEO & Cofounder',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,',
    image:
      'https://www.complianceandethics.org/wp-content/uploads/2016/06/BRUCE-WEINSTEIN-THE-ETHICS-GUY-HALF-BODY-SHOT-1-1-e1467294422763.jpg',
  },
  {
    name: 'Aicha Arfate',
    title: 'CEO & Cofounder',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,',
    image:
      'https://images.saymedia-content.com/.image/t_share/MTc2MjY1NDMzOTM3MjI0ODc3/square-face-women-celebrities.jpg',
  },
  {
    name: 'Kawtar Hadoud',
    title: 'Manager',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,',
    image:
      'https://images.saymedia-content.com/.image/t_share/MTc2MjY1NDMzOTM3MjI0ODc3/square-face-women-celebrities.jpg',
  },
];

export const jobOffersData = [
  {
    id: 1,
    title: 'AI RESEARCHER',
    location: 'Tangier, Maroc',
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
      'Ability to work collaboratively in a fast-paced environment',
    ],
    responsibilities: [
      'Develop and implement machine learning models and algorithms for AI projects',
      'Conduct research and experimentation to identify new approaches to solving AI problems',
      'Collaborate with other teams to integrate AI solutions into client applications and systems',
      'Analyze and process data to improve the performance of AI models',
      'Stay up-to-date with the latest developments in AI and machine learning',
    ],
  },
  {
    id: 2,
    title: 'SOFTWARE ENGINEER',
    location: 'Tangier, Maroc',
    icon: softwarEngineer,
    date: 'May 6, 2023',
    description:
      'Manifest AI is seeking a talented Software Engineer to join our team. As a Software Engineer, you will work on developing and integrating AI solutions into our client applications and systems.At Manifest AI, we believe in fostering a great work environment that encourages creativity, collaboration, and innovation. As a Software Engineer, you will have access to state-of-the-art tools and technologies, as well as a supportive and diverse team of experts. If you are passionate about software development and AI, and have experience in developing and integrating AI solutions into applications and systems, we encourage you to apply for this exciting opportunity. Please submit your resume and cover letter.',
    requirements: [
      "Bachelor's degree in Computer Science, Software Engineering, or related fields",
      'Strong programming skills in languages such as Java, Python, or C++',
      'Experience in web and mobile application development',
      'Familiarity with machine learning frameworks such as TensorFlow or PyTorch',
      'Knowledge of software development best practices, including Agile methodologies',
      'Excellent written and verbal communication skills',
    ],
    responsibilities: [
      'Design, develop, and integrate AI solutions into client applications and systems',
      'Collaborate with other teams to understand project requirements and deliver solutions on time',
      'Write high-quality, maintainable code that meets industry standards',
      'Participate in code reviews, testing, and debugging to ensure software quality',
      'Stay up-to-date with the latest software development trends and technologies',
    ],
  },
  {
    id: 3,
    title: 'DATA SCIENTIST',
    location: 'Tangier, Maroc',
    icon: dataScientist,
    date: 'May 6, 2023',
    description:
      'Manifest AI is seeking a talented Data Scientist to join our team. As a Data Scientist, you will work on analyzing and processing data to develop innovative AI solutions for our clients. At Manifest AI, we believe in fostering a great work environment that encourages creativity, collaboration, and innovation. As a Data Scientist, you will have access to state-of-the-art tools and technologies, as well as a supportive and diverse team of experts. If you are passionate about data science and have experience in analyzing and processing data to develop innovative AI solutions, we encourage you to apply for this exciting opportunity. Please submit your resume and cover letter.',
    requirements: [
      "Master's degree or PhD in Computer Science, Mathematics, or related fields",
      'Expertise in statistical analysis, data visualization, and machine learning',
      'Experience with programming languages such as R or Python',
      'Proficiency in SQL and database technologies',
      'Knowledge of data warehousing and big data technologies such as Hadoop and Spark',
      'Strong analytical and problem-solving skills',
      'Excellent written and verbal communication skills',
    ],
    responsibilities: [
      'Analyze and process data using statistical and machine learning techniques',
      'Develop and implement machine learning models and algorithms for AI projects',
      'Collaborate with other teams to integrate AI solutions into client applications and systems',
      'Conduct research and experimentation to identify new approaches to solving AI problems',
      'Stay up-to-date with the latest developments in AI and machine learning',
    ],
  },
  {
    id: 4,
    title: 'DATA ENGINEER',
    location: 'Tangier, Maroc',
    icon: dataEngineer,
    date: 'May 6, 2023',
    description:
      'Manifest AI is seeking a talented Data Engineer to join our team. As a Data Engineer, you will be responsible for building and maintaining data pipelines and infrastructure to support AI projects. At Manifest AI, we believe in fostering a great work environment that encourages creativity, collaboration, and innovation. As a Data Engineer, you will have access to state-of-the-art tools and technologies, as well as a supportive and diverse team of experts. If you are passionate about data engineering and have experience in building and maintaining data pipelines and infrastructure, we encourage you to apply for this exciting opportunity. Please submit your resume and cover letter.',
    requirements: [
      "Bachelor's degree in Computer Science or related fields",
      'Proficiency in programming languages such as Java or Python',
      'Experience with databases, distributed systems, and ETL processes',
      'Knowledge of data warehousing and big data technologies such as Hadoop and Spark',
      'Familiarity with cloud-based storage and processing services such as AWS or GCP',
      'Strong problem-solving and debugging skills',
    ],
    responsibilities: [
      'Design, build, and maintain data pipelines and infrastructure to support AI projects',
      'Work with other teams to ensure data quality, integrity, and availability',
      'Develop ETL (Extract, Transform, Load) processes to process and transform data',
      'Manage and optimize data storage and retrieval systems',
      'Stay up-to-date with the latest developments in data engineering technologies',
    ],
  },
  {
    id: 5,
    title: 'DOMAIN SPECIALIST',
    location: 'Tangier, Maroc',
    icon: dataMining,
    date: 'May 6, 2023',
    description:
      'Manifest AI is seeking a talented Domain Specialist to join our team. As a Domain Specialist, you will work on developing and implementing AI solutions for clients in specific industries. At Manifest AI, we believe in fostering a great work environment that encourages creativity, collaboration, and innovation. As a Domain Specialist, you will have access to state-of-the-art tools and technologies, as well as a supportive and diverse team of experts. If you are passionate about using AI to solve real-world problems in a specific industry, and have experience in developing and implementing AI solutions for clients, we encourage you to apply for this exciting opportunity. Please submit your resume and cover letter.',
    requirements: [
      "Master's degree or PhD in relevant fields",
      'Deep understanding of the industry and relevant technologies',
      'Experience working with large datasets and developing solutions for real-world problems',
      'Strong analytical and problem-solving skills',
      'Excellent written and verbal communication skills',
    ],
    responsibilities: [
      'Work with clients to understand their business and technical requirements',
      'Analyze large datasets and develop solutions to real-world problems',
      'Develop and implement machine learning models and algorithms for AI projects',
      'Collaborate with other teams to integrate AI solutions into client applications and systems',
      'Stay up-to-date with the latest developments in AI and machine learning in your specific industry',
    ],
  },
  {
    id: 6,
    title: 'UX/UI DESIGNER',
    location: 'Tangier, Maroc',
    icon: uiDesigner,
    date: 'May 6, 2023',
    description:
      'Manifest AI is seeking a talented UX/UI Designer to join our team. As a UX/UI Designer, you will be responsible for designing and improving the user interface and user experience of our AI solutions. At Manifest AI, we believe in fostering a great work environment that encourages creativity, collaboration, and innovation. As a UX/UI Designer, you will have access to state-of-the-art tools and technologies, as well as a supportive and diverse team of experts.If you are passionate about designing intuitive and user-friendly interfaces for AI solutions, and have experience in UX/UI design, we encourage you to apply for this exciting opportunity. Please submit your resume and cover letter.',
    requirements: [
      "Bachelor's degree in Graphic Design, UX Design, or related fields",
      'Experience with designing intuitive and user-friendly interfaces',
      'Proficiency in design tools such as Adobe Creative Suite or Sketch',
      'Knowledge of front-end development technologies such as HTML, CSS, and JavaScript',
      'Familiarity with user research and testing methodologies',
      'Excellent communication and collaboration skills',
    ],
    responsibilities: [
      'Design intuitive and user-friendly interfaces for AI solutions',
      'Conduct user research and testing to identify user needs and preferences',
      'Collaborate with other teams to ensure a cohesive user experience across all platforms',
      'Create wireframes, prototypes, and design mockups to communicate design ideas',
      'Stay up-to-date with the latest trends and best practices in UX/UI design',
    ],
  },
  {
    id: 7,
    title: 'Project Manager',
    location: 'Tangier, Maroc',
    icon: productManager,
    date: 'May 6, 2023',
    description:
      'Manifest AI is seeking an experienced Project Manager to join our team. As a Project Manager, you will be responsible for managing the delivery of AI solutions to our clients, ensuring timely delivery, and high-quality results.At Manifest AI, we believe in fostering a great work environment that encourages creativity, collaboration, and innovation. As a Project Manager, you will have access to state-of-the-art tools and technologies, as well as a supportive and diverse team of experts.If you are an experienced project manager, with a track record of successful delivery of AI projects, we encourage you to apply for this exciting opportunity. Please submit your resume and cover letter to.',
    requirements: [
      "Bachelor's degree in Computer Science, Business Administration, or related fields",
      'Proven experience as a project manager, preferably in AI projects',
      'Strong organizational and leadership skills',
      'Excellent communication and interpersonal skills',
      'Experience with project management tools and methodologies, such as Agile and Scrum',
      'Familiarity with AI technologies and their application in real-world projects',
    ],
    responsibilities: [
      'Develop project plans, timelines, and budgets',
      'Manage project scope, schedule, and budget to ensure successful delivery',
      'Monitor and report project status to stakeholders and senior management',
      'Identify and mitigate project risks',
      'Collaborate with cross-functional teams to ensure project success',
    ],
  },
  {
    id: 8,
    title: 'COMPLIANCE AND SECURITY OFFICER',
    location: 'Tangier, Maroc',
    icon: security,
    date: 'May 6, 2023',
    description:
      'Manifest AI is seeking a skilled Compliance and Security Officer to join our team. As a Compliance and Security Officer, you will be responsible for ensuring our AI solutions comply with all relevant regulations and security standards.At Manifest AI, we believe in fostering a great work environment that encourages creativity, collaboration, and innovation. As a Compliance and Security Officer, you will have access to state-of-the-art tools and technologies, as well as a supportive and diverse team of experts.If you are a skilled Compliance and Security Officer, with a track record of ensuring compliance and security in AI solutions, we encourage you to apply for this exciting opportunity. Please submit your resume and cover letter.',
    requirements: [
      "Bachelor's degree in Computer Science, Cybersecurity, or related fields",
      'Proven experience in compliance and security, preferably in AI projects',
      'Knowledge of relevant regulations and security standards, such as GDPR and ISO 27001',
      'Strong analytical and problem-solving skills',
      'Excellent communication and interpersonal skills',
      'Experience with security incident management and response',
      'Familiarity with AI technologies and their impact on compliance and security',
    ],
    responsibilities: [
      'Develop and implement compliance and security policies and procedures',
      'Monitor and audit compliance with relevant regulations and security standards',
      'Collaborate with cross-functional teams to ensure compliance and security in AI solutions',
      'Manage security incidents and breaches',
      'Stay up-to-date with the latest developments in compliance and security regulations',
    ],
  },
  {
    id: 9,
    title: 'MARKETING AND SALES SPECIALIST',
    location: 'Tangier, Maroc',
    icon: marketing,
    date: 'May 6, 2023',
    description:
      'Manifest AI is seeking a talented Marketing and Sales Specialist to join our team. As a Marketing and Sales Specialist, you will be responsible for promoting our AI solutions and generating revenue through sales and marketing activities.At Manifest AI, we believe in fostering a great work environment that encourages creativity, collaboration, and innovation. As a Marketing and Sales Specialist, you will have access to state-of-the-art tools and technologies, as well as a supportive and diverse team of experts.If you are a talented Marketing and Sales Specialist, with a track record of promoting AI solutions and generating revenue through sales and marketing activities, we encourage you to apply for this exciting opportunity. Please submit your resume and cover letter.',
    requirements: [
      "Bachelor's degree in Marketing, Business Administration, or related fields",
      'Proven experience in sales and marketing, preferably in AI solutions',
      'Strong communication and interpersonal skills',
      'Familiarity with digital marketing techniques and tools',
      'Excellent writing and content creation skills',
      'Experience in lead generation and customer acquisition',
      'Knowledge of the AI industry and its potential applications in different sectors',
    ],
    responsibilities: [
      'Develop and implement marketing strategies to promote AI solutions to potential clients',
      'Identify potential clients and develop relationships with them',
      'Work with cross-functional teams to develop sales materials and collateral',
      'Participate in sales meetings and presentations to prospective clients',
      'Stay up-to-date with the latest trends and best practices in sales and marketing',
    ],
  },
  {
    id: 10,
    title: 'INTERN',
    location: 'Tangier, Maroc',
    icon: intern,
    date: 'May 6, 2023',
    description:
      "We are an AI-focused company looking for talented individuals to join our dynamic team. We believe that AI can have a positive impact on our society, but only if it is developed in an ethical and sustainable way.That's why we are seeking artists and computer engineers from all backgrounds to work with us and bring both artistic and technical expertise to our projects while ensuring their ethical integrity and sustainability.",
    requirements: [
      'For artists: Relevant professional experience in an artistic field and proficiency in graphic design software such as Photoshop, Illustrator, etc.',
      'For computer engineers: Relevant experience in software development, in-depth knowledge of common programming languages (Python, C++, Java, etc.), and ability to work in a team.',
      'For all: Passion for art, creativity, AI, and ethical and environmental issues.',
    ],
    responsibilities: [
      'Contribute to the creation of innovative AI applications and products.',
      'Bring an artistic and technical touch to our projects to make them more attractive.',
      'Contribute to the design of visual and functional content for our websites, applications, and social media.',
      'Provide creative and technical support to our development team.',
      'Ensure the ethical integrity and sustainability of our AI products.',
    ],
  },
];
