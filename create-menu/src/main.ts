import { createMenu } from "./queries/menu";
import { readFileSync } from "fs";

type Menu = {
  label: string;
  path: string;
};

export async function menuRegister() {
  const json = readFileSync("./input.json", "utf8");
  const result = await createMenu({ json });
  if (!result) {
    console.error("failure generated menu");
    return;
  }
  const str = result.json?.toString();
  if (!str) return;
  const menu: Menu[] = JSON.parse(str);

  return menu;
}
