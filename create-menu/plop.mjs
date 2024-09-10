import { menuRegister } from "./dist/main.js";

export default async function (
  /* @type import("plop").NodePlopApi */
  plop,
) {
  const menu = await menuRegister();
  if (!menu) {
    throw new Error("failed generated menu");
  }

  plop.setHelper("routes", () =>
    JSON.stringify(
      menu.map((m) => {
        return {
          path: m.path,
          component: {
            template: `<div>${m.label}</div>`,
          },
        };
      }),
      null,
      2,
    ),
  );
  plop.setHelper("menu", () => JSON.stringify(menu, null, 2));

  plop.setGenerator("menu", {
    description: "Generate a Menu",
    prompts: [],
    actions: [
      {
        type: "add",
        path: "../src/assets/routes.json",
        templateFile: "./templates/route.json.hbs",
        force: true,
      },
      {
        type: "add",
        path: "../src/assets/menu.json",
        templateFile: "./templates/menu.json.hbs",
        force: true,
      },
    ],
  });
}
