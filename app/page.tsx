import Header from "./components/Header";
import Intro from "./components/Intro";
import ConnectButton from "./components/ConnectButton";
import EducationButton from "./components/EducationButton";
import WorkExperienceButton from "./components/WorkExperienceButton";
import ProjectsButton from "./components/ProjectsButton";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="flex font-sans text-lg">
        <div className="w-full max-w-screen-md flex flex-col space-y-4 mx-auto">
          <Intro />
          <ConnectButton />
          <EducationButton />
          <WorkExperienceButton />
          <ProjectsButton />
        </div>
      </div>
    </main>
  );
}
