import usc from "./usc.png"
import uom from "./uom.png"
import resumeFile from "./assets/ShivamKotakResume.pdf"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://t3ds.github.io/',
  title: 'SK.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Shivam Kotak',
  role: 'Graduate Student @ University of Southern California',
  degree: 'Masters in Computer Science',
  description:
    // eslint-disable-next-line no-multi-str
    'A graduate student with multi-years experience in creating machine learning and deep learning models, full-stack web development. A team player and quick learner with strong communication skills\
    and leadership qualities.',
  resume: resumeFile,
  social: {
    linkedin: 'https://linkedin.com/in/shivamkotak',
    github: 'https://github.com/t3ds',
  },
}

const education = [
  {
    name:'University of Southern California',
    degree: 'Master of Science, Computer Science',
    gpa: '3.71',
    start: 'January, 2022',
    end: 'Present',
    expected: 'December, 2023',
    logo: usc
  },

  {
    name:'University of Mumbai',
    degree: 'Bachelor of Engineering, Computer Engineering',
    gpa: '9.08/10',
    start: 'August, 2017',
    end: 'July, 2021',
    logo: uom
  },
]

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Stock Price Prediction Dashboard',
    description:
      // eslint-disable-next-line no-multi-str
      'A Dashboard made using Material and React with a Flask backend. The user can Train a model for any number of stocks on the NSE and use them to make predictions.\
      The dashboard also shows a real time Top Gainers and Losers and also allows a user to input a stock ticker and get its last 30 day price history. Multi-day predictions can also be made',
    stack: ['React', 'Flask', 'Python', 'Keras'],
    sourceCode: 'https://github.com/t3ds/Stock-Price-Prediction',
  },
  {
    name: 'Manga Downloader',
    description:
      // eslint-disable-next-line no-multi-str
      'Uses Java and JavaFX to allow a user to to input a keyword and get names of manga that contain the keyword. The user can then choose the manga and download its chapters to their local machine\
      It uses BeautifulSoup4 and Selenium and HTML scraping on mangadex.org to achieve this. NOTE: Defunct because mangadex changed their codebase.',
    stack: ['Java', 'JavaFX', 'Selenium', 'BeautifulSoup4'],
    sourceCode: 'https://github.com/t3ds/Manga-Downloader',
    
  },
  {
    name: 'Football Commentary Guided Player Rating Prediction',
    description:
      // eslint-disable-next-line no-multi-str
      'A project aimed to test the hypothesis that commentary snippets of football matches are sufficient to determine player ratings for a match. Made use of BERT to encode commentaries.\
      Testing Included using BERT and XLNET for embeddings and testing was done on differnet model types.',
    stack: ['Python', 'PyTorch'],
    sourceCode: 'https://github.com/ShivinDass/commentary2ratings',
  },

  {
    name: 'Event Search Website',
    description:
      // eslint-disable-next-line no-multi-str
      'A responsive single-page web application to search for events, get details about an event and its venue and artists. Also allows users to favourite events they like. It makes use of the Ticketmaster API to fetch information. (Source code is for a Vanilla JS version with Flask. This will be updated soon)',
    stack: ['Angular', 'TypeScript', 'NodeJS', 'Bootstrap'],
    sourceCode: 'https://github.com/t3ds/TicketMaster-EventFinder-Webpage',
    livePreview: 'https://hw8-csci571-sk.wn.r.appspot.com/'
  },

  {
    name: 'Hidden Markov Model',
    description:
      // eslint-disable-next-line no-multi-str
      'An implementation of the Hidden Markov Model using the Viterbi Decoding algorithm made in Python. A tagged training file of any language \
      can be fed to the model. This model can then be used to tag words in the same language. The model makes some assumptions for unseen tokens and transitions',
    stack: ['Python'],
    sourceCode: 'https://github.com/t3ds/Hidden-Markov-Model',
  },

  {
    name: 'EventFinder Android',
    description:
      // eslint-disable-next-line no-multi-str
      'A version of the event search website mentioned earlier made into an android application.',
    stack: ['Android', 'Java', 'NodeJS'],
    sourceCode: 'https://github.com/t3ds/EventFinder-Android',

  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'PyTorch',
  'TensorFlow',
  'Keras',
  'Flask',
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Angular',
  'Node JS',
  'Express JS',
  'Java',
  'JavaFX',
  'C/C++',
  'PHP',
  'GCP',
  'AWS',
  'Android',
  'SQL',
  'MongoDB',
  'PostgreSQL',
  'PowerBi',
  'Bootstrap',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'skotak@usc.edu',
}

export { header, about, education, projects, skills, contact }
