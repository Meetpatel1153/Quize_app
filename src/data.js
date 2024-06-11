export const questions = {
  react: [
    {
      question: "What is ReactJS primarily used for?",
      options: [
        "Server-side scripting",
        "Building user interfaces",
        " Database management",
        "Graphic design",
      ],
      answer: "Building user interfaces",
    },
    {
      question: "What is JSX in React?",
      options: [
        "A styling language",
        "A templating engine",
        "A syntax extension for JavaScript",
        "A state management library",
      ],
      answer: "A syntax extension for JavaScript",
    },
    {
      question: "What is the purpose of React Components?",
      options: [
        "Managing database connections",
        "Handling server-side logic",
        "Building user interfaces into reusable pieces",
        "Controlling browser settings",
      ],
      answer: "Building user interfaces into reusable pieces",
    },
    {
      question: "How is data passed between React components?",
      options: [
        "Using global variables",
        "Through function parameters",
        "Via HTTP requests",
        "Using props",
      ],
      answer: "Using props",
    },
    {
      question: "What is the Virtual DOM in React used for?",
      options: [
        "Storing user authentication data",
        "Efficiently updating and rendering components",
        "Managing server-side rendering",
        "Handling API requests",
      ],
      answer: "Efficiently updating and rendering components",
    },
    {
      question: "What is the purpose of the useState hook in React?",
      options: [
        "Fetching data from an API",
        "Managing component state in functional components",
        "Defining global variables",
        "Creating event listeners",
      ],
      answer: "Managing component state in functional components",
    },
    {
      question: `In React, what does the term "props" stand for?`,
      options: ["Properties", "Procedures", "Prototypes", "Parameters"],
      answer: "Properties",
    },
    {
      question:
        "Which lifecycle method is used for actions that should happen after the component is inserted into the DOM?",
      options: [
        "componentWillUnmount",
        "componentDidMount",
        "componentWillMount",
        "componentDidUpdate",
      ],
      answer: "componentDidMount",
    },
    {
      question: "How can you conditionally render content in React?",
      options: [
        "Using the if-else statement",
        "With the renderIf function",
        "Using the ternary operator (? :)",
        "Through the switch statement",
      ],
      answer: "Using the ternary operator (? :)",
    },
    {
      question: "What is the purpose of the onClick event handler in React?",
      options: [
        "Handling keyboard events",
        "Triggering an action when a button is clicked",
        "Managing state changes",
        "Controlling page navigation",
      ],
      answer: "Triggering an action when a button is clicked",
    },
  ],
  nodejs: [
    {
      question: "What is Node.js?",
      options: [
        "A JavaScript framework",
        "A JavaScript library",
        "A JavaScript runtime",
        "A JavaScript compiler",
      ],
      answer: "A JavaScript runtime",
    },
    {
      question:
        "Which built-in module is used to handle file operations in Node.js?",
      options: ["http", "fs", "path", "url"],
      answer: "fs",
    },
    {
      question: "What is the purpose of npm in Node.js?",
      options: [
        "To run JavaScript on the server",
        "To manage dependencies",
        "To compile JavaScript code",
        "To manage server configuration",
      ],
      answer: "To manage dependencies",
    },
    {
      question: "Which method is used to create a server in Node.js?",
      options: ["createServer", "initServer", "startServer", "newServer"],
      answer: "createServer",
    },
    {
      question: "What is a common use of the 'require' function in Node.js?",
      options: [
        "To include external libraries",
        "To create HTTP servers",
        "To handle HTTP requests",
        "To manage file uploads",
      ],
      answer: "To include external libraries",
    },
    {
      question: "Which module is used to create a web server in Node.js?",
      options: ["http", "web", "express", "socket"],
      answer: "http",
    },
    {
      question: "How do you install a package globally in Node.js?",
      options: [
        "npm install <package>",
        "npm install <package> -g",
        "npm global install <package>",
        "npm -g install <package>",
      ],
      answer: "npm install <package> -g",
    },
    {
      question: "What does the 'fs.readFile' method do in Node.js?",
      options: [
        "Reads a file asynchronously",
        "Reads a file synchronously",
        "Writes data to a file",
        "Deletes a file",
      ],
      answer: "Reads a file asynchronously",
    },
    {
      question:
        "Which of the following is true about Node.js event-driven architecture?",
      options: [
        "Node.js uses multithreading to handle events",
        "Node.js uses an event loop to handle events",
        "Node.js creates a new thread for each event",
        "Node.js does not support event-driven programming",
      ],
      answer: "Node.js uses an event loop to handle events",
    },
    {
      question: "Which of the following is a core module in Node.js?",
      options: ["axios", "lodash", "express", "path"],
      answer: "path",
    },
  ],
  Mongodb: [
    {
      question: "What type of database is MongoDB?",
      options: ["Relational", "Document-oriented", "Key-value", "Graph"],
      answer: "Document-oriented",
    },
    {
      question: "Which query language does MongoDB use?",
      options: ["SQL", "MQL", "GraphQL", "NoSQL"],
      answer: "MQL",
    },
    {
      question: "What is a collection in MongoDB?",
      options: [
        "A single document",
        "A group of databases",
        "A group of documents",
        "A single database",
      ],
      answer: "A group of documents",
    },
    {
      question: "Which method is used to insert a document into a collection?",
      options: [
        "db.collection.insert()",
        "db.collection.add()",
        "db.collection.push()",
        "db.collection.save()",
      ],
      answer: "db.collection.insert()",
    },
    {
      question: "How do you update an existing document in MongoDB?",
      options: [
        "db.collection.update()",
        "db.collection.modify()",
        "db.collection.change()",
        "db.collection.edit()",
      ],
      answer: "db.collection.update()",
    },
    {
      question: "What is the purpose of the ObjectId in MongoDB?",
      options: [
        "To represent the size of a document",
        "To act as a unique identifier for documents",
        "To store binary data",
        "To store date and time",
      ],
      answer: "To act as a unique identifier for documents",
    },
    {
      question: "Which of the following is a valid MongoDB data type?",
      options: ["String", "Number", "ObjectId", "All of the above"],
      answer: "All of the above",
    },
    {
      question: "How can you create an index in MongoDB?",
      options: [
        "db.collection.createIndex()",
        "db.collection.ensureIndex()",
        "db.collection.addIndex()",
        "db.collection.index()",
      ],
      answer: "db.collection.createIndex()",
    },
    {
      question: "Which command is used to remove a document from a collection?",
      options: [
        "db.collection.deleteOne()",
        "db.collection.removeOne()",
        "db.collection.dropOne()",
        "db.collection.eraseOne()",
      ],
      answer: "db.collection.deleteOne()",
    },
    {
      question: "What is the default port for MongoDB?",
      options: ["27017", "8080", "3000", "3306"],
      answer: "27017",
    },
  ],
  Nextjs: [
    {
      question: "What is Next.js primarily used for?",
      options: [
        "Client-side rendering",
        "Server-side rendering",
        "Static site generation",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      question: "How do you create a new Next.js project?",
      options: [
        "npx create-react-app",
        "npx create-next-app",
        "npm init next-app",
        "npx create-next-project",
      ],
      answer: "npx create-next-app",
    },
    {
      question: "What file is used to define custom routes in Next.js?",
      options: ["routes.js", "next.config.js", "server.js", "pages/index.js"],
      answer: "next.config.js",
    },
    {
      question: "How do you add a static asset to a Next.js project?",
      options: [
        "Place it in the public directory",
        "Place it in the assets directory",
        "Place it in the static directory",
        "Place it in the src directory",
      ],
      answer: "Place it in the public directory",
    },
    {
      question: "What is the default folder for pages in a Next.js project?",
      options: ["src/pages", "public/pages", "pages", "app/pages"],
      answer: "pages",
    },
    {
      question:
        "How do you fetch data in a Next.js page using server-side rendering?",
      options: [
        "getServerSideProps",
        "getStaticProps",
        "componentDidMount",
        "fetchData",
      ],
      answer: "getServerSideProps",
    },
    {
      question: "Which of the following is a feature of Next.js?",
      options: [
        "API Routes",
        "CSS Modules",
        "Automatic Code Splitting",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      question: "How do you navigate between pages in Next.js?",
      options: [
        "Using the Link component from 'react-router-dom'",
        "Using the Link component from 'next/link'",
        "Using the NavLink component from 'react-router-dom'",
        "Using the Redirect component from 'next/link'",
      ],
      answer: "Using the Link component from 'next/link'",
    },
    {
      question: "What is ISR in Next.js?",
      options: [
        "Incremental Site Rendering",
        "Incremental Static Regeneration",
        "Instant Static Rendering",
        "Incremental Server Rendering",
      ],
      answer: "Incremental Static Regeneration",
    },
    {
      question: "Which command is used to start a Next.js development server?",
      options: ["npm start", "npm run build", "npm run dev", "next serve"],
      answer: "npm run dev",
    },
  ],
  MaterialUI: [
    {
      question: "What is Material-UI primarily used for?",
      options: [
        "Server-side rendering",
        "Styling React applications",
        "Database management",
        "Building REST APIs",
      ],
      answer: "Styling React applications",
    },
    {
      question: "How do you install Material-UI in a React project?",
      options: [
        "npm install material-ui",
        "npm install @material-ui/core",
        "npm install @material/core",
        "npm install material-ui/react",
      ],
      answer: "npm install @material-ui/core",
    },
    {
      question:
        "Which component is used to create a responsive grid layout in Material-UI?",
      options: ["Grid", "Container", "Box", "Paper"],
      answer: "Grid",
    },
    {
      question:
        "How do you apply a primary color to a Button component in Material-UI?",
      options: [
        "<Button color='primary'>",
        "<Button variant='primary'>",
        "<Button theme='primary'>",
        "<Button type='primary'>",
      ],
      answer: "<Button color='primary'>",
    },
    {
      question: "Which component is used to create an AppBar in Material-UI?",
      options: ["NavBar", "TopBar", "AppBar", "HeaderBar"],
      answer: "AppBar",
    },
    {
      question: "How do you create custom themes in Material-UI?",
      options: [
        "Using the createTheme function",
        "Using the makeTheme function",
        "Using the defineTheme function",
        "Using the buildTheme function",
      ],
      answer: "Using the createTheme function",
    },
    {
      question: "What is the purpose of the Box component in Material-UI?",
      options: [
        "To create a flex container",
        "To create a grid container",
        "To create a layout container with a default display of flex",
        "To create a layout container with a default display of block",
      ],
      answer: "To create a layout container with a default display of block",
    },
    {
      question:
        "Which prop do you use to control the spacing between items in a Grid container?",
      options: ["gap", "spacing", "margin", "padding"],
      answer: "spacing",
    },
    {
      question: "How do you override default styles in Material-UI?",
      options: [
        "Using the style attribute",
        "Using the useStyles hook",
        "Using the styled API",
        "Using the css function",
      ],
      answer: "Using the styled API",
    },
    {
      question:
        "Which component is used to create a modal dialog in Material-UI?",
      options: ["Modal", "Dialog", "Popup", "Overlay"],
      answer: "Dialog",
    },
  ],
}
