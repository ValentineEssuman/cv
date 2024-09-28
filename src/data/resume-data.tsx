import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Justice Valentine Essuman",
  initials: "JVE",
  location: "Arlington, United States, EST",
  locationLink: "https://www.google.com/maps/place/blacksburg",
  about:
    "Electrical Engineer on Paper | Self-taught Software Engineer and  improving synergy between hardware and software",
  summary:
    "While a Software Engineer, I have worked on multilple products and contributed in diverse teams from startups to cooperate business. He is being advised by Dr. Leonard Smith and Dr. Hamed at Hybrid Dynamics Systems and Robot Locomotion Lab. He is learning about these fields to challenge himself to enable him contribute in technology industries utilizing or driving innovation in these areas. He envisions working as systems engineering for autonomous systems and driving meaning in innovation in these fields",
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "justicevessuman@gmail.com",
    tel: "+5409983334",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ValentineEssuman",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/justicevessuman/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/kwekujunior_",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Virginia Tech",
      degree: "Electrical Engineering focus Control Systems and Dynamics",
      start: "2022",
      end: "2026",
    },
  ],
  work: [
    {
      company: "Morgan Stanley",
      link: "https://www.morganstanley.com/",
      badges: ["Remote"],
      title: "Software Engineer",
      logo: ParabolLogo,
      start: "2021",
      end: "2022",
      description:
        "engineered and documented an IntelliJ plugin for profiling 80% of Java applications using JFR, flamegraph and d3. Programmed and deployed a trading application in Spring boot using microservices architecture connected by REST and SOAP APIs Developed a custom CICD pipeline using SAML and Terraform to provision AWS hosted Gitlab and Jenkins to run 70% of employee projects. Integrated 5 new features into Fidelity bank core banking and retail banking system and documented each feature for the testing team",
      technologies: "React, TypeScript, GraphQL"
    },
    {
      company: "Automation Ghana Group",
      link: "https://www.automationghana.com/",
      badges: ["On Site"],
      title: "Automation Engineer",
      logo: ClevertechLogo,
      start: "2019",
      end: "2020",
      description:
        " In a team, developed an IoT based energy metering system for the Millennium Development Authority, a energy compact project. Evaluated energy data and designed impactful institution-specific dashboards using Thingsboard and NodeJS to generate 100% of reports. Performed automation tests and assisted in troubleshooting 80% of HMI and PLCs for Nestle and Coca-Cola reducing down times by 50%. Programmed microcontrollers, interfaced sensors using RTOS and Modbus TCP protocol and pitched General Electric Industrial IoT to my team",
      technologies: "Node.js, React.js, Linux, RTOS, Modbus, Python",
    },
    {
      company: "Tullow Oil Limited",
      link: "https://www.tullowoil.com/",
      badges: [],
      title: "Electrical Engineer",
      logo: JojoMobileLogo,
      start: "2012",
      end: "2015",
      description:
      "Collaborated with national service IT team to deploy Tullow Care-card application to accelerate nonconformance reporting Designed and pitched a MVP vessel management application for marine logistics and freights tracking and vessel allocation. Documented HSE inspection drilling equipment, chemical storage warehouses and pipe yard ensuring HSE practices were met. Assisted in vessel management issuing manifest files and automated 80% of vessel freights and allocation data using python",
    },
    // {
    //   company: "Nokia Siemens Networks",
    //   link: "https://www.nokia.com",
    //   badges: [],
    //   title: "C/C++ Developer",
    //   logo: NSNLogo,
    //   start: "2010",
    //   end: "2012",
    //   description: "Collaborated with national service IT team to deploy Tullow Care-card application to accelerate nonconformance reporting Designed and pitched a MVP vessel management application for marine logistics and freights tracking and vessel allocation. Documented HSE inspection drilling equipment, chemical storage warehouses and pipe yard ensuring HSE practices were met. Assisted in vessel management issuing manifest files and automated 80% of vessel freights and allocation data using python",
    // },
  ],
  skills: [
    "Internet of Things",
    "System Testing and Diagnosis",
    "Electronics",
    "Control Systems",
    "Software Engineering",
    "Embedded Systems",
  ],
  projects: [
    {
      title: "Building Management System (BMS)",
      techStack: [
        "Company Project",
        "Javscript",
        "Docker",
        "Python",
        "NodeRed",
        "AWS",
        "Linux",
      ],
      description: "Programmed communication modules to interfaced with meters, actuators, sensors and telemetered data via messaging protocols and APIs Performed functional design specification, programmed user interface, and visualized data using JavaScript and HTML, and integrated it with the company’s proprietary BMS application running as Docker services",
      logo: ConsultlyLogo,
      link: {
        label: "https://www.automationghana.com/building-management-system",
        href: "https://youtu.be/tO3uz9uYuiw?si=rnO4MRzsc0G5XlP8",
      },
    },
    {
      title: "Electric Vehicle Charging Infrastructure",
      techStack: ["Capstone Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Researched on the electric vehicle adoption, designed schematic using Eagle CAD, built PCB and assembled a working Level 2 charging station Programmed a three-way power source switching logic on Node-MCU on the charger to interface with a web application open to EV users Designed an Internet of things server using nginx and connected it to a Python Flask web application for monitoring of charging station",
      logo: MonitoLogo,
      link: {
        label: "Afrocharge.dev",
        href: "https://youtu.be/tO3uz9uYuiw?si=rnO4MRzsc0G5XlP8",
      },
    },
    {
      title: "Afro Engineers Network, Project",
      techStack: ["Personal Project", "Next.js", "MDX"],
      description:
        " Simulated a social network to connect Africans with mutual interests to collaborate on community projects in Africa Designed and built the networking web application with Python using Deque and Graphs and text-based database Built the user interface login page of Afro Engineers using Tkinter but currently being updated using MERN stack",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    // {
    //   title: "Minimal",
    //   techStack: ["Side Project", "Next.js", "Puppeteer"],
    //   description:
    //     "Minimalist calendars, habit trackers and planners generator",
    //   logo: Minimal,
    //   link: {
    //     label: "useminimal.com",
    //     href: "https://useminimal.com/",
    //   },
    // },
    // {
    //   title: "Barepapers",
    //   techStack: ["Side Project", "Next.js", "Puppeteer"],
    //   description:
    //     "Generates beautiful wallpapers using random shapes and gradients",
    //   logo: BarepapersLogo,
    //   link: {
    //     label: "barepapers.com",
    //     href: "https://barepapers.com/",
    //   },
    // },
    // {
    //   title: "Year progress",
    //   techStack: ["Side Project", "TypeScript", "Next.js"],
    //   description: "Tracks current year progress and displays a countdown",
    //   logo: YearProgressLogo,
    //   link: {
    //     label: "getyearprogress.com",
    //     href: "https://getyearprogress.com/",
    //   },
    // },
    // {
    //   title: "Parabol",
    //   techStack: [
    //     "Full Stack Developer",
    //     "TypeScript",
    //     "React",
    //     "Node.js",
    //     "GraphQL",
    //   ],
    //   description:
    //     "The Agile meeting co-pilot that delivers better meetings with less effort",
    //   logo: ParabolLogo,
    //   link: {
    //     label: "github.com",
    //     href: "https://parabol.co/",
    //   },
    // },
    // {
    //   title: "Evercast",
    //   techStack: [
    //     "Lead Frontend Developer",

    //     "TypeScript",
    //     "React",
    //     "Node.js",
    //     "GraphQL",
    //   ],
    //   description:
    //     "Creative collaboration platform that combines video conferencing and HD media streaming",
    //   logo: EvercastLogo,
    //   link: {
    //     label: "evercast.us",
    //     href: "https://www.evercast.us/",
    //   },
    // },
    // {
    //   title: "Mobile Vikings",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for leading virtual mobile operator in Poland",
    //   logo: MobileVikingsLogo,
    //   link: {
    //     label: "mobilevikings.pl",
    //     href: "https://mobilevikings.pl/",
    //   },
    // },
    // {
    //   title: "Howdy",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Howdy is a place for you to join communities you care about",
    //   logo: Howdy,
    //   link: {
    //     label: "play.google.com",
    //     href: "https://howdy.co/",
    //   },
    // },
    // {
    //   title: "Tastycloud",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application for managing and displaying restaurant menus in kiosk mode",
    //   logo: TastyCloudLogo,
    //   link: {
    //     label: "tastycloud.fr",
    //     href: "https://www.tastycloud.fr/",
    //   },
    // },
    // {
    //   title: "Ambit",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with sharing your contact details",
    //   logo: AmbitLogo,
    // },
    // {
    //   title: "Bim",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Android application that helps with booking a table in a restaurants",
    //   logo: BimLogo,
    // },
    // {
    //   title: "Canal Digital GO",
    //   techStack: ["Lead Android Developer", "Android", "Kotlin"],
    //   description:
    //     "Video streaming mobile application for Canal Digital subscribers",
    //   logo: CDGOLogo,
    // },
  ],
} as const;
