export default function (plop) {
  plop.setHelper("kebab", (str) => {
    return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  });
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
        type: "confirm",
        name: "hasStarterClass",
        message: "do you want a starter class?",
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
