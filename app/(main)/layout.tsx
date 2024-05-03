import { Header } from "./header";
import { navbarItems, socialMediaItems } from "@/data/mockdata";

type Props = {
  children: React.ReactNode;
};
const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header navbarData={navbarItems} socialMediaData={socialMediaItems} />
      <main className="">{children}</main>
      <footer>This is a footer</footer>
    </>
  );
};

export default MainLayout;
