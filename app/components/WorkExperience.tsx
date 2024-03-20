import DateRangeIcon from "@mui/icons-material/DateRange";
import BusinessIcon from "@mui/icons-material/Business";
import PlaceIcon from "@mui/icons-material/Place";

export default function WorkExperience() {
  const jobs = [
    {
      title: "Software Developer",
      company: "The University of British Columbia",
      dates: "Sept 2023 – Mar 2024",
      location: "Kelowna, BC",
      bulletPoints: [
        "Spearheaded the development of a module within a Decision Support System (DSS) designed for processing and displaying CSV data in a React-based table, benefiting about 9,000 students with course and study-plan decisions.",
        "Collaborated with cross-functional teams under Dr Abdallah Mohamed’s guidance.",
      ],
    },
    {
      title: "React Native Developer",
      company: "Brokol",
      dates: "Sept 2023 – Oct 2023",
      location: "Kelowna, BC",
      bulletPoints: [
        "Implemented multiple new features and UI improvements using React Native and TypeScript, including colour scheme adjustments and bottom sheet size optimization, significantly increasing user engagement and usability.",
        "Gained proficiency in Google Firebase, understanding its role and capabilities within the app’s framework.",
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
