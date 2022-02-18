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
            "percentage": 90
        },
        {
            "name": "Java",
            "percentage": 80
        },
        {
            "name": "Python",
            "percentage": 70
        },
        {
            "name": "Bash",
            "percentage": 60
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
            "percentage": 95
        },
        {
            "name": "CSS5",
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
            "name": "Jquery",
            "percentage": 90
        },
        {
            "name": "Redux",
            "percentage": 25
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
            "name": "Docker",
            "percentage": 90
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
            "name": "MS SQL",
            "percentage": 50
        },
        {
            "name": "SQLite",
            "percentage": 30
        }
    ],
    [
        {
            "name": "Git",
            "percentage": 95
        },
        {
            "name": "Express.js",
            "percentage": 90
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

const skillTypes = [
    "Languages",
    "Frontend",
    "Backend",
    "Tools"
]

export {
    skilldata,
    skillTypes
} ;