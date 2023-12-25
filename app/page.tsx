import Header from "./components/Header";
import Intro from "./components/Intro";
import ConnectButton from "./components/ConnectButton";
import EducationButton from "./components/EducationButton";
import WorkExperienceButton from "./components/WorkExperienceButton";
import ProjectsButton from "./components/ProjectsButton";
import ResumeButton from "./components/ResumeButton";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="flex font-sans text-lg">
          <div className="w-full max-w-screen-md flex flex-col space-y-4 mx-auto">
            <Intro />
            <ConnectButton />
            <EducationButton />
            <WorkExperienceButton />
            <ProjectsButton />
            <ResumeButton />
          </div>
        </div>
      </main>
      {/* TO DO: SKILLS*/}
      <Footer />
    </div>
  );
}
