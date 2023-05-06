const jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      location: 'New York, NY',
      icon: 'https://via.placeholder.com/30',
      date: 'May 6, 2023',
      description:
        'We are looking for a Frontend Developer with experience in modern web technologies such as React, Angular, or Vue.js. The ideal candidate is proficient in HTML, CSS, and JavaScript.',
      requirements: [
        "Bachelor's degree in Computer Science or a related field",
        '2+ years of experience in frontend development',
        'Strong knowledge of HTML, CSS, and JavaScript',
      ],
      responsibilities: [
        'Develop and maintain web applications',
        'Collaborate with cross-functional teams',
        'Participate in code reviews and contribute to team knowledge',
      ],
    },
    {
      id: 2,
      title: 'Backend Developer',
      location: 'Boston, MA',
      icon: 'https://via.placeholder.com/30',
      date: 'May 6, 2023',
      description:
        'We are looking for a Backend Developer with experience in server-side technologies such as Node.js, Python, or Ruby. The ideal candidate has a strong understanding of RESTful APIs and database design.',
      requirements: [
        "Bachelor's degree in Computer Science or a related field",
        '2+ years of experience in backend development',
        'Strong knowledge of server-side programming languages',
      ],
      responsibilities: [
        'Develop and maintain backend services',
        'Collaborate with frontend developers to integrate user-facing elements',
        'Ensure the performance, reliability, and security of server-side applications',
      ],
    },
    {
      id: 3,
      title: 'Full Stack Developer',
      location: 'Austin, TX',
      icon: 'https://via.placeholder.com/30',
      date: 'May 6, 2023',
      description:
        'We are looking for a Full Stack Developer with experience in both frontend and backend technologies. The ideal candidate is proficient in HTML, CSS, JavaScript, and server-side programming languages.',
      requirements: [
        "Bachelor's degree in Computer Science or a related field",
        '3+ years of experience in web development',
        'Strong knowledge of frontend and backend technologies',
      ],
      responsibilities: [
        'Develop and maintain full-stack web applications',
        'Collaborate with cross-functional teams',
        'Participate in code reviews and contribute to team knowledge',
      ],
    },
    {
      id: 4,
      title: 'Data Scientist',
      location: 'San Francisco, CA',
      icon: 'https://via.placeholder.com/30',
      date: 'May 6, 2023',
      description:
        'We are looking for a Data Scientist with experience in data analysis, machine learning, and statistical modeling. The ideal candidate has a strong understanding of Python or R programming languages.',
      requirements: [
        "Master's degree in Computer Science, Statistics, or a related field",
        '2+ years of experience in data science',
        'Strong knowledge of Python or R programming languages',
      ],
      responsibilities: [
        'Analyze and interpret complex data sets',
        'Develop and maintain machine learning models',
        'Communicate insights and findings to cross-functional teams',
      ],
    },
    {
        id: 6,
        title: 'DevOps Engineer',
        location: 'Seattle, WA',
        icon: 'https://via.placeholder.com/30',
        date: 'May 6, 2023',
        description:
          'We are looking for a DevOps Engineer with experience in continuous integration and deployment (CI/CD) pipelines, cloud infrastructure, and containerization technologies. The ideal candidate has a strong understanding of Git, Jenkins, Docker, and Kubernetes.',
        requirements: [
          "Bachelor's degree in Computer Science or a related field",
          '2+ years of experience in DevOps engineering',
          'Strong knowledge of CI/CD pipelines, cloud infrastructure, and containerization technologies',
        ],
        responsibilities: [
          'Develop and maintain CI/CD pipelines',
          'Ensure the reliability and security of cloud infrastructure',
          'Collaborate with cross-functional teams to improve development workflows',
        ],
      },
      {
        id: 7,
        title: 'Product Manager',
        location: 'Los Angeles, CA',
        icon: 'https://via.placeholder.com/30',
        date: 'May 6, 2023',
        description:
          'We are looking for a Product Manager with experience in product development, project management, and cross-functional team collaboration. The ideal candidate has excellent communication and problem-solving skills.',
        requirements: [
          "Bachelor's degree in Business, Computer Science, or a related field",
          '2+ years of experience in product management',
          'Strong knowledge of product development and project management methodologies',
        ],
        responsibilities: [
          'Define and prioritize product features and requirements',
          'Coordinate with development teams to ensure timely product delivery',
          'Communicate product vision and strategy to stakeholders',
        ],
      },
      {
        id: 8,
        title: 'UI/UX Designer',
        location: 'Chicago, IL',
        icon: 'https://via.placeholder.com/30',
        date: 'May 6, 2023',
        description:
          'We are looking for a UI/UX Designer with experience in user-centered design, wireframing, and prototyping. The ideal candidate has a strong understanding of design principles and tools such as Sketch, Figma, or Adobe XD.',
        requirements: [
          "Bachelor's degree in Design, Computer Science, or a related field",
          '2+ years of experience in UI/UX design',
          'Strong knowledge of design principles and tools',
        ],
        responsibilities: [
          'Create and maintain user-centered designs for web and mobile applications',
          'Develop wireframes, prototypes, and user flow diagrams',
          'Collaborate with cross-functional teams to ensure excellent user experience',
        ],
      },
      {
        id: 9,
        title: 'Mobile App Developer',
        location: 'Denver, CO',
        icon: 'https://via.placeholder.com/30',
        date: 'May 6, 2023',
        description:
          'We are looking for a Mobile App Developer with experience in developing native or cross-platform mobile applications. The ideal candidate has a strong understanding of iOS or Android development, and proficiency in programming languages such as Swift, Kotlin, or React Native.',
        requirements: [
          "Bachelor's degree in Computer Science or a related field",
          '2+ years of experience in mobile app development',
          'Strong knowledge of iOS or Android development and programming languages',
        ],
        responsibilities: [
          'Develop and maintain mobile applications for iOS or Android platforms',
          'Collaborate with cross-functional teams']
        },
        {
            id: 1,
            title: 'Frontend Developer',
            location: 'New York, NY',
            icon: 'https://via.placeholder.com/30',
            date: 'May 6, 2023',
            description:
              'We are looking for a Frontend Developer with experience in modern web technologies such as React, Angular, or Vue.js. The ideal candidate is proficient in HTML, CSS, and JavaScript.',
            requirements: [
              "Bachelor's degree in Computer Science or a related field",
              '2+ years of experience in frontend development',
              'Strong knowledge of HTML, CSS, and JavaScript',
            ],
            responsibilities: [
              'Develop and maintain web applications',
              'Collaborate with cross-functional teams',
              'Participate in code reviews and contribute to team knowledge',
            ],
          },
          {
            id: 2,
            title: 'Backend Developer',
            location: 'Boston, MA',
            icon: 'https://via.placeholder.com/30',
            date: 'May 6, 2023',
            description:
              'We are looking for a Backend Developer with experience in server-side technologies such as Node.js, Python, or Ruby. The ideal candidate has a strong understanding of RESTful APIs and database design.',
            requirements: [
              "Bachelor's degree in Computer Science or a related field",
              '2+ years of experience in backend development',
              'Strong knowledge of server-side programming languages',
            ],
            responsibilities: [
              'Develop and maintain backend services',
              'Collaborate with frontend developers to integrate user-facing elements',
              'Ensure the performance, reliability, and security of server-side applications',
            ],
          },
          {
            id: 3,
            title: 'Full Stack Developer',
            location: 'Austin, TX',
            icon: 'https://via.placeholder.com/30',
            date: 'May 6, 2023',
            description:
              'We are looking for a Full Stack Developer with experience in both frontend and backend technologies. The ideal candidate is proficient in HTML, CSS, JavaScript, and server-side programming languages.',
            requirements: [
              "Bachelor's degree in Computer Science or a related field",
              '3+ years of experience in web development',
              'Strong knowledge of frontend and backend technologies',
            ],
            responsibilities: [
              'Develop and maintain full-stack web applications',
              'Collaborate with cross-functional teams',
              'Participate in code reviews and contribute to team knowledge',
            ],
          },
          {
            id: 4,
            title: 'Data Scientist',
            location: 'San Francisco, CA',
            icon: 'https://via.placeholder.com/30',
            date: 'May 6, 2023',
            description:
              'We are looking for a Data Scientist with experience in data analysis, machine learning, and statistical modeling. The ideal candidate has a strong understanding of Python or R programming languages.',
            requirements: [
              "Master's degree in Computer Science, Statistics, or a related field",
              '2+ years of experience in data science',
              'Strong knowledge of Python or R programming languages',
            ],
            responsibilities: [
              'Analyze and interpret complex data sets',
              'Develop and maintain machine learning models',
              'Communicate insights and findings to cross-functional teams',
            ],
          },
          {
              id: 6,
              title: 'DevOps Engineer',
              location: 'Seattle, WA',
              icon: 'https://via.placeholder.com/30',
              date: 'May 6, 2023',
              description:
                'We are looking for a DevOps Engineer with experience in continuous integration and deployment (CI/CD) pipelines, cloud infrastructure, and containerization technologies. The ideal candidate has a strong understanding of Git, Jenkins, Docker, and Kubernetes.',
              requirements: [
                "Bachelor's degree in Computer Science or a related field",
                '2+ years of experience in DevOps engineering',
                'Strong knowledge of CI/CD pipelines, cloud infrastructure, and containerization technologies',
              ],
              responsibilities: [
                'Develop and maintain CI/CD pipelines',
                'Ensure the reliability and security of cloud infrastructure',
                'Collaborate with cross-functional teams to improve development workflows',
              ],
            },
            {
              id: 7,
              title: 'Product Manager',
              location: 'Los Angeles, CA',
              icon: 'https://via.placeholder.com/30',
              date: 'May 6, 2023',
              description:
                'We are looking for a Product Manager with experience in product development, project management, and cross-functional team collaboration. The ideal candidate has excellent communication and problem-solving skills.',
              requirements: [
                "Bachelor's degree in Business, Computer Science, or a related field",
                '2+ years of experience in product management',
                'Strong knowledge of product development and project management methodologies',
              ],
              responsibilities: [
                'Define and prioritize product features and requirements',
                'Coordinate with development teams to ensure timely product delivery',
                'Communicate product vision and strategy to stakeholders',
              ],
            },
            {
              id: 8,
              title: 'UI/UX Designer',
              location: 'Chicago, IL',
              icon: 'https://via.placeholder.com/30',
              date: 'May 6, 2023',
              description:
                'We are looking for a UI/UX Designer with experience in user-centered design, wireframing, and prototyping. The ideal candidate has a strong understanding of design principles and tools such as Sketch, Figma, or Adobe XD.',
              requirements: [
                "Bachelor's degree in Design, Computer Science, or a related field",
                '2+ years of experience in UI/UX design',
                'Strong knowledge of design principles and tools',
              ],
              responsibilities: [
                'Create and maintain user-centered designs for web and mobile applications',
                'Develop wireframes, prototypes, and user flow diagrams',
                'Collaborate with cross-functional teams to ensure excellent user experience',
              ],
            },
            {
              id: 9,
              title: 'Mobile App Developer',
              location: 'Denver, CO',
              icon: 'https://via.placeholder.com/30',
              date: 'May 6, 2023',
              description:
                'We are looking for a Mobile App Developer with experience in developing native or cross-platform mobile applications. The ideal candidate has a strong understanding of iOS or Android development, and proficiency in programming languages such as Swift, Kotlin, or React Native.',
              requirements: [
                "Bachelor's degree in Computer Science or a related field",
                '2+ years of experience in mobile app development',
                'Strong knowledge of iOS or Android development and programming languages',
              ],
              responsibilities: [
                'Develop and maintain mobile applications for iOS or Android platforms',
                'Collaborate with cross-functional teams']
              }
]
export default jobs