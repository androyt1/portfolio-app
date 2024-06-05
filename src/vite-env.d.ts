/// <reference types="vite/client" />
type LinkProps = {
    id: number;
    label: string;
    href: string;
};

type Theme = "light" | "dark";

type ThemeContextProp = {
    theme: Theme;
    toggleTheme: () => void;
};

type ThemeProviderProp = {
    children: ReactNode;
};
