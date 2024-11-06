/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      // 斷點的左右間距
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '1rem',
        xl: '0rem',
      },
    },
    //尺寸斷點及容器寬度
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1320px",
    },
    fontFamily:{
      'body':"SF Pro TC",
    },
    fontSize: {
      "display-1": [
        "96px",
        {
          lineHeight: "120%",
          letterSpacing: "-0.25px",
        },
      ],
      "display-2": [
        "48px",
        {
          lineHeight: "52px",
        },
      ],
      "display-3": [
        "36px",
        {
          lineHeight: "44px",
        },
      ],
      "headline-1": [
        "32px",
        {
          lineHeight: "40px",
        },
      ],
      "headline-2": [
        "28px",
        {
          lineHeight: "36px",
        },
      ],
      "headline-3": [
        "24px",
        {
          lineHeight: "32px",
        },
      ],
      "title-1": [
        "22px",
        {
          lineHeight: "28px",
        },
      ],
      "title-2": [
        "16px",
        {
          lineHeight: "24px",
        },
      ],
      "title-3": [
        "14px",
        {
          lineHeight: "20px",
        },
      ],
      "body-1": [
        "16px",
        {
          lineHeight: "24px",
        },
      ],
      "body-2": [
        "14px",
        {
          lineHeight: "20px",
        },
      ],
      "body-3": [
        "12px",
        {
          lineHeight: "16px",
        },
      ],
      "label-1": [
        "14px",
        {
          lineHeight: "16px",
        },
      ],
      "label-2": [
        "12px",
        {
          lineHeight: "16px",
        },
      ],
      "label-3": [
        "11px",
        {
          lineHeight: "16px",
        },
      ],
    },
    colors: {
      transparent:{
        DEFAULT: "transparent",
      },
      primary: {
        DEFAULT: "rgb(var(--color-primary))",
        on: "rgb(var(--color-on-primary))",
        container: "rgb(var(--color-primary-container))",
        "inverse": "rgb(var(--color-inverse-primary))",
        "on-container": "rgb(var(--color-on-primary-container))",
        "state-opacity-.12": "rgb(var(--color-primary-opacity-012))",
      },
      secondary: {
        DEFAULT: "rgb(var(--color-secondary))",
        on: "rgb(var(--color-on-secondary))",
      },
      background: {
        DEFAULT: "rgb(var(--color-background))",
        on: "rgb(var(--color-on-background))",
      },
      surface: {
        DEFAULT: "rgb(var(--color-surface))",
        on: "rgb(var(--color-on-surface))",
        'inverse': "rgb(var(--color-inverse-surface))",
        'on-inverse': "rgb(var(--color-on-inverse-surface))",
        'on-variant': "rgb(var(--color-on-surface-variant))",
      },
      outline: {
        DEFAULT: "rgb(var(--color-outline))",
        'variant': "rgb(var(--color-outline-variant))",
      },
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.625rem",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
    },
    dropShadow: {
      1: [
        "0px 2px 6px 2px rgba(0, 0, 0, 0.15)",
        "0px 1px 2px 0px rgba(0, 0, 0, 0.3)",
      ],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
