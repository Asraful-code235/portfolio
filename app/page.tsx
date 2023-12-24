import dynamic from "next/dynamic";

const HomePage = dynamic(() => import("@/components/home/Home"));
const Interviews = dynamic(() => import("@/components/home/Interviews"));
const OurProjects = dynamic(() => import("@/components/home/OurProjects"));
const OurTeam = dynamic(() => import("@/components/home/OurTeam"));
const Partners = dynamic(() => import("@/components/home/Partners"));
const SelectedWork = dynamic(() => import("@/components/home/SelectedWork"));

export default function Home() {
  return (
    <div className="content">
      <HomePage />
      <SelectedWork />
      <OurTeam />
      <OurProjects />
      <Interviews />
      <Partners />
    </div>
  );
}
