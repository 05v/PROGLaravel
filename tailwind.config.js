const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
        colors: ({ colors }) => ({
            inherit: colors.inherit,
            current: colors.current,
            transparent: colors.transparent,
            black: colors.black,
            white: colors.white,
            slate: colors.slate,
            gray: colors.gray,
            zinc: colors.zinc,
            neutral: colors.neutral,
            stone: colors.stone,
            red: colors.red,
            orange: colors.orange,
            amber: colors.amber,
            yellow: colors.yellow,
            lime: colors.lime,
            green: colors.green,
            emerald: colors.emerald,
            teal: colors.teal,
            cyan: colors.cyan,
            sky: colors.sky,
            blue: colors.blue,
            indigo: colors.indigo,
            violet: colors.violet,
            purple: colors.purple,
            fuchsia: colors.fuchsia,
            pink: colors.pink,
            rose: colors.rose,
        }),
        spacing: {
            px: "1px",
            0: "0px",
            0.5: "0.125rem",
            1: "0.25rem",
            1.5: "0.375rem",
            2: "0.5rem",
            2.5: "0.625rem",
            3: "0.75rem",
            3.5: "0.875rem",
            4: "1rem",
            5: "1.25rem",
            6: "1.5rem",
            7: "1.75rem",
            8: "2rem",
            9: "2.25rem",
            10: "2.5rem",
            11: "2.75rem",
            12: "3rem",
            14: "3.5rem",
            16: "4rem",
            20: "5rem",
            24: "6rem",
            28: "7rem",
            32: "8rem",
            36: "9rem",
            40: "10rem",
            44: "11rem",
            48: "12rem",
            52: "13rem",
            56: "14rem",
            60: "15rem",
            64: "16rem",
            72: "18rem",
            80: "20rem",
            96: "24rem",
        },
        backgroundSize: {
            auto: "auto",
            cover: "cover",
            contain: "contain",
        },
        cursor: {
            auto: "auto",
            default: "default",
            pointer: "pointer",
            wait: "wait",
            text: "text",
            move: "move",
            help: "help",
            "not-allowed": "not-allowed",
            none: "none",
            "context-menu": "context-menu",
            progress: "progress",
            cell: "cell",
            crosshair: "crosshair",
            "vertical-text": "vertical-text",
            alias: "alias",
            copy: "copy",
            "no-drop": "no-drop",
            grab: "grab",
            grabbing: "grabbing",
            "all-scroll": "all-scroll",
            "col-resize": "col-resize",
            "row-resize": "row-resize",
            "n-resize": "n-resize",
            "e-resize": "e-resize",
            "s-resize": "s-resize",
            "w-resize": "w-resize",
            "ne-resize": "ne-resize",
            "nw-resize": "nw-resize",
            "se-resize": "se-resize",
            "sw-resize": "sw-resize",
            "ew-resize": "ew-resize",
            "ns-resize": "ns-resize",
            "nesw-resize": "nesw-resize",
            "nwse-resize": "nwse-resize",
            "zoom-in": "zoom-in",
            "zoom-out": "zoom-out",
        },
        fontSize: {
            xs: ["0.75rem", { lineHeight: "1rem" }],
            sm: ["0.875rem", { lineHeight: "1.25rem" }],
            base: ["1rem", { lineHeight: "1.5rem" }],
            lg: ["1.125rem", { lineHeight: "1.75rem" }],
            xl: ["1.25rem", { lineHeight: "1.75rem" }],
            "2xl": ["1.5rem", { lineHeight: "2rem" }],
            "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
            "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
            "5xl": ["3rem", { lineHeight: "1" }],
            "6xl": ["3.75rem", { lineHeight: "1" }],
            "7xl": ["4.5rem", { lineHeight: "1" }],
            "8xl": ["6rem", { lineHeight: "1" }],
            "9xl": ["8rem", { lineHeight: "1" }],
        },
        fontWeight: {
            thin: "100",
            extralight: "200",
            light: "300",
            normal: "400",
            medium: "500",
            semibold: "600",
            bold: "700",
            extrabold: "800",
            black: "900",
        },
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
