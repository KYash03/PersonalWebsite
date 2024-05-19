import SchoolIcon from "@mui/icons-material/School";
import DateRangeIcon from "@mui/icons-material/DateRange";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import BusinessIcon from "@mui/icons-material/Business";

export default function Education() {
  return (
    <div className="border-l-2 border-gray-200 pl-4 mb-4">
      <div className="border-2 border-black p-4 rounded-lg mb-4">
        <p className="text-center border-b-2 border-black mb-4 pb-4 font-semibold text-xl">
          The University of British Columbia
        </p>
        <p className="p-1 flex items-center">
          <SchoolIcon className="mr-2" />
          <span>Bachelor of Science in Data Science</span>
        </p>
        <p className="p-1 flex items-center">
          <DateRangeIcon className="mr-2" />
          <span>Sept 2021 - April 2026</span>
        </p>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center mb-2">
          <EmojiEventsIcon className="mr-2" />
          <span className="font-semibold text-xl">Dean&apos;s List</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:mb-2">
          <div className="flex items-center mb-2 md:mb-0 md:mr-4">
            <DateRangeIcon className="mr-2 md:mr-2" />
            <span className="font-semibold mr-4 md:mr-0">June 2023</span>
          </div>
          <div className="flex items-center">
            <BusinessIcon className="mr-2 md:mr-2" />
            <span className="font-semibold">
              The University of British Columbia, Okanagan
            </span>
          </div>
        </div>
        <p>
          The Dean&apos;s List recognizes students who have demonstrated
          academic excellence by maintaining a sessional average of at least
          85%.
        </p>
      </div>
    </div>
  );
}
