/* prompts for generator app*/
const common_prompts = function () {
  return [
    {
      "type": "input",
      "name": "appName",
      "message": "Your project name",
      default: this.appname
    },
    {
      "type": "input",
      "name": "author",
      "message": "author"
    },
    {
      "type": "input",
      "name": "description",
      "message": "description",
      default: "simple use with react+webpack"
    },
    {
      "type": "list",
      "name": "mvvmFrame",
      "message": "Which frame do you want?",
      "choices": [
        {
          "value": {
            "key": "react",
            "extension": "react"
          },
          "name": "React"
        },
        {
          "value": {
            "key": "vue",
            "extension": "vue"
          },
          "name": "Vue"
        }
      ]
    }
  ];
};

const react_prompts = [
  {
    "type": "list",
    "name": "cssPreprocessor",
    "message": "Which CSS preprocessor do you want?",
    "choices": [
      {
        "value": {
          "key": "node-sass",
          "extension": "scss"
        },
        "name": "Sass (Node), Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass."
      },
      {
        "value": {
          "key": "less",
          "extension": "less"
        },
        "name": "Less, extends the CSS language, adding features that allow variables, mixins, functions and many other techniques."
      },
      {
        "value": {
          "key": "stylus",
          "extension": "style"
        },
        "name": "Stylus, supporting both an indented syntax and regular CSS style."
      },
      {
        "value": {
          "key": "noCssPrepro",
          "extension": "css"
        },
        "name": "None, only the good old CSS"
      }
    ]
  },
  {
    "type": "checkbox",
    "name": "pluginSelect",
    "message": "Which Plugin do you want? use space button add",
    "choices": ['redux', 'jest']
  },
  {
    type: "confirm",
    name: "isInstallDev",
    message: "is install dependencies now?",
    default: false
  }
];

const vue_prompts = [
  {
    "type": "list",
    "name": "cssPreprocessor",
    "message": "Which CSS preprocessor do you want?",
    "choices": [
      {
        "value": {
          "key": "node-sass",
          "extension": "scss"
        },
        "name": "Sass (Node), Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass."
      },
      {
        "value": {
          "key": "less",
          "extension": "less"
        },
        "name": "Less, extends the CSS language, adding features that allow variables, mixins, functions and many other techniques."
      },
      {
        "value": {
          "key": "stylus",
          "extension": "style"
        },
        "name": "Stylus, supporting both an indented syntax and regular CSS style."
      },
      {
        "value": {
          "key": "noCssPrepro",
          "extension": "css"
        },
        "name": "None, only the good old CSS"
      }
    ]
  }
];

module.exports = {
  common_prompts: common_prompts,
  react_prompts: react_prompts,
  vue_prompts: vue_prompts
};
