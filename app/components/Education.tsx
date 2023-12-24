import Image from "next/image";

export default function Education() {
  return (
    <div className="border-l-2 border-gray-200 pl-4 mb-6">
      <div className="border-2 border-black p-6 rounded-lg">
        <p className="text-center border-b-2 border-black mb-4 pb-4 font-semibold text-xl">
          The University of British Columbia, Okanagan
        </p>
        <p className="p-1 flex items-center">
          <Image
            src="/university.png"
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
    </div>
  );
}
