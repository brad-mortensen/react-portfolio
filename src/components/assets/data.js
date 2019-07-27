import bonafind from './bonafind.png';
import vueNotes from './vue-notes.png';
import djangoBlog from './django-blog.png';
import pairMe from './pair-me.png';

export const projectData = [
  {
    name: "PairMe",
    description: "PairMe was built during a three day hackathon and is one of my favorite projects I've ever built. I accumulated around 30 hours of work on this project over just the first two days of the hackathon. With the project, we tried to find a way to make it easier for people who wanted to pair program but had trouble finding a partner. ",
    img: pairMe,
    repo: "https://github.com/pairme",
    stack: "React, Express, Node, Socket.IO",
    website: 'https://pair-me.netlify.com/',
    cleanWebsite: 'pair-me.netlify.com',
    id: 0
  },
  {
    name: "Bonafind",
    description: "Bonafind is a web application that helps you discover restaurants and businesses near you. You could call it a minimum viable Yelp. This project was built over 5 weeks by a team of  four developers. Nearly everything I know about working on a software team, I learned during this project.",
    stack: "React, Express, Node, PostgreSQL",
    img: bonafind,
    repo: "https://github.com/Lambda-School-Labs/labs9-business-reviews",
    website: 'https://bonafind.netlify.com/',
    cleanWebsite: 'bonafind.biz/',
    id: 1
  },
  {
    name: "Vue Notes",
    description: "The web dev mainstay that we all know and love, the ole' note taking app. I was interested in learning vue after many React Projects. This was my first Vue project but still remains a favorite to this day.",
    stack: "Vue, Express, Node, PostgreSQL",
    img: vueNotes,
    repo: "https://github.com/brad-mortensen/Notes-Vue",
    website: 'https://notes-vue.herokuapp.com/',
    cleanWebsite: 'notes-vue.herokuapp.com/',
    id: 2
  },
  {
    name: "Bloggo",
    description: "A full-featured Django blog application build from scratch. The app allows users to create a profile with a profile image (Hosted on AWS) and recieve a password reset email if needed. This app was built as a way to refine my Python skills and become more familiar with Django",
    stack: "Django, PostgreSQL",
    img: djangoBlog,
    repo: "https://github.com/brad-mortensen/django-blog",
    website: 'http://django-bloggo.herokuapp.com/',
    cleanWebsite: 'django-bloggo.herokuapp.com/',
    id: 3
  },
]

export const skillData = [
  {
    groupName: "languages",
    assets: [
      {
        name: 'javascript',
        img: javascript,
        id: 0
      },
      {
        name: 'python',
        img: python,
        id: 1
      },
      {
        name: 'c',
        img: c,
        id: 2
      }
    ],
    id: 0
  },
  {
    groupName: "frontend",
    assets: [
      {
        name: 'react',
        img: react,
        id: 0
      },
      {
        name: 'vue',
        img: vue,
        id: 1
      },
      {
        name: 'angular',
        img: angular,
        id: 2
      }
    ],
    id: 1
  },
  {
    groupName: "backend",
    assets: [
      {
        name: 'nodejs',
        img: nodejs,
        id: 0
      },
      {
        name: 'postgresql',
        img: postgresql,
        id: 1
      },
      {
        name: 'django',
        img: django,
        id: 2
      }
    ],
    id: 2
  },
  {
    groupName: "tools",
    assets: [
      {
        name: 'git',
        img: git,
        id: 0
      },
      {
        name: 'vscode',
        img: visualStudioCode,
        id: 1
      },
      {
        name: 'npm',
        img: npm,
        id: 2
      }
    ],
    id: 3
  },
  {
    groupName: "ui/ux",
    assets: [
      {
        name: 'html5',
        img: html5,
        id: 0
      },
      {
        name: 'css3',
        img: css3,
        id: 1
      },
      {
        name: 'bootstrap4',
        img: bootstrap4,
        id: 2
      }
    ],
    id: 4
  },
]