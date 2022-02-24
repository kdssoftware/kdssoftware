interface skill {
    name: string
    percentage: number
}

const skilldata : skill[][]= [
    [
        {
            "name": "JavaScript",
            "percentage": 95
        },
        {
            "name": "PHP",
            "percentage": 95
        },
        {
            "name": "TypeScript",
            "percentage": 80
        },
        {
            "name": "Python",
            "percentage": 70
        },
        {
            "name": "Java",
            "percentage": 60
        },
        {
            "name": "Bash",
            "percentage": 55
        },
        {
            "name": "C#",
            "percentage": 50
        },
        {
            "name": "Golang",
            "percentage": 40
        },
        {
            "name": "C++",
            "percentage": 10
        },
        {
            "name": "VB.net",
            "percentage": 10
        }
    ],
    [
        {
            "name": "HTML",
            "percentage": 100
        },
        {
            "name": "CSS",
            "percentage": 95
        },
        {
            "name": "Pug",
            "percentage": 95
        },
        {
            "name": "React.js",
            "percentage": 85
        },
        {
            "name": "Next.js",
            "percentage": 85
        },
        {
            "name": "Redux.js",
            "percentage": 30
        }
    ],
    [
        {
            "name": "Node.js",
            "percentage": 90
        },
        {
            "name": "ASP.net",
            "percentage": 60
        },
        {
            "name": "MySQL",
            "percentage": 80
        },
        {
            "name": "MongoDB",
            "percentage": 80
        },
        {
            "name": "PostgreSQL",
            "percentage": 70
        },
        {
            "name": "Redis",
            "percentage": 70
        },
        {
            "name":"NGinx",
            "percentage":60
        },
        {
            "name": "MS SQL",
            "percentage": 50
        },
        {
            "name": "Apache",
            "percentage":30
        },
        {
            "name": "SQLite",
            "percentage": 10
        },
    ],
    [
        {
            "name": "Git",
            "percentage": 95
        },
        {
            "name": "Docker",
            "percentage": 90
        },
        {
            "name": "Express.js",
            "percentage": 90
        },
        {
            "name": "Puppeteer",
            "percentage": 80
        },
        {
            "name": "NPM",
            "percentage": 90
        },
        {
            "name": "Webpack",
            "percentage": 90
        },
        {
            "name": "Babel",
            "percentage": 40
        },
        {
            "name": "CD\\CI",
            "percentage": 80
        },
        {
            "name": "Active Directory",
            "percentage": 70
        },
        {
            "name": "Google cloud",
            "percentage": 20
        }
    ]
]

const skillTypes : string[]= [
    "Languages",
    "Frontend",
    "Backend",
    "Tools"
]
interface navItemsI {
    title: string
    slogan: string
    href: string
}

const navItems :navItemsI[] = [
    {
      title: 'Home',
      slogan: 'From Dataqueries to Webdesign',
      href: '/'
    },
    {
      title: 'Skills',
      slogan: 'My Skill set, mostly self taught',
      href: '/skills'
    },
    {
      title: 'Projects',
      slogan: 'A collection of my work',
      href: '/projects'
    },
    {
      title: 'Contact',
      slogan: '“I have no special talent. I am only passionately curious.” - albert Einstein',
      href: '/contact'
    }
  ]

  interface projectI {
    title: string
    description: string
    "technologies":string[]
    link?: string
    github?: string
  }
const projects: projectI[] = [
    {
        "title":"Fyrebrick",
        "description":"Full stack (MEPN) For order picking and online inventory (invite only)",
        "technologies":[
            "Docker",
            "Node.js",
            "Express.js",
            "Pug",
            "JavaScript",
            "Python",
            "mongoDB",
        ],
        "github":"https://github.com/fyrebrick",
        "link":"https://my.fyrebrick.com",
    },
    {
        "title":"Picturehouse",
        "description":"Online galleries to post pictures and give access using admin tools (currently down)",
        "technologies":[
            "Docker",
            "Haproxy",
            "Node.js",
            "Typescript",
            "Next.js",
            "React",
            "Express.js",
            "MongoDB",
        ],
        "link":"https://picturehouse.be",
        "github":"https://github.com/snakehead007/picturehouse",
    },
    {
        "title":"FC Binkom site",
        "description":"Final project Graduaat (19/20) education.",
        "technologies":[
            "Docker",
            "Next.js",
            "React.js",
            "Redux.js",
            "TypeScript",
            "Java",
            "Spring boot"
        ],
        "link":"https://www.fcbinkom.be",
    },
    {
        "title":"Invoice administration",
        "description":"Keep contacts and invoices on track. Generating custom invoices.",
        "technologies":[
            "Docker",
            "Node.js",
            "Express.js",
            "Pug",
            "JavaScript",
            "jsPDF",
            "MongoDB"   
        ],
        "github":"https://github.com/snakehead007/invoice-administration"
    }
]


export {
    skilldata,
    skillTypes,
    navItems,
    projects
};