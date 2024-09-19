import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      translate: {
        'z-0': 'translateZ(0)',
        'z-10': 'translateZ(10px)',
        'z-20': 'translateZ(20px)',
        'z--10': 'translateZ(-10px)',
        'z--20': 'translateZ(-20px)',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white1: "#181818",
        bgblack: "#1A1A1A",
        bgAsh: "#ECEEEC",
        bTextb: "#141414",
        textO: "#C93F1D",
        smallC: "#767776",
        slideC: "#D4D6D4",
        sBblack: "#050505",
        purplink: "#cf1767",
        whiteNF: "#ffffff80",
        blackIsh: "#000000B3",
        prbg: "#EFEFEF",
        greish: "#FFFFFF59",
        greishh: "#8E8F8E",
        crAsh: "#FFFFFF4D",
        arrowupbg: "#FFFFFFOD",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".w-custom": {
            width: "min(92%, var(--width-grid-max))",
          },
          ".font-ligatures": {
            "font-variant-ligatures": "common-ligatures",
          },
          ".text-rendering-optimize": {
            "text-rendering": "optimizeLegibility",
          },
          '.transform-flat': {
          'transform-style': 'flat',
        },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
export default config;
