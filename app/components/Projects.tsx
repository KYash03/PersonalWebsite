import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function Projects() {
  const projects = [
    {
      title: "UBC Stats Companion",
      link: "https://chromewebstore.google.com/detail/ubc-stats-companion/hogjbhheidjgkabgjfhjdmaieppefagj#",
      description:
        "JavaScript-based Chrome extension for UBC students to access course statistics and professor ratings. Currently has 450+ users and a five-star rating.",
      technologies: "HTML, CSS, JS, jQuery, Bootstrap",
    },
    {
      title: "CNN-Based Pneumonia Detection Web App",
      link: "https://github.com/KYash03/Flask-CNN-Project",
      description:
        "Flask web app for pneumonia detection from X-ray images using a custom CNN with Keras.",
      technologies: "Python (Flask, Keras, PyTest), GCP App Engine, Bootstrap",
    },
    {
      title: "PlantPal",
      link: "https://github.com/KYash03/PlantPal",
      description:
        "iOS app utilizing SwiftUI and Core ML for plant disease identification.",
      technologies: "Swift, SwiftUI, UIKit, Core ML, Create ML",
    },
    {
      title: "iClicker Clone",
      link: "https://github.com/KYash03/COSC-310-Group-Project-iClicker-Clone",
      description:
        "Developed a web-based polling platform using Agile methodologies and object-oriented principles for COSC 310's group project.",
      technologies: "HTML, CSS, JSP, SQL, Docker",
    },
    {
      title: "Human Activity Recognition Analysis + Web App",
      link: "https://github.com/KYash03/MotionSenseML",
      description:
        "Created a FastAPI API on AWS EC2 using KNN and GridSearchCV for predicting anthropometric characteristics and activity classes",
      technologies:
        "NumPy, pandas, Matplotlib, Seaborn, scikit-learn, FastAPI, AWS",
    },
    {
      title: "Breast Cancer Dataset Analysis",
      link: "https://github.com/KYash03/BreastCancerWebApp",
      description:
        "Created a Tableau dashboard and a Streamlit app for breast cancer sample analysis using a Support Vector Classifier model.",
      technologies:
        "Python (NumPy, pandas, Matplotlib, Seaborn, scikit-learn, Streamlit), Tableau",
    },
    {
      title: "SunScope - Hackathon Project",
      link: "https://github.com/JapmeetBrar/SunScope",
      description:
        "Led the frontend development of a SPA assessing residential locations' solar potential, integrating Google's Solar API. This project was developed for Hack the Change 2023 hosted by The University of Calgary.",
      technologies:
        "Google's Solar API, React, TypeScript, Python (Flask), Google Cloud Run, Netlify",
    },
    {
      title: "Personal Portfolio Website",
      link: "https://github.com/KYash03/PersonalWebsite",
      description:
        "Comprehensive website showcasing my skills, projects and professional journey. Created using Next.js and deployed on Netlify.",
      technologies: "Tailwind CSS, Next.js, Netlify, TypeScript",
    },
  ];

  return (
    <div className="border-l-2 border-gray-200 pl-4 mb-4">
      {projects.map((project, index) => (
        <div
          key={index}
          className={index !== projects.length - 1 ? "mb-3" : ""}
        >
          <a
            href={project.link}
            className="text-xl font-bold underline flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.title}
            <OpenInNewIcon className="ml-1" />
          </a>
          <p className="my-2">{project.description}</p>
          <p>Tech: {project.technologies}</p>
        </div>
      ))}
    </div>
  );
}
