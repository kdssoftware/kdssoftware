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
            "percentage": 90
        },
        {
            "name": "Python",
            "percentage": 50
        },
        {
            "name": "Java",
            "percentage": 50
        },
        {
            "name": "UNIX shell",
            "percentage": 70
        },
        {
            "name": "C#",
            "percentage": 50
        },
        {
            "name": "Golang",
            "percentage": 60
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
            "percentage": 75
        },
        {
            "name": "React.js",
            "percentage": 90
        },
        {
            "name": "Next.js",
            "percentage": 80
        },
        {
            "name": "Redux.js",
            "percentage": 30
        },
        {
            "name": "TailwindCSS",
            "percentage": 76
        },
        {
            "name": "Cypress",
            "percentage": 5
        },
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
            "name": "FaunaDB",
            "percentage": 50
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
        {
            "name": "Firebase",
            "percentage": 5
        },
    ],
    [
        {
            "name": "Git",
            "percentage": 85
        },
        {
            "name": "Docker (-compose)",
            "percentage": 80
        },
        {
            "name": "Express.js",
            "percentage": 80
        },
        {
            "name": "Puppeteer",
            "percentage": 60
        },
        {
            "name": "NPM / Yarn",
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
            "percentage": 30
        },
        {
            "name": "Active Directory",
            "percentage": 70
        },
        {
            "name": "Google cloud",
            "percentage": 25
        },
        {
            "name": "Jest",
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
        "title":"Web Game",
        "description":"Online multiplayer game as a hobby project",
        "technologies":[
            "Next.js 12",
            "Redux.js",
            "FaunaDB",
            "Tailwind CSS",
            "Jest",
            "Cypress",
        ],
        "github":"https://github.com/kdssoftware/web-maffia-game"
    },
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
    },
    {
        "title":"Boardgame",
        "description":"Dutch quiz question in a form of cards.",
        "technologies":[
            "Vercel",
            "Next.js"
        ],
        "github":"https://github.com/snakehead007/boardgame",
        "link":"https://boardgame.kdssoftware.com"
    }
]

interface contactI {
    icon: string
    name: string
    link: string
}
const contacts : contactI[] = [
    {
        "icon": "mail",
        "name": "E-mail",
        "link":"mailto:karel@karel.be"
    },
    {
        "icon":"github",
        "name":"GitHub",
        "link":"https://github.com/kdssoftware"
    },
    {
        "icon":"linkedin",
        "name":"LinkedIn",
        "link":"https://www.linkedin.com/in/karel-de-smet-7a18099/"
    },
    {
        "icon":"twitter",
        "name":"Twitter",
        "link":"https://twitter.com/kdssoftware"
    },
    {
        "icon":"dev",
        "name":"Dev.to",
        "link":"https://dev.to/kdssoftware"
    }
]


export {
    skilldata,
    skillTypes,
    navItems,
    projects,
    contacts
};