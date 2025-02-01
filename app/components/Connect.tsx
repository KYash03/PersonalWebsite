import Section from "./Section";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

interface ContactItemProps {
  Icon: React.ElementType;
  label: string;
  href: string;
  displayText: string;
}

const ContactItem: React.FC<ContactItemProps> = ({
  Icon,
  label,
  href,
  displayText,
}) => (
  <p className="p-1 flex items-center">
    <Icon className="mr-2" />
    <span className="font-semibold mr-1">{label}:</span>
    <a
      className="underline"
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {displayText}
    </a>
  </p>
);

export default function Connect() {
  return (
    <Section>
      <ContactItem
        Icon={EmailIcon}
        label="Email"
        href="mailto:kyash03@student.ubc.ca"
        displayText="kyash03@student.ubc.ca"
      />
      <ContactItem
        Icon={LinkedInIcon}
        label="LinkedIn"
        href="https://linkedin.com/in/kyash03/"
        displayText="Yash Kumar"
      />
      <ContactItem
        Icon={GitHubIcon}
        label="GitHub"
        href="https://github.com/kyash03"
        displayText="Yash Kumar"
      />
    </Section>
  );
}
