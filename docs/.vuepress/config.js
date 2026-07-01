import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { buildSidebar } from "./sidebar.js";

const docsDir = join(dirname(fileURLToPath(import.meta.url)), "..");

export default defineUserConfig({
  lang: "en-US",
  base: "/",
  title: "HyunSang's Today I Learned",
  description: "Cyber Security, Software Engineering, and Law",

  theme: defaultTheme({
    logo: null,
    navbar: [],
    sidebar: buildSidebar(docsDir),
  }),

  bundler: viteBundler(),
});
