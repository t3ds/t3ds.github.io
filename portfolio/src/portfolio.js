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
  role: 'Software Engineer @ your.MOV',
  degree: 'Masters in Computer Science',
  description:
    // eslint-disable-next-line no-multi-str
    'A software engineer with multi-year experience in building fullstack systeams and ML applications. A quick learner who works well in fast paced and challenging environemnts such as startups.\
    I enjoy working in teams where I can take responsibility and ownership for features and tasks.',
  resume: resumeFile,
  social: {
    linkedin: 'https://linkedin.com/in/shivamkotak',
    github: 'https://github.com/t3ds',
  },
}

const experience = [

  {
    name: "CCC Intelligent Solutions",
    position: "Data Science Intern",
    addr: "Chicago, Illinois, USA",
    dates: "August, 2023 - December, 2023",
    // eslint-disable-next-line no-multi-str
    details: "Engineered prompts for IDEFICS and Cheetah visual language models for Visual-Question Answering for damage summarization,Deployed into production a pipeline to remove PII in both visual and textual data with help of AWS tools. The pipeline enhances the feature store being used by the Data Science department and is expected to process 100000 demands per week. Created a package of metrics to evaluate generated text with ground truths to evaluate outputs of all generative language models being developed by the company."
  },

  {
    name: "Cloud Counselage Pvt Ltd",
    position: "Machine Learning Intern",
    addr: "Mumbai, Maharashtra, India",
    dates: "March, 2020 - July, 2020",
    // eslint-disable-next-line no-multi-str
    details: "Developed an event recommendation system by extracting the type of event and its domain from an event headline and matching it with employees.\
    incorporated concepts of TF-IDF and lemmatization among others to train a Support Vector Classifier on a self-created dataset."
  }
  
]
const education = [
  {
    name:'University of Southern California',
    degree: 'Master of Science, Computer Science',
    gpa: '3.80',
    start: 'January, 2022',
    end: 'December, 2023',
    logo: usc
  },

  {
    name:'University of Mumbai',
    degree: 'Bachelor of Engineering, Computer Engineering',
    gpa: '9.1/10',
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
    name: 'Football Commentary Guided Player Rating Prediction',
    description:
      // eslint-disable-next-line no-multi-str
      'A project aimed to test the hypothesis that commentary snippets of football matches are sufficient to determine player ratings for a match. Made use of BERT to encode commentaries.\
      Testing Included using BERT and XLNET for embeddings and testing was done on differnet model types.',
    stack: ['Python', 'PyTorch'],
    sourceCode: 'https://github.com/ShivinDass/commentary2ratings',
  },

  {
    name: 'MiniGo: An intelligent agent for a minified Go Game',
    description:
      // eslint-disable-next-line no-multi-str
      'MiniGo is an intelligent agent that can play a 5x5 version of the highly popular Go game. The agent was created using alpha-beta pruned min-max algorithm\
      and was tested against other agents such as a random agent and a greedy agent.',
    stack: ['Python'],
    sourceCode: 'https://github.com/t3ds/MiniGo-Agent',
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
    name: 'Event Search Website',
    description:
      // eslint-disable-next-line no-multi-str
      'A responsive single-page web application to search for events, get details about an event and its venue and artists. Also allows users to favourite events they like. It makes use of the Ticketmaster API to fetch information.',
    stack: ['Angular', 'TypeScript', 'NodeJS', 'Bootstrap'],
    sourceCode: 'https://github.com/t3ds/EventFinder-Angular',
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

  {
    name: 'Pix2Pix',
    description: "An implementation of the Pix2Pix paper for Image Colorization. It is a generative Adversarial Networl model trained using grayscale and color images of the Tiny-ImageNet Dataset.",
    stack: ["Python", "PyTorch", "OpenCV"],
    sourceCode: 'https://github.com/t3ds/Pix2Pix-Image-Colorization/',
  },

  {
    name:'Extractive Text Summarization',
    // eslint-disable-next-line no-multi-str
    description: "An Extractive Text Summarization model made originally to summarize medicine package inserts but it can be used for general extractive text summarization as well.\
    It uses OCR to extract the sentences and then uses PageRank and GloVe embeddings to rank each sentence and outputs the top n sentences as a summary.",
    stack:["Python", "Tesseract", "NetworkX"],
    sourceCode: "https://github.com/t3ds/Extractive-Text-Summarization/",
  },
  {
    name: "CycleGAN for Image-To-Image Translation",
    description:"An attempt at implementing the paper for CycleGAN. It is a Genereative Adversarial Model for image-to-image translation. In this case it tested on converting horses to zebras and vice versa.",
    stack:["Python", "PyTorch"],
    sourceCode: "https://github.com/t3ds/ML-DL-Projects/tree/main/CycleGAN",
  },
  {
    name:"Restoring Division",
    description:"Restoring Division implemented from scratch using Java along with a simple UI made using JavaFX to show the steps as well as allow the user to take inputs in the form of text fields.",
    stack:["Java, JavaFX"],
    sourceCode: "https://github.com/t3ds/Restoring-Division",
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'PyTorch',
  'PyTorch Lightning',
  'TensorFlow',
  'Keras',
  'Transformers',
  'XGBoost',
  'Scikit-learn',
  'Matplotlib/Seaborn',
  'Numpy/Pandas',
  'NLTK/SpaCy',
  'MLFlow',
  'Gen AI',
  'LLMs',
  'FAL',
  'OpenAI Api\'s',
  'Prompt Engineering',
  'Flask',
  'Django',
  'AWS',
  'Amazon DynamoDB',
  'AWS Sagemaker',
  'AWS EC2',
  'AWS S3',
  'AWS Lambdas',
  'AWS CloudFormation',
  'AWS ECS',
  'AWS CodePipelines',
  'GCP',
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
  'Mediapipe',
  'ffmpeg',
  'lottie',
  'PHP',
  'Android',
  'SQL',
  'MongoDB',
  'PostgreSQL',
  'PowerBi',
  'Bootstrap',
  'Git',
  'Gitlab',
  'CI/CD',
  'Amplitude',
  'Sentry',
  'SonarQube',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'skotak@usc.edu',
}

export { header, about, experience, education, projects, skills, contact }
