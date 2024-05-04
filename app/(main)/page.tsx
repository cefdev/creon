import { CreonPass } from "./creon-pass";
import { FirstScreen } from "./first-screen";

export default function Home() {
  return (
    <>
      <FirstScreen />
      <div className="max-w-[1480px] px-4 lg:px-5 xl:mx-auto">
        <CreonPass />
      </div>
    </>
  );
}
