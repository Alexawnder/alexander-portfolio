// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Alexander Lee",
  tagline: "Computer Science Graduate | Data Analyst | Power BI, SQL, Excel",
  img: profile,
  about: `I'm a Computer Science graduate focused on data analysis, dashboard development, and process automation. I have experience building Power BI dashboards, automating Excel workflows with PowerShell, and supporting data-driven decision making through reporting and analysis. I'm currently building projects in SQL, Power BI, Python, and web technologies to strengthen my skills and create practical solutions.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkedin: "https://www.linkedin.com/in/alexawnder-lee/",
  github: "https://github.com/Alexawnder",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Student Professional Worker",
    Company: `Los Angeles Department of Water and Power`,
    Location: "Los Angeles, CA",
    Type: "Part Time",
    Duration: "Jul 2024 - Jul 2025",
  },
  {
    Position: "Student Professional Worker",
    Company: `Los Angeles Police Department`,
    Location: "Los Angeles, CA",
    Type: "Part Time",
    Duration: "Jul 2023 - Jul 2024",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor of Science in Computer Science",
    Company: "California State Polytechnic University, Pomona",
    Location: "Pomona, CA",
    Type: "Full Time",
    Duration: "Aug 2021 - May 2025",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Stock Analyzer Dashboard",
    image: projectImage1,
    description: `Built a stock analysis project focused on identifying strong candidates for cash-secured puts by evaluating volatility, trend strength, and overall risk factors.`,
    techstack: "Python, Streamlit, Pandas",
    previewLink: "",
    githubLink: "https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_1",
  },
  {
    title: "SQL Sales Data Analysis",
    image: projectImage2,
    description: `Analyzed sales data using SQL queries to identify top-performing products, revenue trends, and customer behavior insights. Focused on turning raw data into clear business findings.`,
    techstack: "SQL, MySQL, Excel",
    previewLink: "",
    githubLink: "https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_2",
  },
  {
    title: "Power BI Reporting Dashboard",
    image: projectImage3,
    description: `Created an interactive dashboard to visualize KPIs, trends, and operational metrics in a clear and actionable format for decision making.`,
    techstack: "Power BI, Excel, Data Visualization",
    previewLink: "",
    githubLink: "https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_3",
  },
  {
    title: "Portfolio Website",
    image: projectImage4,
    description: `Developed and customized a personal portfolio website to showcase projects, technical skills, and experience in data analysis and software development.`,
    techstack: "React, JavaScript, CSS",
    previewLink: "",
    githubLink: "https://github.com/YOUR_GITHUB_USERNAME/YOUR_PORTFOLIO_REPO",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "alexanderlee389@gmail.com",
  phone: "+1(626)-365-6083",
};
