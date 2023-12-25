import Image from "next/image";

export default function WorkExperience() {
  const jobs = [
    {
      title: "",
      company: "",
      dates: "",
      location: "",
      bulletPoints: ["", ""],
    },
  ];

  return (
    <div className="border-l-2 border-gray-200 pl-4 mb-6">
      {jobs.map((job, index) => (
        <div key={index} className="mb-4">
          <p className="font-bold text-xl">{job.title}</p>
          <div className="flex items-center mb-2">
            <Image
              src="/.png"
              alt="Company"
              width={20}
              height={20}
              className="mr-2"
            />
            <span className="mr-4">{job.company}</span>
            <Image
              src="/.png"
              alt="Dates"
              width={20}
              height={20}
              className="mr-2"
            />
            <span className="mr-4">{job.dates}</span>
            <Image
              src="/.png"
              alt="Location"
              width={20}
              height={20}
              className="mr-2"
            />
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
