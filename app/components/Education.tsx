import Image from "next/image";

export default function Education() {
  return (
    <div className="border-l-2 border-gray-200 pl-4 mb-6">
      <div className="border-2 border-black p-4 rounded-lg mb-6">
        <p className="text-center border-b-2 border-black mb-4 pb-4 font-semibold text-xl">
          The University of British Columbia, Okanagan
        </p>
        <p className="p-1 flex items-center">
          <Image
            src="/degree.png"
            alt="email-icon"
            width={20}
            height={20}
            className="mr-2"
          />
          <p>Bachelor of Science in Data Science</p>
        </p>
        <p className="p-1 flex items-center">
          <Image
            src="/schedule.png"
            alt="LinkedIn icon"
            width={20}
            height={20}
            className="mr-2"
          />
          <p>Sept 2021 - April 2026</p>
        </p>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center mb-2">
          <Image
            src="/trophy.png"
            alt="achievement-icon"
            width={20}
            height={20}
            className="mr-2"
          />
          <p className="font-semibold text-2xl">Dean&apos;s List</p>
        </div>
        <div className="flex items-center mb-2">
          <Image
            src="/schedule.png"
            alt="date-icon"
            width={20}
            height={20}
            className="mr-2"
          />
          <span className="font-semibold mr-4">June 2023 </span>
          <Image
            src="/university.png"
            alt="university-icon"
            width={20}
            height={20}
            className="mx-2"
          />
          <span className="font-semibold">
            The University of British Columbia, Okanagan
          </span>
        </div>
        <p>
          The Dean’s List recognizes students who have demonstrated academic
          excellence by maintaining a sessional average of at least 85%.
        </p>
      </div>
    </div>
  );
}
