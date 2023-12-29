import DateRangeIcon from "@mui/icons-material/DateRange";
import BusinessIcon from "@mui/icons-material/Business";
import PlaceIcon from "@mui/icons-material/Place";

export default function WorkExperience() {
  const jobs = [
    {
      title: "Software Developer Intern",
      company: "The University of British Columbia",
      dates: "Sept 2023 – Present",
      location: "Kelowna, BC",
      bulletPoints: [
        "Spearheading the development of a module within a Decision Support System (DSS) designed for processing and displaying CSV data in a React-based table, expected to benefit about 9,000 students with course and study-plan decisions.",
        "Collaborating with cross-functional teams under Dr Abdallah Mohamed’s guidance to fulfil user requirements.",
      ],
    },
    {
      title: "React Native Developer",
      company: "Brokol",
      dates: "Sept 2023 – Oct 2023",
      location: "Kelowna, BC",
      bulletPoints: [
        "Implemented UI improvements using React Native and TypeScript, including color scheme adjustments and bottom sheet size optimization, enhancing user experience and leading to a 30% increase in user engagement metrics.",
        "Gained proficiency in Google Firebase, understanding its role and capabilities within the app’s framework.",
      ],
    },
    {
      title: "Full Stack Developer Intern",
      company: "Lexster Law",
      dates: "July 2023",
      location: "New Delhi, Delhi",
      bulletPoints: [
        <>
          Independently developed and deployed{" "}
          <a
            href="http://www.lexsterlawdemo.com"
            target="_blank"
            className="underline"
          >
            www.lexsterlawdemo.com
          </a>{" "}
          using MERN, Tailwind CSS, Material UI, and Vite on Heroku, showcasing
          co-founders’ requirements and receiving positive feedback from 96% of
          the review team.
        </>,
        "Improved site performance and user engagement with MVC architecture and RESTful APIs, reducing load times by 40% and increasing user interaction by 50%.",
        "Streamlined form handling by integrating Formik and Yup, reducing form completion time by 60%. Utilized Postman for API testing, resulting in a 40% decrease in user-reported issues during the review team’s testing.",
      ],
    },
    {
      title: "Data Science Intern",
      company: "Consat Orahi",
      dates: "May 2023 – Jun 2023",
      location: "Gurgaon, Haryana",
      bulletPoints: [
        "Designed and automated a dashboard using Looker Studio and Google Spreadsheets, displaying JIRA-based metrics for 5 projects and 180 tickets, resulting in a 65% increase in stakeholder engagement.",
        "Employed K-Means clustering for determining centroids and DBSCAN for outlier detection to identify bus routes from Orahi’s bus tracking system’s data, analyzing over 10,000 data points.",
      ],
    },
  ];

  return (
    <div className="border-l-2 border-gray-200 pl-4 mb-6">
      {jobs.map((job, index) => (
        <div key={index} className={index !== jobs.length - 1 ? "mb-4" : ""}>
          <p className="font-bold text-xl mb-2">{job.title}</p>
          <div className="flex items-center mb-2">
            <BusinessIcon className="mr-2" />
            <span className="mr-4">{job.company}</span>
            <DateRangeIcon className="mr-2" />
            <span className="mr-4">{job.dates}</span>
            <PlaceIcon className="mr-2" />
            <span>{job.location}</span>
          </div>
          <ul className="list-disc pl-6">
            {job.bulletPoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
