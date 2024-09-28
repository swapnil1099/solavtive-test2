const data={
  "categories": [
    {
      "id": "js_basics",
      "name": "JavaScript Basics",
      "questions": [
        {
          "id": "q1",
          "question": "What is the correct syntax for referring to an external script called 'script.js'?",
          "options": [
            "A. <script name='script.js'>",
            "B. <script href='script.js'>",
            "C. <script src='script.js'>",
            "D. <script file='script.js'>"
          ],
          "correctAnswer": "C",
          "timeLimit": 10
        },
        {
          "id": "q2",
          "question": "Which company developed JavaScript?",
          "options": [
            "A. Microsoft",
            "B. Netscape",
            "C. Google",
            "D. Mozilla"
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        },
        {
          "id": "q3",
          "question": "Which of the following is a valid JavaScript variable declaration?",
          "options": [
            "A. var 123name;",
            "B. var name123;",
            "C. var *name;",
            "D. var &name;"
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        },
        {
          "id": "q4",
          "question": "How do you write a comment in JavaScript?",
          "options": [
            "A. // This is a comment",
            "B. <!-- This is a comment -->",
            "C. ' This is a comment",
            "D. # This is a comment"
          ],
          "correctAnswer": "A",
          "timeLimit": 10
        },
        {
          "id": "q5",
          "question": "Which built-in method is used to convert a string to a number?",
          "options": [
            "A. parseInt()",
            "B. convertToNumber()",
            "C. toNumber()",
            "D. numberConvert()"
          ],
          "correctAnswer": "A",
          "timeLimit": 10
        },
        {
          "id": "q6",
          "question": "What is the result of '2' + 2 in JavaScript?",
          "options": [
            "A. 4",
            "B. 22",
            "C. NaN",
            "D. Error"
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        },
        {
          "id": "q7",
          "question": "How do you declare a function in JavaScript?",
          "options": [
            "A. function myFunction() {}",
            "B. declare myFunction() {}",
            "C. def myFunction() {}",
            "D. function: myFunction() {}"
          ],
          "correctAnswer": "A",
          "timeLimit": 10
        },
        {
          "id": "q8",
          "question": "Which method is used to round a number to the nearest integer?",
          "options": [
            "A. Math.round()",
            "B. Math.ceil()",
            "C. Math.floor()",
            "D. Math.random()"
          ],
          "correctAnswer": "A",
          "timeLimit": 10
        },
        {
          "id": "q9",
          "question": "What is the correct way to write an if statement in JavaScript?",
          "options": [
            "A. if i == 5 then",
            "B. if (i == 5)",
            "C. if i = 5 then",
            "D. if i = 5"
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        },
        {
          "id": "q10",
          "question": "Which of the following is a JavaScript data type?",
          "options": [
            "A. integer",
            "B. float",
            "C. boolean",
            "D. decimal"
          ],
          "correctAnswer": "C",
          "timeLimit": 10
        }
      ]
    },
    {
      "id": "react_advanced",
      "name": "React Advanced",
      "questions": [
        {
          "id": "q1",
          "question": "What is a React hook?",
          "options": [
            "A. A function that lets you 'hook into' React state and lifecycle features",
            "B. A method to attach components",
            "C. A built-in method to fetch data",
            "D. A CSS utility in React"
          ],
          "correctAnswer": "A",
          "timeLimit": 10
        },
        {
          "id": "q2",
          "question": "Which hook is used to manage the component’s state in React?",
          "options": [
            "A. useEffect",
            "B. useState",
            "C. useReducer",
            "D. useMemo"
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        },
        {
          "id": "q3",
          "question": "What is the purpose of useEffect in React?",
          "options": [
            "A. To fetch data from APIs",
            "B. To manage side-effects in functional components",
            "C. To create new components",
            "D. To handle errors in the app"
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        },
        {
          "id": "q4",
          "question": "Which of the following is true about React keys?",
          "options": [
            "A. Keys should be unique across all elements in the DOM.",
            "B. Keys help identify which items have changed in a list.",
            "C. Keys are required for functional components.",
            "D. Keys are mandatory in every component."
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        },
        {
          "id": "q5",
          "question": "What is the virtual DOM in React?",
          "options": [
            "A. A direct copy of the actual DOM.",
            "B. A lightweight representation of the actual DOM.",
            "C. A browser API to access the DOM.",
            "D. A built-in method to optimize DOM manipulation."
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        },
        {
          "id": "q6",
          "question": "What is the difference between a controlled and uncontrolled component in React?",
          "options": [
            "A. Controlled components manage state internally.",
            "B. Uncontrolled components manage state via refs.",
            "C. Uncontrolled components rely on the parent component for state.",
            "D. Controlled components handle updates automatically."
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        },
        {
          "id": "q7",
          "question": "Which method is used to render React components to the DOM?",
          "options": [
            "A. React.render()",
            "B. ReactDOM.render()",
            "C. DOM.render()",
            "D. component.render()"
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        },
        {
          "id": "q8",
          "question": "What does the useMemo hook do?",
          "options": [
            "A. Memoizes the value of a variable to avoid unnecessary calculations.",
            "B. Memoizes the entire component tree.",
            "C. Helps manage side effects in React components.",
            "D. Adds memoization to React lifecycle events."
          ],
          "correctAnswer": "A",
          "timeLimit": 10
        },
        {
          "id": "q9",
          "question": "What is the main use of React Context?",
          "options": [
            "A. To handle HTTP requests.",
            "B. To manage global state across components.",
            "C. To improve performance in large components.",
            "D. To manage lifecycle events."
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        },
        {
          "id": "q10",
          "question": "Which lifecycle method is deprecated in React?",
          "options": [
            "A. componentDidMount",
            "B. componentWillMount",
            "C. componentDidUpdate",
            "D. shouldComponentUpdate"
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        }
      ]
    },
    {
      "id": "angular_basics",
      "name": "Angular Basics",
      "questions": [
        {
          "id": "q1",
          "question": "What is Angular?",
          "options": [
            "A. A backend framework for building REST APIs",
            "B. A client-side JavaScript framework for building web applications",
            "C. A tool for writing CSS styles",
            "D. A template engine for rendering HTML"
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        },
        {
          "id": "q2",
          "question": "Which architectural pattern does Angular follow?",
          "options": [
            "A. MVC",
            "B. MVVM",
            "C. MVP",
            "D. Flux"
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        },
        {
          "id": "q3",
          "question": "How do you define a component in Angular?",
          "options": [
            "A. Using the @Directive decorator",
            "B. Using the @Component decorator",
            "C. Using the @Pipe decorator",
            "D. Using the @Service decorator"
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        },
        {
          "id": "q4",
          "question": "What is a module in Angular?",
          "options": [
            "A. A collection of components, directives, and services.",
            "B. A function that handles routing.",
            "C. A core Angular directive.",
            "D. A built-in utility for debugging."
          ],
          "correctAnswer": "A",
          "timeLimit": 10
        },
        {
          "id": "q5",
          "question": "Which command is used to create a new Angular project?",
          "options": [
            "A. ng create",
            "B. ng new",
            "C. ng start",
            "D. ng generate"
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        },
        {
          "id": "q6",
          "question": "What is the purpose of Angular services?",
          "options": [
            "A. To fetch data from APIs",
            "B. To provide shared functionality to components",
            "C. To manage state",
            "D. To handle user authentication"
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        },
        {
          "id": "q7",
          "question": "What is Angular CLI?",
          "options": [
            "A. A command-line interface to interact with Angular applications",
            "B. A tool to render Angular components",
            "C. A built-in debugger for Angular",
            "D. A template engine for HTML files"
          ],
          "correctAnswer": "A",
          "timeLimit": 10
        },
        {
          "id": "q8",
          "question": "What is the purpose of @Input in Angular?",
          "options": [
            "A. To bind data from a parent component",
            "B. To handle user input events",
            "C. To create child components",
            "D. To output data to a template"
          ],
          "correctAnswer": "A",
          "timeLimit": 10
        },
        {
          "id": "q9",
          "question": "What is two-way data binding in Angular?",
          "options": [
            "A. Binding from the model to the view",
            "B. Binding data between parent and child components",
            "C. Synchronizing data between the model and view",
            "D. One-way binding from the component to the DOM"
          ],
          "correctAnswer": "C",
          "timeLimit": 10
        },
        {
          "id": "q10",
          "question": "What is a directive in Angular?",
          "options": [
            "A. A tool to handle API calls",
            "B. A service for fetching data",
            "C. A feature for modifying the DOM",
            "D. A built-in debugging tool"
          ],
          "correctAnswer": "C",
          "timeLimit": 10
        }
      ]
    },
    {
      "id": "flutter_basics",
      "name": "Flutter Basics",
      "questions": [
        {
          "id": "q1",
          "question": "What is Flutter?",
          "options": [
            "A. A web development framework",
            "B. A cross-platform mobile development framework",
            "C. A tool for backend development",
            "D. A frontend CSS library"
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        },
        {
          "id": "q2",
          "question": "What programming language is used to write Flutter apps?",
          "options": [
            "A. JavaScript",
            "B. Swift",
            "C. Dart",
            "D. Kotlin"
          ],
          "correctAnswer": "C",
          "timeLimit": 10
        },
        {
          "id": "q3",
          "question": "What is a widget in Flutter?",
          "options": [
            "A. A basic building block of the Flutter UI",
            "B. A library for managing state",
            "C. A tool for handling HTTP requests",
            "D. A debugging tool for the app"
          ],
          "correctAnswer": "A",
          "timeLimit": 10
        },
        {
          "id": "q4",
          "question": "Which of the following is a valid Flutter widget?",
          "options": [
            "A. TextView",
            "B. TextField",
            "C. TextInput",
            "D. InputView"
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        },
        {
          "id": "q5",
          "question": "What is the purpose of setState in Flutter?",
          "options": [
            "A. To manage app-wide state",
            "B. To update the UI when a variable's value changes",
            "C. To handle API calls",
            "D. To render new screens"
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        },
        {
          "id": "q6",
          "question": "Which command is used to create a new Flutter project?",
          "options": [
            "A. flutter new",
            "B. flutter create",
            "C. flutter start",
            "D. flutter generate"
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        },
        {
          "id": "q7",
          "question": "What is hot reload in Flutter?",
          "options": [
            "A. A feature to restart the app automatically",
            "B. A tool to recompile the code without losing the app state",
            "C. A debugger to trace errors",
            "D. A method for deploying the app faster"
          ],
          "correctAnswer": "B",
          "timeLimit": 10
        },
        {
          "id": "q8",
          "question": "Which widget is used for layout in Flutter?",
          "options": [
            "A. Text",
            "B. Scaffold",
            "C. Container",
            "D. Button"
          ],
          "correctAnswer": "C",
          "timeLimit": 10
        },
        {
          "id": "q9",
          "question": "What is the purpose of pubspec.yaml file in Flutter?",
          "options": [
            "A. To declare app dependencies",
            "B. To configure the app's database",
            "C. To set up network requests",
            "D. To manage routing in the app"
          ],
          "correctAnswer": "A",
          "timeLimit": 10
        },
        {
          "id": "q10",
          "question": "Which tool is used to run Flutter apps on emulators?",
          "options": [
            "A. Android Studio",
            "B. Flutter Studio",
            "C. Xcode",
            "D. Visual Studio"
          ],
          "correctAnswer": "A",
          "timeLimit": 10
        }
      ]
    }
  ]
}


  export default data