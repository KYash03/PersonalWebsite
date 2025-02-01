import Section from "./Section";

const skills = [
  {
    label: "Languages",
    value:
      "Python, Java, C++, SQL, JavaScript, TypeScript, Swift, C, R, MATLAB",
  },
  {
    label: "Web Development",
    value:
      "React, Node.js, Express.js, Next.js, Tailwind CSS, Bootstrap, Material UI, Flask, FastAPI, Axios, Mongoose, jQuery, HTML, CSS, JSP",
  },
  {
    label: "Data Science",
    value:
      "TensorFlow, Keras, Pandas, NumPy, Scikit‑Learn, Tableau, Matplotlib, Seaborn, Prophet, Looker Studio, Jupyter",
  },
  {
    label: "Frameworks & Libraries",
    value: "React Native, SwiftUI, Streamlit, UIKit, GeoPandas, Core ML, JUnit",
  },
  {
    label: "Tools, Database and Cloud",
    value:
      "AWS, GCP, Docker, MongoDB, PostgreSQL, GitHub, Microsoft SQL Server, Postman, Create ML",
  },
];

export default function TechnicalSkills() {
  return (
    <Section>
      {skills.map((skill, idx) => (
        <p key={idx} className="pb-1">
          <strong>{skill.label}:</strong> {skill.value}
        </p>
      ))}
    </Section>
  );
}
