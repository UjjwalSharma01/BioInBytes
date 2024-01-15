const commands = {
  "--whoami": {
    "description": "Discover who I am",
    "multiline": false,
    "content": "Hello everyone! Ujjwal Sharma here, a tech enthusiast currently pursuing B.Tech in CSE at VIPS with a keen interest in web development and AI, and a deep desire to create a product that will impact millions globally.",
    "isHTML": false,
  },
  "--web": {
    "description": "Visit my digital hub",
    "multiline": false,
    "content": "You can see my personal website at the following link -  <website under construction>",
    "isHTML": false,
  },
  "--github": {
    "description": "Check out my codes on GitHub",
    "multiline": false,
    "content": 'Explore my coding universe on GitHub by clicking on this link ->  <a href="https://github.com/UjjwalSharma01" target="_blank">https://github.com/UjjwalSharma01</a>',
    "isHTML": true,
  },
  "--education": {
    "description": "Explore My Educational Journey",
    "multiline": true,
    "content": [
      "institute Name: Vivekananda Institute of Professional Studies (New Delhi) 2022-Now   -  Education: Bachelor of Technology in CSE",
      "institute Name: Vardhman Academy (Meerut - Uttar Pradesh) 2020-2022  -  Education: 10th and 12th",
    ],
    "isHTML": false,
  },
  "--experience":{
    "description":"To get my experience timeline",
    "multiline":true,
    "content":[
      "will be adding soon",
      "will be adding soon"
    ]
  },
  "--projects":{
    "description":"To get to know about the projects I've created",
    "multiline":true,
    "content":[
      "The Checklist - one stop concept revision website for students and professionals"
    ]
  },
  "--contact":{
    "description":"Get in touch with me",
    "multiline": true,
    "content":[
      "You can mail me at ujjwalsh2004@gmail.com",
      'You can drop me a DM on linkedin by clicking on this link -> <a href="https://www.linkedin.com/in/ujjwalsharma01/" target="_blank">https://www.linkedin.com/in/ujjwalsharma01/</a>',
    ],
    "isHTML": true,
  }
}
