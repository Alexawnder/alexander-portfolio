// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.png";
import logo from "./assets/logo.png";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import js from "./assets/techstack/js.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
// Project Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Alexander Lee",
  tagline: "Data Analyst & CS Graduate | Python · SQL · Power BI",
  img: profile,
  about: `I'm a Computer Science graduate from Cal Poly Pomona with hands-on experience turning raw data into actionable insights. I've built Power BI dashboards that cut reporting time by 40%, automated Excel workflows with PowerShell at LADWP, and engineered end-to-end data pipelines in Python. I enjoy solving the full problem — from wrangling messy data to delivering clean, interactive visualizations that non-technical stakeholders can actually use.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkedin: "https://www.linkedin.com/in/alexawnder-lee/",
  github: "https://github.com/Alexawnder",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Systems Analyst Intern",
    Company: `Los Angeles Department of Water and Power`,
    Location: "Los Angeles, CA",
    Type: "Internship",
    Duration: "Jul 2024 - Jul 2025",
  },
  {
    Position: "Data Analyst Intern",
    Company: `Los Angeles Police Department`,
    Location: "Los Angeles, CA",
    Type: "Internship",
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
  js: js,
  vscode: vscode,
  git: git,
  github: github,
};

// Tech stack grouped by category (used in Technologies page)
export const techCategories = [
  {
    label: "Languages",
    items: ["Python", "SQL", "Java", "JavaScript", "PowerShell"],
  },
  {
    label: "Data & ETL",
    items: ["pandas", "NumPy", "SQLAlchemy", "yfinance", "ETL Pipeline Design"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "NeonDB", "Schema Design", "Query Optimization"],
  },
  {
    label: "Visualization",
    items: ["Power BI", "Streamlit", "Plotly", "DAX"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub Actions", "VS Code", "Excel", "PowerShell"],
  },
];

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Stock Ranking & Analytics Pipeline",
    image: projectImage1,
    description: `End-to-end data pipeline ingesting daily stock data for 40+ tickers. Engineers features including moving averages, momentum, and volatility, then ranks stocks with a custom scoring model. Deployed as an interactive Streamlit dashboard — reducing analysis time from hours to seconds.`,
    techstack: "Python, PostgreSQL, pandas, Streamlit, Plotly",
    previewLink: "",
    githubLink: "https://github.com/Alexawnder",
  },
  {
    title: "E-commerce Sales Analytics Dashboard",
    image: projectImage2,
    description: `Interactive Power BI dashboard tracking sales, order volume, customer segments, and regional performance across a normalized retail dataset. Built SQL analyses and DAX measures to surface month-over-month revenue trends, top-selling products, and average shipping times.`,
    techstack: "PostgreSQL, SQL, Power BI, DAX",
    previewLink: "",
    githubLink: "https://github.com/Alexawnder",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "alexanderlee389@gmail.com",
  phone: "+1(626)-365-6083",
};
