export interface VendorSkillMeta {
  official?: boolean;
  source: string;
  skills: Record<string, string>; // sourceSkillName -> outputSkillName
}

/**
 * Repositories to clone as submodules and generate skills from source
 */
export const submodules = {
  vue: "https://github.com/vuejs/docs",
  nuxt: "https://github.com/nuxt/nuxt",
  vite: "https://github.com/vitejs/vite",
  unocss: "https://github.com/unocss/unocss",
  pnpm: "https://github.com/pnpm/pnpm.io",
  pinia: "https://github.com/vuejs/pinia",
  vitest: "https://github.com/vitest-dev/vitest",
  "vitepress": "https://github.com/vuejs/vitepress",
  "boot-nextjs": "https://github.com/kirklin/boot-nextjs",
  "boot-electron": "https://github.com/kirklin/boot-electron",
  "boot-react-native": "https://github.com/kirklin/boot-react-native",
  "boot-vue": "https://github.com/kirklin/boot-vue",
  "boot-backend-go-clean": "https://github.com/kirklin/boot-backend-go-clean",
  "boot-ts": "https://github.com/kirklin/boot-ts",
  "boot-taro-react": "https://github.com/kirklin/boot-taro-react",
  "boot-ink": "https://github.com/kirklin/boot-ink",
  "boot-lynx": "https://github.com/kirklin/boot-lynx",
  "boot-mcp": "https://github.com/kirklin/boot-mcp",
  "boot-webext": "https://github.com/kirklin/boot-webext",
  "boot-unplugin": "https://github.com/kirklin/boot-unplugin",
  "boot-flask": "https://github.com/kirklin/boot-flask",
  "boot-vant": "https://github.com/kirklin/boot-vant",
  "boot-slidev": "https://github.com/kirklin/boot-slidev",
  "boot-nuxt3": "https://github.com/kirklin/boot-nuxt3",
  "boot-react": "https://github.com/kirklin/boot-react",
};

/**
 * Already generated skills, sync with their `skills/` directory
 */
export const vendors: Record<string, VendorSkillMeta> = {
  "slidev": {
    official: true,
    source: "https://github.com/slidevjs/slidev",
    skills: {
      slidev: "slidev",
    },
  },
  "vueuse": {
    official: true,
    source: "https://github.com/vueuse/skills",
    skills: {
      "vueuse-functions": "vueuse-functions",
    },
  },
  "tsdown": {
    official: true,
    source: "https://github.com/rolldown/tsdown",
    skills: {
      tsdown: "tsdown",
    },
  },
  "vuejs-ai": {
    source: "https://github.com/vuejs-ai/skills",
    skills: {
      "vue-best-practices": "vue-best-practices",
      "vue-router-best-practices": "vue-router-best-practices",
      "vue-testing-best-practices": "vue-testing-best-practices",
    },
  },
  "turborepo": {
    official: true,
    source: "https://github.com/vercel/turborepo",
    skills: {
      turborepo: "turborepo",
    },
  },
  "web-design-guidelines": {
    source: "https://github.com/vercel-labs/agent-skills",
    skills: {
      "web-design-guidelines": "web-design-guidelines",
    },
  },
};

/**
 * Handwritten skills with Kirk Lin's preferences/tastes/recommendations
 */
export const manual = [
  "kirklin",
];
