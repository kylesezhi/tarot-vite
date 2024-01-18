export default function (plop) {
  plop.setGenerator("component", {
    description: "generate a component or container",
    prompts: [
      {
        type: "list",
        name: "type",
        choices: ["component", "container"],
        message: "what are you making?",
      },
      {
        type: "confirm",
        name: "hasPropInterface",
        message: "do you want a props interface?",
      },
      {
        type: "input",
        name: "name",
        message: "name in CamelCase:",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/{{type}}s/{{name}}/{{name}}.tsx",
        templateFile: "plop-templates/tsx.hbs",
      },
      {
        type: "add",
        path: "src/{{type}}s/{{name}}/{{name}}.css",
        templateFile: "plop-templates/css.hbs",
      },
    ],
  });
}
