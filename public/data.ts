interface skill {
    name: string
    percentage: number
}

const skilldata : skill[][]= [
    [
        {
            "name": "JavaScript",
            "percentage": 100
        },
        {
            "name": "PHP",
            "percentage": 100
        },
        {
            "name": "TypeScript",
            "percentage": 80
        },
        {
            "name": "Java",
            "percentage": 75
        },
        {
            "name": "Python",
            "percentage": 70
        },
        {
            "name": "Bash",
            "percentage": 50
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
            "name": "React.js",
            "percentage": 90
        },
        {
            "name": "Next.js",
            "percentage": 90
        },
        {
            "name": "Jquery.js",
            "percentage": 70
        },
        {
            "name": "Redux.js",
            "percentage": 30
        }
    ],
    [
        {
            "name": "Node.js",
            "percentage": 100
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
export {
    skilldata,
    skillTypes,
    navItems
};