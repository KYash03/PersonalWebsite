import SchoolIcon from "@mui/icons-material/School";
import DateRangeIcon from "@mui/icons-material/DateRange";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import BusinessIcon from "@mui/icons-material/Business";

export default function Education() {
  return (
    <div className="border-l-2 border-gray-200 pl-4 mb-6">
      <div className="border-2 border-black p-4 rounded-lg mb-6">
        <p className="text-center border-b-2 border-black mb-4 pb-4 font-semibold text-xl">
          The University of British Columbia
        </p>
        <p className="p-1 flex items-center">
          <SchoolIcon className="mr-2" />
          <p>Bachelor of Science in Data Science</p>
        </p>
        <p className="p-1 flex items-center">
          <DateRangeIcon className="mr-2" />
          <p>Sept 2021 - April 2026</p>
        </p>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center mb-2">
          <EmojiEventsIcon className="mr-2" />
          <p className="font-semibold text-2xl">Dean&apos;s List</p>
        </div>
        <div className="flex items-center mb-2">
          <DateRangeIcon className="mr-2" />
          <span className="font-semibold mr-4">June 2023 </span>
          <BusinessIcon className="mr-2" />
          <span className="font-semibold">
            The University of British Columbia, Okanagan
          </span>
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
