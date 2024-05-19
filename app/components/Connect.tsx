import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Connect() {
  return (
    <div className="border-l-2 border-gray-200 pl-4 mb-4">
      <p className="p-1 flex items-center">
        <EmailIcon className="mr-2" />
        <span className="font-semibold mr-1">Email:</span>
        <a className="underline" href="mailto:kyash03@student.ubc.ca">
          kyash03@student.ubc.ca
        </a>
      </p>
      <p className="p-1 flex items-center">
        <LinkedInIcon className="mr-2" />
        <span className="font-semibold mr-1">LinkedIn:</span>
        <a
          className="underline"
          href="http://linkedin.com/in/kyash03/"
          target="_blank"
        >
          Yash Kumar
        </a>
      </p>
      <p className="p-1 flex items-center">
        <GitHubIcon className="mr-2" />
        <span className="font-semibold mr-1">GitHub:</span>
        <a
          className="underline"
          href="http://github.com/kyash03"
          target="_blank"
        >
          Yash Kumar
        </a>
      </p>
    </div>
  );
}
