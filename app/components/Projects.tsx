import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "UBC Stats Companion",
      link: "https://github.com/link-to-ubc-stats-companion",
      description:
        "JavaScript-based Chrome extension for UBC students to access course statistics and professor ratings.",
      technologies: "HTML, CSS, JS, jQuery, Bootstrap",
    },
    {
      title: "CNN-Based Pneumonia Detection Web App",
      link: "https://github.com/link-to-pneumonia-detection-app",
      description:
        "Flask web app for pneumonia detection from X-ray images, using a custom CNN with Keras.",
      technologies: "Python (Flask, Keras, PyTest), GCP App Engine, Bootstrap",
    },
    {
      title: "PlantPal",
      link: "https://github.com/link-to-plantpal",
      description:
        "iOS app for plant disease identification using Core ML, with image uploads from PhotosUI.",
      technologies: "Swift, SwiftUI, UIKit, Core ML, Create ML",
    },
    {
      title: "iClicker Clone",
      link: "https://github.com/link-to-iclicker-clone",
      description:
        "Web-based polling platform developed in an Agile environment, using object-oriented principles.",
      technologies: "HTML, CSS, JSP, SQL, Docker",
    },
    {
      title: "Human Activity Recognition Analysis + Web App",
      link: "https://github.com/link-to-human-activity-recognition",
      description:
        "FastAPI API and web app for predicting anthropometric characteristics and activity classes.",
      technologies:
        "NumPy, pandas, Matplotlib, Seaborn, scikit-learn, FastAPI, AWS",
    },
    {
      title: "Breast Cancer Dataset Analysis",
      link: "https://github.com/link-to-breast-cancer-dataset-analysis",
      description:
        "Created a Tableau dashboard and a Streamlit app for breast cancer sample analysis using a Support Vector Classifier model.",
      technologies:
        "Python (NumPy, pandas, Matplotlib, Seaborn, scikit-learn, Streamlit), Tableau",
    },
    {
      title: "SunScope - Hackathon Project",
      link: "https://github.com/link-to-sunscope",
      description:
        "Led frontend development of a SPA assessing residential locations' solar potential, integrating Google's Solar API.",
      technologies:
        "Google's Solar API, React, TypeScript, Python (Flask), Google Cloud Run, Netlify",
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
