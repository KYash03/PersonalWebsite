import Head from "next/head";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import TechnicalSkills from "./components/TechnicalSkills";
import Resume from "./components/Resume";
import Connect from "./components/Connect";
import CollapsibleSection from "./components/CollapsibleSection";
import Footer from "./components/Footer";

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
            <div className="w-full max-w-screen-md flex flex-col space-y-4 mx-auto">
              <Intro />
              <CollapsibleSection title="Connect" defaultOpen>
                <Connect />
              </CollapsibleSection>
              <CollapsibleSection title="Education and Awards">
                <Education />
              </CollapsibleSection>
              <CollapsibleSection title="Work Experience">
                <WorkExperience />
              </CollapsibleSection>
              <CollapsibleSection title="Projects">
                <Projects />
              </CollapsibleSection>
              <CollapsibleSection title="Technical Skills">
                <TechnicalSkills />
              </CollapsibleSection>
              <CollapsibleSection title="Résumé">
                <Resume />
              </CollapsibleSection>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
