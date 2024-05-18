import Header from "./components/Header";
import Intro from "./components/Intro";
import ConnectButton from "./components/ConnectButton";
import EducationButton from "./components/EducationButton";
import WorkExperienceButton from "./components/WorkExperienceButton";
import ProjectsButton from "./components/ProjectsButton";
import ResumeButton from "./components/ResumeButton";
import TechnicalSkillsButton from "./components/TechnicalSkillsButton";
import Footer from "./components/Footer";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow px-4 md:px-0">
          <div className="flex font-sans text-lg">
            <div className="w-full max-w-screen-md flex flex-col space-y-6 mx-auto">
              <Intro />
              <ConnectButton />
              <EducationButton />
              <WorkExperienceButton />
              <ProjectsButton />
              <TechnicalSkillsButton />
              <ResumeButton />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
