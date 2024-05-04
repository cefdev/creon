import { CreonPass } from "./creon-pass";
import { FirstScreen } from "./first-screen";

export default function Home() {
  return (
    <>
      <FirstScreen />
      <div className="max-w-[1440px] mx-4 lg:mx-[22px] xl:mx-auto">
        <CreonPass />
      </div>
    </>
  );
}
