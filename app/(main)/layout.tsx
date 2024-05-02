type Props = {
  children: React.ReactNode;
};
const MainLayout = ({ children }: Props) => {
  return (
    <>
      <header>This is a header</header>
      <main className="">{children}</main>
      <footer>This is a footer</footer>
    </>
  );
};

export default MainLayout;
