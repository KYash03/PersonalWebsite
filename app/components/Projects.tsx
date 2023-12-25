import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "UBC Stats Companion",
      link: "https://chromewebstore.google.com/detail/ubc-stats-companion/hogjbhheidjgkabgjfhjdmaieppefagj#",
      description:
        "JavaScript-based Chrome extension for UBC students to access course statistics and professor ratings.",
      technologies: "HTML, CSS, JS, jQuery, Bootstrap",
    },
    {
      title: "CNN-Based Pneumonia Detection Web App",
      link: "https://github.com/KYash03/Flask-CNN-Project",
      description:
        "Flask web app for pneumonia detection from X-ray images, using a custom CNN with Keras.",
      technologies: "Python (Flask, Keras, PyTest), GCP App Engine, Bootstrap",
    },
    {
      title: "PlantPal",
      link: "https://github.com/KYash03/PlantPal",
      description:
        "iOS app for plant disease identification using Core ML, with image uploads from PhotosUI.",
      technologies: "Swift, SwiftUI, UIKit, Core ML, Create ML",
    },
    {
      title: "iClicker Clone",
      link: "https://github.com/KYash03/COSC-304-iClicker-Clone",
      description:
        "Web-based polling platform developed in an Agile environment, using object-oriented principles.",
      technologies: "HTML, CSS, JSP, SQL, Docker",
    },
    {
      title: "Human Activity Recognition Analysis + Web App",
      link: "https://github.com/KYash03/MotionSenseML",
      description:
        "FastAPI API and web app for predicting anthropometric characteristics and activity classes.",
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
      link: "https://github.com/link-to-sunscope",
      description:
        "Led frontend development of a SPA assessing residential locations' solar potential, integrating Google's Solar API. This project was developed for Hack the Change 2023 hosted by the University of Calgary.",
      technologies:
        "Google's Solar API, React, TypeScript, Python (Flask), Google Cloud Run, Netlify",
    },
    {
      title: "Personal Portfolio Website",
      link: "https://CHANGE-THIS.com",
      description:
        "A comprehensive portfolio website showcasing my skills, projects, and professional journey. Features a clean, responsive design with interactive elements to provide a seamless user experience.",
      technologies: "React, Tailwind CSS, Next.js, Vercel, TypeScript",
    },
  ];

  return (
    <div className="border-l-2 border-gray-200 pl-4 mb-6">
      {projects.map((project, index) => (
        <div key={index} className="mb-4">
          <a
            href={project.link}
            className="text-xl font-bold underline flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.title}
            <Image
              src="/external-link.png"
              alt="External Link"
              width={20}
              height={20}
              className="ml-1"
            />
          </a>
          <p className="my-2">{project.description}</p>
          <p>Tech: {project.technologies}</p>
        </div>
      ))}
    </div>
  );
}
