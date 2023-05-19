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
            "percentage": 90
        },
        {
            "name": "TypeScript",
            "percentage": 95
        },
        {
            "name": "Python",
            "percentage": 50
        },
        {
            "name": "Java",
            "percentage": 45
        },
        {
            "name": "UNIX shell",
            "percentage": 65
        },
        {
            "name": "C#",
            "percentage": 40
        },
        {
            "name": "Golang",
            "percentage": 85
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
            "percentage": 95
        },
        {
            "name": "CSS",
            "percentage": 85
        },
        {
            "name": "Pug",
            "percentage": 80
        },
        {
            "name": "React.js",
            "percentage": 90
        },
        {
            "name": "Next.js",
            "percentage": 85
        },
        {
            "name": "Redux.js",
            "percentage": 30
        },
        {
            "name": "TailwindCSS",
            "percentage": 95
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
            "percentage": 75
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
            "percentage": 90
        },
        {
            "name": "Docker",
            "percentage": 85
        },
        {
            "name": "Express.js",
            "percentage": 80
        },
        {
            "name": "Puppeteer",
            "percentage": 75
        },
        {
            "name": "NPM / Yarn",
            "percentage": 90
        },
        {
            "name": "Webpack / Vite",
            "percentage": 50
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
            "percentage": 30
        },
        {
            "name": "Google cloud",
            "percentage": 35
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
        "title":"MDSbulk",
        "description":"Single landing page for a customer.",
        "technologies":[
            "Next.js 12",
            "Google Cloud",
            "Tailwind CSS",
        ],
        "link":"https://www.mdsbulk.be"
    },
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
    },
    {
        "title":"Image Upload Server",
        "description":"Small dynamic file server for images.",
        "technologies":[
            "Vercel",
            "Node.js",
            "Docker",
        ],
        "github":"https://github.com/kdssoftware/image-upload-server",
    },
    {
        "title":"Bricklink price filler",
        "description":"Will search parts and compare them by price on the average 6 months sales on bricklink. And updates those prices.",
        "technologies":[
            "Google Cloud",
            "Next.js",
            "Docker",
            "Cloud Run",
            "Datastore"    
        ],
        "github":"https://github.com/kdssoftware/bricklink-price-filler",
        "link":"https://prices.kdssoftware.com"
    }
]

interface contactI {
    icon: string
    name: string
    link: string
    rel?:string,
}
const contacts : contactI[] = [
    {
        "icon": "mail",
        "name": "E-mail",
        "link":"mailto:info@kdssoftware.com"
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
    },
    {
        "icon":"mastodon",
        "name":"Mastodon",
        "link":"https://mastodon.online/@kdssoftware",
        "rel":"me",
    },
    {
        "icon":"discord",
        "name":"Discord",
        "link":"https://discord.gg/JwQtNdN5",
        "rel":"me",
    }
]


export {
    skilldata,
    skillTypes,
    navItems,
    projects,
    contacts
};
