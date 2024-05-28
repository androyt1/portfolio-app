export const skills: string[] = [
    "Responsive Web Design",
    "Test Driven Development",
    "Web Performance Optimization",
    "UI/UX Design Principles",
    "MongoDB",
    "Cross-Browser Compatibility",
    "Experience with AWS",
    "Node/Express Rest Api Developer",
    "HTML5, CSS3, JavaScript (ES6+)",
    "CSS Preprocessors (Sass, Less), Bootstrap, Tailwind CSS",
    "Agile Development Methodologies",
    "Next.js",
    "Typescript",
    "Version Control (Git)",
    "Frontend Frameworks: React",
    "Communication skills",
    "Node.js",
    "Front-End Development",
    "User Interface (UI)",
    "JavaScript",
    "React",
    "Three.js",
    "Chart.js",
    "HTTP verbs",
    "GCP",
];

export const experiences = [
    {
        role: "Fullstack Developer / (Node React) (Contract Role)",
        company: "HSBC Leeds United Kingdom",
        period: "December 2022 to August 2023",
        responsibilities: [
            "Designed, developed, and deployed microservices architecture using Node.js.",
            "Implemented real-time functionality such as live notifications and collaborative editing features using WebSockets and server-sent events.",
            "Integrated RESTful APIs into React applications to enable smooth communication with backend services.",
            "Conducted thorough testing of API endpoints and HTTP requests to ensure reliability, security, and performance.",
            "Documented API usage and endpoints for reference by the development team.",
            "Collaborated with a cross-functional team to create the frontend of the 'Kinisi' application.",
            "Designed and developed user-friendly and responsive web interfaces using React.js.",
            "Implemented interactive data visualization components and dashboards.",
            "Employed state management techniques, including Redux.",
            "Implemented error handling mechanisms to enhance reliability.",
            "Optimized application performance through code splitting, lazy loading, and other techniques.",
            "Participated in code reviews, providing feedback and mentoring junior developers.",
            "Collaborated with the QA team to identify and address frontend-related bugs.",
            "Supported the deployment process by working with the DevOps team to set up CI/CD pipelines.",
        ],
    },
    {
        role: "Freelance Web Developer (Ecommerce)",
        company: "Lagos",
        period: "February 2021 to November 2022",
        responsibilities: [
            "Successfully delivered a diverse range of web projects as a freelance developer.",
            "Developed dynamic and high-performance frontend interfaces for e-commerce websites using Next.js.",
            "Implemented performance optimization techniques to enhance the speed and efficiency of e-commerce websites.",
            "Integrated third-party APIs to streamline business operations.",
            "Created dynamic and responsive user interfaces using modern frontend technologies such as Vue.js and React.",
            "Leveraged Node.js for server-side scripting and real-time functionality.",
            "Integrated and optimized database systems, including MongoDB and MySQL.",
            "Collaborated closely with clients to gather project requirements and provide technical consultations.",
            "Continued professional development by staying up-to-date with industry trends.",
        ],
    },
    {
        role: "Full Stack Web Developer",
        company: "Kobu Innovative Solutions - Delta State, Nigeria",
        period: "January 2016 to January 2020",
        responsibilities: [
            "Implemented dynamic data visualization features using charting libraries such as Chart.js.",
            "Designed and developed user interfaces for e-commerce websites using React.js.",
            "Integrated popular payment gateways (e.g., Stripe, PayPal) into e-commerce websites.",
            "Collaborated with cross-functional teams to conceptualize and implement visual representations of e-commerce data.",
            "Designed and developed multiple e-commerce applications.",
            "Implemented best practices in e-commerce development, including SEO techniques and performance optimization.",
            "Led and contributed to the development of complex web applications using a diverse technology stack.",
            "Mentored junior developers.",
        ],
    },
];

export const projects = [
    {
        name: "E-commerce Website",
        description:
            "A fully functional e-commerce website with features like product listing, cart, checkout, and payment gateway integration.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        link: "https://github.com/yourusername/ecommerce-website",
    },
    {
        name: "Real-time Chat Application",
        description:
            "A real-time chat application with user authentication, message history, and online presence indicators.",
        technologies: ["React", "Node.js", "WebSockets", "MongoDB"],
        link: "https://github.com/yourusername/chat-app",
    },
    {
        name: "Personal Portfolio",
        description:
            "A personal portfolio website to showcase projects, skills, and contact information.",
        technologies: ["React", "TailwindCSS"],
        link: "https://github.com/yourusername/portfolio",
    },
];

type LinkProps = {
    id: number;
    label: string;
    href: string;
};

export const navlinks: LinkProps[] = [
    {
        id: 0,
        label: "Home",
        href: "#hero",
    },
    {
        id: 1,
        label: "About",
        href: "#about",
    },
    {
        id: 2,
        label: "Experience",
        href: "#experience",
    },
    {
        id: 3,
        label: "Projects",
        href: "#projects",
    },
    {
        id: 4,
        label: "Contact",
        href: "#contact",
    },
];
