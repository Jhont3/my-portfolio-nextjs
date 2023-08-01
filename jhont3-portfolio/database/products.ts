interface SeedProduct {
    _id: number;
    description: string;
    images: string[];
    slug: string;
    title: string;
    link: string;
    type?: ValidTypes;
}

type ValidTypes = 'FrontEnd'|'BackEnd'|'FullStack'|'Infrastructure'|'Testing'|'Games';


interface SeedData {
    products: SeedProduct[],
}

export const initialData: SeedData = {
    products: [
        {
            _id: 99,
            description: "This is my portfolio or banner of my best projects FullStack, created with Astro, JavaScript and Tailwind",
            images: [
                'demo-astro-portfolio.png',
                'Js.png',
            ],
            slug: "astro_portfolio",
            type: 'FrontEnd',
            link: 'https://6478e4799aa2cf3960aa0661--lucent-meerkat-9b5146.netlify.app/',
            title: "Astro portfolio",
        },

        {
            _id: 98,
            description: "This is my repository for practicing FullStack technologies. I practiced NodeJs, Express, JWT and MongoDB in the backend folder, creating a basic structure of an e-shop, and I practiced ReactTs using Vite template, with Tailwind for styling, Axios for fething backend data, GSAP for animations, React Query for controlling fetched information, Zustand for managing state (easier than Redux).",
            images: [
                'demoHome-eshop-react-node.png',
                'reactTs.png',
                'mongoDb.png',
                'nodejs.png'
            ],
            slug: "hairy_monster",
            type: 'FullStack',
            link: 'https://www.linkedin.com/posts/jhonatan-escobar-uribe_tailwind-platzi-activity-7067648066052337665-VwEf?utm_source=share&utm_medium=member_desktop',
            title: "Hairy Monster / Ecommerce",
        },

        {
            _id: 97,
            description: "This is my final project as a student of Digital House in the first track of Certified Tech Developer. I was mainly responsible for development of Front-end (React-JS, CSS modules) and Infrastructure (Gitlab/CICD-AWS) development, while also contributing actively to testing (manual testing-Selenium IDE) and backend development (Java-JWT-Spring). We used Scrum as an iterative methodology to work and Figma as base to create Front-end layout. To see all the libraries that we used, you can see dependencies in package.json file for Front-end and dependencies in pom.xml file for backend.",
            images: [
                'demoHome-easycar-booking-react.png',
                'java.png',
                'react.png',
                'aws.png'
            ],
            link: 'https://www.linkedin.com/posts/jhonatan-escobar-uribe_quiero-compartirles-mi-trabajo-final-en-el-activity-7045493245056819201-p_uy?utm_source=share&utm_medium=member_desktop',
            slug: "easycar_booking_react",
            type: 'FullStack',
            title: "Easy Car / Booking"
        },

        {
            _id: 96,
            description: "This is my repository for learning and practicing about .Net with C# in the Backend's BootCamp from WomenWhoCode sponsored by Perficient.",
            images: [
                'demoBootcampBE.png',
                'cSharp.png',
            ],
            slug: "bootcamp_backend_csharp",
            type: 'BackEnd',
            title: "Bootcamp Backend C# / .Net Framework",
            link: 'https://github.com/Jhont3/discoteque-dotnet'
        },
        {
            _id: 95,
            description: "Hi, this is my repo where I am solving a mid-level React technical test using ReactTS, and https://randomuser.me/ API. Test previously solved by Midudev on live coding stream https://www.twitch.tv/midudev/video/1792623213.",
            images: [
                'demo-react-data-management.png',
                'reactTs.png',
            ],
            slug: "data_management_react",
            type: 'FrontEnd',
            title: "React data management App",
            link: 'https://github.com/Jhont3/react-data-management-app/'
        },
        {
            _id: 94,
            description: "This is my repository of the GifExpertApp project from the recently updated course https://www.udemy.com/course/react-cero-experto/ by Fernando Herrera, which I am currently studying and practicing React, JS, Jest and ReactTestingLibrary. I add link to the app made Gif APP",
            images: [
                'demo-react-gifs-finder.png',
                'react.png',
            ],
            slug: "gif_finder_react",
            type: 'FrontEnd',
            title: "Gif's Finder App",
            link: 'https://jhont3.github.io/react-gifs-finder/'
        },

    ]
}