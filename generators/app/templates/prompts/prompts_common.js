/* prompts for generator app*/
module.exports = function(){
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
      "message": "author",
    },
    {
      "type": "input",
      "name": "description",
      "message": "description",
      default: "simple use with react+webpack"
    }
  ];
}
