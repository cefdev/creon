import { ComingSoon } from "./coming-soon";
import { CreonPass } from "./creon-pass";
import { FirstScreen } from "./first-screen";
import { OurMession } from "./our-mission";
import { Profiting } from "./profiting";
import { Roadmap } from "./roadmap";

export default function Home() {
  return (
    <>
      <FirstScreen />
      <div className="max-w-[1480px] px-4 lg:px-5 xl:mx-auto">
        <CreonPass />
        <Profiting />
        <OurMession />
        <ComingSoon />
      </div>
      <Roadmap />
    </>
  );
}
