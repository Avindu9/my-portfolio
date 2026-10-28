// Site content. Edit this file to change what the portfolio shows.
// Static files (photo, CV) live in public/ and are referenced without a leading slash.
const profile = {
  "name": "Avindu Dilshan",
  "headline": "Full Stack Developer",
  "currentRole": "Application Support Consultant at Capital Maharaja Group",
  "location": "Colombo, Sri Lanka",
  "company": "Capital Maharaja Group",
  "tagline": "I build software end to end, Spring Boot and PHP on the server, React in the browser, and I do it inside a support role, where I develop the Power Apps, automations and dashboards that keep business systems running.",
  "about": [
    "I am a full-stack developer and a Software Technology undergraduate at the University of Vocational Technology. I work across the whole stack: Spring Boot and PHP on the back end, React and JavaScript on the front, with SQL Server and MySQL behind them.",
    "My job title is Application Support Consultant at Capital Maharaja Group, and a large part of that role is development. I build Power Apps applications, write the approval automations behind them in Power Automate, develop Power BI dashboards and reports, and test the integrations that connect these systems to SAP and the group's ERP.",
    "The support side taught me something development alone does not: how software behaves once real people depend on it. On the Bizom SFA rollout I worked across five group companies as the link between sales staff, business users, the vendor and the SAP team, gathering requirements, testing integrations, loading master data and training the people who use the system daily.",
    "Outside work I keep building. My projects range from a Spring Boot and React campus portal with JWT authentication to management systems in PHP and VB.NET. I like understanding a stack well enough to rebuild the same system in a different one, and my library management project exists in both Java and PHP for exactly that reason."
  ],
  "email": "avindudilshan99999@gmail.com",
  "phone": "+94 77 929 1667",
  "resumeUrl": "cv/Avindu-Dilshan-CV.pdf",
  "social": {
    "github": "https://github.com/Avindu9",
    "linkedin": "https://www.linkedin.com/in/avindu-dilshan-79a5b9255"
  },
  "stats": [
    {
      "value": "2+",
      "label": "Years in IT"
    },
    {
      "value": "5",
      "label": "Companies supported"
    },
    {
      "value": "10+",
      "label": "Projects delivered"
    }
  ],
  "skills": [
    {
      "group": "Business Applications",
      "items": [
        "Microsoft Power BI",
        "Power Apps",
        "Power Automate",
        "Report Builder",
        "SAP integration",
        "Bizom SFA",
        "Microsoft 365"
      ]
    },
    {
      "group": "Development",
      "items": [
        "Java",
        "Spring Boot",
        "PHP",
        "React JS",
        "JavaScript",
        "HTML5",
        "CSS3",
        "VB.NET"
      ]
    },
    {
      "group": "Data & Tools",
      "items": [
        "SQL Server",
        "MySQL",
        "MS Access",
        "Git & GitHub",
        "Figma",
        "Microsoft Excel"
      ]
    },
    {
      "group": "Support & Delivery",
      "items": [
        "Help desk support",
        "Troubleshooting",
        "Integration testing",
        "Requirement gathering",
        "User training",
        "System analysis"
      ]
    }
  ],
  "experience": [
    {
      "role": "Application Support Consultant",
      "org": "Capital Maharaja Group",
      "period": "Jan 2024 to Present",
      "points": [
        "Develop business applications in Microsoft Power Apps, including a CAPEX approval system, and build the approval logic behind them with Power Automate.",
        "Design and develop Power BI dashboards and Report Builder reports that drive business analysis and management decisions.",
        "Write and test the integrations that connect Sales Force Automation systems to SAP and the group's ERP, then support them in production.",
        "Support SFA systems end to end: monitoring, troubleshooting and resolving issues for users across the group.",
        "Led the Bizom SFA implementation across five group companies, acting as liaison between business users, sales teams, the vendor and SAP.",
        "Work with business, IT, SAP and sales teams to gather requirements, translate them into system changes and improve usability."
      ]
    },
    {
      "role": "Software Development Trainee",
      "org": "Cooperative Development Department, Southern Province",
      "period": "Oct 2022 to Apr 2023",
      "points": [
        "Completed a six-month software development training programme.",
        "Took part in the design, development and testing of software applications.",
        "Delivered two software projects, gaining hands-on application development experience."
      ]
    }
  ],
  "education": [
    {
      "qualification": "Bachelor of Software Technology",
      "org": "University of Vocational Technology",
      "period": "2024 to Present",
      "points": [
        "Software development, programming, database management and IT fundamentals.",
        "Application development, system analysis and software engineering concepts."
      ]
    },
    {
      "qualification": "Diploma in Information & Communication Technology",
      "org": "College of Technology, Galle",
      "period": "2021 to 2023",
      "points": [
        "Computer applications, networking basics and software tools."
      ]
    }
  ],
  "projects": [
    {
      "title": "Bizom Sales Force Automation Rollout",
      "summary": "Implemented the Bizom SFA platform across five Capital Maharaja Group companies. Gathered and analysed requirements from each company, coordinated the vendor and SAP teams through implementation and testing, loaded product, customer and distributor master data, and trained staff on daily operations.",
      "tags": [
        "Bizom",
        "SAP",
        "ERP integration",
        "Requirements",
        "User training",
        "Excel"
      ],
      "url": "",
      "featured": true,
      "accent": "violet"
    },
    {
      "title": "CAPEX Document Approval System",
      "summary": "A capital expenditure approval application built in Microsoft Power Apps, with an automated approval flow in Power Automate and email notifications at each stage, replacing a manual, paper-based process.",
      "tags": [
        "Power Apps",
        "Power Automate",
        "Microsoft 365",
        "Workflow automation"
      ],
      "url": "",
      "featured": true,
      "accent": "cyan"
    },
    {
      "title": "Campus Portal Student Management System",
      "summary": "A student management platform with a Spring Boot 3 backend and a React 19 frontend, secured with JWT login and backed by an H2 database.",
      "tags": [
        "Java 21",
        "Spring Boot 3",
        "React 19",
        "Vite",
        "JWT",
        "H2"
      ],
      "url": "https://github.com/Avindu9/student-management-system",
      "featured": false,
      "accent": "emerald"
    },
    {
      "title": "Library Management System",
      "summary": "Manages books, members and borrowing through a web interface. Built twice on purpose: once in Java with Spring Boot, once in PHP on a hand-written MVC framework, sharing the same features and design.",
      "tags": [
        "Java",
        "Spring Boot",
        "PHP",
        "MVC",
        "HTML/CSS"
      ],
      "url": "https://github.com/Avindu9/Library-Management",
      "featured": false,
      "accent": "blue"
    },
    {
      "title": "Cooperative Requisition Report Generator",
      "summary": "A desktop application that collects court payment orders for SANASA creditors and automates requisition report creation, cutting manual data handling and keeping financial reporting consistent.",
      "tags": [
        "VB.NET",
        "MS Access",
        "Reporting",
        "Desktop"
      ],
      "url": "https://github.com/Avindu9/Co-operative-Req.-Report-generator",
      "featured": false,
      "accent": "amber"
    },
    {
      "title": "Employee Education Management",
      "summary": "A desktop application in VB.NET for tracking employee training and education records.",
      "tags": [
        "VB.NET",
        "Desktop",
        "Records management"
      ],
      "url": "https://github.com/Avindu9/Employee-Education-Management",
      "featured": false,
      "accent": "rose"
    },
    {
      "title": "Express Ride Taxi Service",
      "summary": "A city taxi service built with PHP, vanilla JavaScript and jQuery for booking and dispatch.",
      "tags": [
        "PHP",
        "JavaScript",
        "jQuery"
      ],
      "url": "https://github.com/Avindu9/Express-Ride-Taxi-Service",
      "featured": false,
      "accent": "violet"
    },
    {
      "title": "Paragon Website",
      "summary": "A PHP-driven company website with custom styling and server-rendered pages.",
      "tags": [
        "PHP",
        "HTML",
        "CSS"
      ],
      "url": "https://github.com/Avindu9/Paragon-website-",
      "featured": false,
      "accent": "cyan"
    }
  ],
  "softSkills": [
    "Problem solving",
    "Analytical thinking",
    "Communication",
    "Team work",
    "Time management",
    "Decision making",
    "Quick learner"
  ]
};

export default profile;
