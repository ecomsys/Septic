/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{js,css,html,hbs}"],

  theme: {
    // Брейкпоинты из Figma
    screens: {
      xs: "20rem", // React/xs_320
      xsx: "23.4375rem", // React/xsx_375
      sm: "25.625rem", // React/sm_410
      smm: "26.6rem",
      smx: "40rem", // React/smx_640
      mds: "48rem", // React/mds_768
      md: "62.5rem", // React/md_1000
      mdx: "80rem", // React/mdx_1280
      lg: "90rem", // React/lg_1440
      xl: "100rem", // React/xl_1600
      xxl: "120rem", // React/xxl_1920
    },

    // ===== Толщина шрифтов =====
    fontWeight: {
      light: 300, // weight/light
      regular: 400, // weight/regular
      medium: 500, // weight/medium
      semibold: 600, // weight/semibold
      bold: 700, // weight/bold
    },

    extend: {
      // ===== Шрифты =====
      fontFamily: {
        title: ["Unbounded", "sans-serif"], // family/Title
        subtitle: ["Unbounded", "sans-serif"], // family/subtitle
        body: ["Open Sans", "sans-serif"], // family/Body (Desktop)
        // "body-tablet": ["Nunito", "sans-serif"], // family/Body (Tablet/Mobile)
        open: ["Open Sans", "sans-serif"],
        unbounded: ["Unbounded", "sans-serif"],
        // nunito: ["Nunito", "sans-serif"],
        gilroy: ["Gilroy", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        geometria: ["Geometria", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        abel: ["Abel", "sans-serif"],
        helvetica: ["Helvetica", "sans-serif"],
      },

      // ===== Размеры шрифтов (адаптивные) =====
      // fontSize: {
      //   h0: [
      //     "clamp(1.75rem, 5vw, 3.25rem)",
      //     {
      //       // size/h0: 52(D) 42(T) 28(M)
      //       fontWeight: "700",
      //       lineHeight: "1.2",
      //     },
      //   ],
      //   h1: [
      //     "clamp(1.5rem, 5vw, 2.625rem)",
      //     {
      //       // size/h1: 42(D) 28(T) 24(M)
      //       fontWeight: "700",
      //       lineHeight: "1.6",
      //     },
      //   ],
      //   h2: [
      //     "clamp(1.125rem, 4vw, 2rem)",
      //     {
      //       // size/h2: 32(D) 24(T) 18(M)
      //       fontWeight: "800",
      //       lineHeight: "1.6",
      //     },
      //   ],
      //   h3: [
      //     "clamp(1rem, 3.5vw, 1.75rem)",
      //     {
      //       // size/h3: 28(D) 20(T) 16(M)
      //       fontWeight: "600",
      //       lineHeight: "1.6",
      //     },
      //   ],
      //   h4: [
      //     "clamp(0.875rem, 3vw, 1.25rem)",
      //     {
      //       // size/h4: 20(D) 16(T) 14(M)
      //       fontWeight: "600",
      //       lineHeight: "1.6",
      //     },
      //   ],
      //   h5: [
      //     "0.875rem",
      //     {
      //       // size/h5: 16(D) 14(T) 14(M)
      //       fontWeight: "600",
      //       lineHeight: "1.6",
      //     },
      //   ],
      //   h6: [
      //     "0.75rem",
      //     {
      //       // size/h6: все 12
      //       fontWeight: "600",
      //       lineHeight: "1.6",
      //     },
      //   ],
      //   "body-large": [
      //     "clamp(1rem, 2.5vw, 1.125rem)",
      //     {
      //       // size/bodylarge: 18(D) 18(T) 16(M)
      //       fontWeight: "400",
      //       lineHeight: "1.6",
      //     },
      //   ],
      //   body: [
      //     "clamp(0.875rem, 2vw, 1rem)",
      //     {
      //       // size/body: 16(D) 14(T) 14(M)
      //       fontWeight: "400",
      //       lineHeight: "1.6",
      //     },
      //   ],
      //   "body-small": [
      //     "clamp(0.75rem, 1.8vw, 0.875rem)",
      //     {
      //       // size/bodysmall: 14(D) 14(T) 12(M)
      //       fontWeight: "400",
      //       lineHeight: "1.6",
      //     },
      //   ],
      //   caption: [
      //     "0.75rem",
      //     {
      //       // size/caption: все 12
      //       fontWeight: "400",
      //       lineHeight: "1.4",
      //     },
      //   ],
      // },

      // ===== Отступы (адаптивные через clamp) =====
      spacing: {
        // Padding системные
        "pad-0": "0rem",
        "pad-2": "0.125rem",
        "pad-4": "clamp(0.125rem, 1vw, 0.25rem)", // 4(D) 4(T) 2(M)
        "pad-8": "clamp(0.25rem, 1.5vw, 0.5rem)", // 8(D) 4(T) 4(M)
        "pad-16": "clamp(0.375rem, 2vw, 1rem)", // 16(D) 8(T) 6(M)
        "pad-24": "clamp(0.5rem, 2.5vw, 1.5rem)", // 24(D) 16(T) 8(M)
        "pad-32": "clamp(0.75rem, 3.5vw, 2rem)", // 32(D) 18(T) 12(M)
        "pad-40": "clamp(1rem, 4vw, 2.5rem)", // 40(D) 20(T) 16(M)
        "pad-48": "clamp(1.25rem, 4.5vw, 3rem)", // 48(D) 24(T) 20(M)
        "pad-56": "clamp(1.5rem, 5vw, 3.5rem)", // 56(D) 32(T) 24(M)
        "pad-64": "clamp(1.75rem, 5.5vw, 4rem)", // 64(D) 36(T) 28(M)
        "pad-72": "clamp(2rem, 6vw, 4.5rem)", // 72(D) 40(T) 32(M)
        "pad-80": "clamp(2.25rem, 6.5vw, 5rem)", // 80(D) 42(T) 36(M)
        "pad-88": "clamp(2.375rem, 7vw, 5.5rem)", // 88(D) 48(T) 38(M)
        "pad-96": "clamp(2.5rem, 7.5vw, 6rem)", // 96(D) 56(T) 40(M)
        "pad-100": "clamp(2.625rem, 8vw, 6.25rem)", // 100(D) 64(T) 42(M)
        "pad-120": "clamp(3rem, 9vw, 7.5rem)", // 120(D) 80(T) 48(M)

        // Секционные отступы
        "section-48": "clamp(0.875rem, 4vw, 3rem)", // 48(D) 32(T) 14(M)
        "section-64": "clamp(1.125rem, 5vw, 4rem)", // 64(D) 40(T) 18(M)
        "section-80": "clamp(1.5rem, 6vw, 5rem)", // 80(D) 46(T) 24(M)
        "section-100": "clamp(2.625rem, 7vw, 6.25rem)", // 100(D) 56(T) 42(M)
        "section-120": "clamp(2.5rem, 8vw, 7.5rem)", // 120(D) 62(T) 40(M)

        // Основной отступ wrapper
        wrapper: "clamp(1.1875rem, 5vw, 7.5rem)", // 120(D) 26(T) 19(M)
      },

      // ===== Скругления =====
      borderRadius: {
        small: "clamp(0.125rem, 1vw, 0.25rem)", // corner small: 4(D) 4(T) 2(M)
        middle: "0.5rem", // corner middle: все 8       
      },

      // ===== Цвета (из Figma) =====
      colors: {
        opposite: "#f8fafc",
        light: {
          base: "#171717",
          secondary: "#525252",
          tertiary: "#737373",
          disable: "#A3A3A3",
          placeholder: "#D4D4D4",
        },

        dark: {
          base: "#FAFAFA",
          secondary: "#F5F5F5",
          tertiary: "#E5E5E5",
          disable: "#D4D4D4",
          placeholder: "#A3A3A3",
        },

        bg: {
          base: "#F5F5F5",
          light: "#FAFAFA",
          darker: "#737373",
          darkest: "#171717",
          color1: "#F7FEE7",
          color2: "#EFF6FF",
          color3: "#F0FDFA",
          color4: "#FAF5FF",
          color5: "#F7FEE7",
        },

        black: "var(--black)",
        white: "#FFFFFF",

        // Иконки
        icon: {
          fill: {
            DEFAULT: "#FFFFFF",
            opposite: "#000000",
            middle: "#A3A3A3",
          },
          stroke: {
            DEFAULT: "#FFFFFF",
            opposite: "#000000",
            middle: "#9CA3AF",
          },
        },

        // Границы
        bd: {
          light: "#F5F5F5",
          base: "#E5E5E5",
          dark: "#A3A3A3",
          hover: "#737373",
          active: "#525252",
        },

        // Системные
        system: {
          error: "#DC2626",
          success: "#16A34A",
          warning: "#FBBF24",
          info: "#2563EB",
          disable: "#A3A3A3",
        },

        // Акценты
        primary: {
          DEFAULT: "#84CC16",
          hover: "#A3E635",
          active: "#65A30D",
          disable: "#D9F99D",
          lightest: "#BEF264",
        },
        secondary: {
          DEFAULT: "#3B82F6",
          hover: "#60A5FA",
          active: "#2563EB",
          disable: "#BFDBFE",
          lightest: "#93C5FD",
        },

        // Бренд
        brand: {
          main: {
            DEFAULT: "#84CC16",
            lightest: "#BEF264",
            lighter: "#A3E635",
            darker: "#65A30D",
            darkest: "#4D7C0F",
          },

          one: {
            DEFAULT: "#3B82F6",
            lightest: "#93C5FD",
            lighter: "#60A5FA",
            darker: "#2563EB",
            darkest: "#1D4ED8",
          },

          two: {
            DEFAULT: "#14B8A6",
            lightest: "#5EEAD4",
            lighter: "#2DD4BF",
            darker: "#0D9488",
            darkest: "#0F766E",
          },

          three: {
            DEFAULT: "#A855F7",
            lightest: "#D8B4FE",
            lighter: "#C084FC",
            darker: "#9333EA",
            darkest: "#7E22CE",
          },
        },

        // Стандартные цвета Tailwind (оставляем как есть)
        slate: {
          50: "var(--slate-50)",
          100: "var(--slate-100)",
          200: "var(--slate-200)",
          300: "var(--slate-300)",
          400: "var(--slate-400)",
          500: "var(--slate-500)",
          600: "var(--slate-600)",
          700: "var(--slate-700)",
          800: "var(--slate-800)",
          900: "var(--slate-900)",
          950: "var(--slate-950)",
        },
        gray: {
          50: "var(--gray-50)",
          100: "var(--gray-100)",
          200: "var(--gray-200)",
          300: "var(--gray-300)",
          400: "var(--gray-400)",
          500: "var(--gray-500)",
          600: "var(--gray-600)",
          700: "var(--gray-700)",
          800: "var(--gray-800)",
          900: "var(--gray-900)",
          950: "var(--gray-950)",
        },
        zinc: {
          50: "var(--zinc-50)",
          100: "var(--zinc-100)",
          200: "var(--zinc-200)",
          300: "var(--zinc-300)",
          400: "var(--zinc-400)",
          500: "var(--zinc-500)",
          600: "var(--zinc-600)",
          700: "var(--zinc-700)",
          800: "var(--zinc-800)",
          900: "var(--zinc-900)",
          950: "var(--zinc-950)",
        },
        neutral: {
          50: "var(--neutral-50)",
          100: "var(--neutral-100)",
          200: "var(--neutral-200)",
          300: "var(--neutral-300)",
          400: "var(--neutral-400)",
          500: "var(--neutral-500)",
          600: "var(--neutral-600)",
          700: "var(--neutral-700)",
          800: "var(--neutral-800)",
          900: "var(--neutral-900)",
          950: "var(--neutral-950)",
        },
        stone: {
          50: "var(--stone-50)",
          100: "var(--stone-100)",
          200: "var(--stone-200)",
          300: "var(--stone-300)",
          400: "var(--stone-400)",
          500: "var(--stone-500)",
          600: "var(--stone-600)",
          700: "var(--stone-700)",
          800: "var(--stone-800)",
          900: "var(--stone-900)",
          950: "var(--stone-950)",
        },
        red: {
          50: "var(--red-50)",
          100: "var(--red-100)",
          200: "var(--red-200)",
          300: "var(--red-300)",
          400: "var(--red-400)",
          500: "var(--red-500)",
          600: "var(--red-600)",
          700: "var(--red-700)",
          800: "var(--red-800)",
          900: "var(--red-900)",
          950: "var(--red-950)",
        },
        orange: {
          50: "var(--orange-50)",
          100: "var(--orange-100)",
          200: "var(--orange-200)",
          300: "var(--orange-300)",
          400: "var(--orange-400)",
          500: "var(--orange-500)",
          600: "var(--orange-600)",
          700: "var(--orange-700)",
          800: "var(--orange-800)",
          900: "var(--orange-900)",
          950: "var(--orange-950)",
        },
        amber: {
          50: "var(--amber-50)",
          100: "var(--amber-100)",
          200: "var(--amber-200)",
          300: "var(--amber-300)",
          400: "var(--amber-400)",
          500: "var(--amber-500)",
          600: "var(--amber-600)",
          700: "var(--amber-700)",
          800: "var(--amber-800)",
          900: "var(--amber-900)",
          950: "var(--amber-950)",
        },
        yellow: {
          50: "var(--yellow-50)",
          100: "var(--yellow-100)",
          200: "var(--yellow-200)",
          300: "var(--yellow-300)",
          400: "var(--yellow-400)",
          500: "var(--yellow-500)",
          600: "var(--yellow-600)",
          700: "var(--yellow-700)",
          800: "var(--yellow-800)",
          900: "var(--yellow-900)",
          950: "var(--yellow-950)",
        },
        lime: {
          50: "var(--lime-50)",
          100: "var(--lime-100)",
          200: "var(--lime-200)",
          300: "var(--lime-300)",
          400: "var(--lime-400)",
          500: "var(--lime-500)",
          600: "var(--lime-600)",
          700: "var(--lime-700)",
          800: "var(--lime-800)",
          900: "var(--lime-900)",
          950: "var(--lime-950)",
        },
        green: {
          50: "var(--green-50)",
          100: "var(--green-100)",
          200: "var(--green-200)",
          300: "var(--green-300)",
          400: "var(--green-400)",
          500: "var(--green-500)",
          600: "var(--green-600)",
          700: "var(--green-700)",
          800: "var(--green-800)",
          900: "var(--green-900)",
          950: "var(--green-950)",
        },
        emerald: {
          50: "var(--emerald-50)",
          100: "var(--emerald-100)",
          200: "var(--emerald-200)",
          300: "var(--emerald-300)",
          400: "var(--emerald-400)",
          500: "var(--emerald-500)",
          600: "var(--emerald-600)",
          700: "var(--emerald-700)",
          800: "var(--emerald-800)",
          900: "var(--emerald-900)",
          950: "var(--emerald-950)",
        },
        teal: {
          50: "var(--teal-50)",
          100: "var(--teal-100)",
          200: "var(--teal-200)",
          300: "var(--teal-300)",
          400: "var(--teal-400)",
          500: "var(--teal-500)",
          600: "var(--teal-600)",
          700: "var(--teal-700)",
          800: "var(--teal-800)",
          900: "var(--teal-900)",
          950: "var(--teal-950)",
        },
        cyan: {
          50: "var(--cyan-50)",
          100: "var(--cyan-100)",
          200: "var(--cyan-200)",
          300: "var(--cyan-300)",
          400: "var(--cyan-400)",
          500: "var(--cyan-500)",
          600: "var(--cyan-600)",
          700: "var(--cyan-700)",
          800: "var(--cyan-800)",
          900: "var(--cyan-900)",
          950: "var(--cyan-950)",
        },
        sky: {
          50: "var(--sky-50)",
          100: "var(--sky-100)",
          200: "var(--sky-200)",
          300: "var(--sky-300)",
          400: "var(--sky-400)",
          500: "var(--sky-500)",
          600: "var(--sky-600)",
          700: "var(--sky-700)",
          800: "var(--sky-800)",
          900: "var(--sky-900)",
          950: "var(--sky-950)",
        },
        blue: {
          50: "var(--blue-50)",
          100: "var(--blue-100)",
          200: "var(--blue-200)",
          300: "var(--blue-300)",
          400: "var(--blue-400)",
          500: "var(--blue-500)",
          600: "var(--blue-600)",
          700: "var(--blue-700)",
          800: "var(--blue-800)",
          900: "var(--blue-900)",
          950: "var(--blue-950)",
        },
        indigo: {
          50: "var(--indigo-50)",
          100: "var(--indigo-100)",
          200: "var(--indigo-200)",
          300: "var(--indigo-300)",
          400: "var(--indigo-400)",
          500: "var(--indigo-500)",
          600: "var(--indigo-600)",
          700: "var(--indigo-700)",
          800: "var(--indigo-800)",
          900: "var(--indigo-900)",
          950: "var(--indigo-950)",
        },
        violet: {
          50: "var(--violet-50)",
          100: "var(--violet-100)",
          200: "var(--violet-200)",
          300: "var(--violet-300)",
          400: "var(--violet-400)",
          500: "var(--violet-500)",
          600: "var(--violet-600)",
          700: "var(--violet-700)",
          800: "var(--violet-800)",
          900: "var(--violet-900)",
          950: "var(--violet-950)",
        },
        purple: {
          50: "var(--purple-50)",
          100: "var(--purple-100)",
          200: "var(--purple-200)",
          300: "var(--purple-300)",
          400: "var(--purple-400)",
          500: "var(--purple-500)",
          600: "var(--purple-600)",
          700: "var(--purple-700)",
          800: "var(--purple-800)",
          900: "var(--purple-900)",
          950: "var(--purple-950)",
        },
        fuchsia: {
          50: "var(--fuchsia-50)",
          100: "var(--fuchsia-100)",
          200: "var(--fuchsia-200)",
          300: "var(--fuchsia-300)",
          400: "var(--fuchsia-400)",
          500: "var(--fuchsia-500)",
          600: "var(--fuchsia-600)",
          700: "var(--fuchsia-700)",
          800: "var(--fuchsia-800)",
          900: "var(--fuchsia-900)",
          950: "var(--fuchsia-950)",
        },
        pink: {
          50: "var(--pink-50)",
          100: "var(--pink-100)",
          200: "var(--pink-200)",
          300: "var(--pink-300)",
          400: "var(--pink-400)",
          500: "var(--pink-500)",
          600: "var(--pink-600)",
          700: "var(--pink-700)",
          800: "var(--pink-800)",
          900: "var(--pink-900)",
          950: "var(--pink-950)",
        },
        rose: {
          50: "var(--rose-50)",
          100: "var(--rose-100)",
          200: "var(--rose-200)",
          300: "var(--rose-300)",
          400: "var(--rose-400)",
          500: "var(--rose-500)",
          600: "var(--rose-600)",
          700: "var(--rose-700)",
          800: "var(--rose-800)",
          900: "var(--rose-900)",
          950: "var(--rose-950)",
        },
      },
    },
  },

  plugins: [],
};
