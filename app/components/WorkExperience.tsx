import DateRangeIcon from "@mui/icons-material/DateRange";
import BusinessIcon from "@mui/icons-material/Business";
import PlaceIcon from "@mui/icons-material/Place";

export default function WorkExperience() {
  const jobs = [
    {
      title: "Software Developer Intern",
      company: "BlackBerry",
      dates: "May 2024 – Aug 2024",
      location: "Waterloo, ON",
      bulletPoints: [
        "Developing, testing and maintaining UI apps for BlackBerry's UES product suite using React, JavaScript, Redux and GraphQL.",
      ],
    },
    {
      title: "Software Developer",
      company: "The University of British Columbia",
      dates: "Sept 2023 – Feb 2024",
      location: "Kelowna, BC",
      bulletPoints: [
        "Worked with Dr. Abdallah Mohamed to create software aimed at improving course planning for UBC students. I led the development of a module within the Decision Support System (DSS) designed for processing and displaying CSV data in a React-based table.",
      ],
    },
    {
      title: "React Native Developer",
      company: "Brokol",
      dates: "Sept 2023 – Oct 2023",
      location: "Kelowna, BC",
      bulletPoints: [
        "Worked on new features and UI improvements for Brokol's mobile application using React Native and TypeScript.",
      ],
    },
    {
      title: "Data Science Intern",
      company: "Consat Orahi",
      dates: "May 2023 – Jun 2023",
      location: "Gurgaon, Haryana",
      bulletPoints: [
        "Designed and automated a dashboard, using Looker Studio and Google Spreadsheets, to showcase JIRA-based team performance metrics.",
        "Employed K-Means clustering and DBSCAN to identify bus routes from Orahi's tracking system data. Utilized GeoPandas and Folium's 'PolyLine' feature to connect centroid points.",
      ],
    },
  ];

  return (
    <div className="border-l-2 border-gray-200 pl-4 mb-6">
      {jobs.map((job, index) => (
        <div key={index} className={index !== jobs.length - 1 ? "mb-6" : ""}>
          <p className="font-bold text-xl mb-2">{job.title}</p>
          <div className="flex flex-col md:flex-row md:items-center md:mb-2">
            <div className="flex items-center mb-2 md:mb-0">
              <BusinessIcon className="mr-2 md:mr-2" />
              <span className="mr-4 md:mr-4">{job.company}</span>
            </div>
            <div className="flex items-center mb-2 md:mb-0">
              <DateRangeIcon className="mr-2 md:mr-2" />
              <span className="mr-4 md:mr-4">{job.dates}</span>
            </div>
            <div className="flex items-center">
              <PlaceIcon className="mr-2 md:mr-2" />
              <span>{job.location}</span>
            </div>
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
