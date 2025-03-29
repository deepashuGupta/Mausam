import { PropsWithChildren } from "react";
import Header from "./components/header";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main className="w-full min-h-screen container mx-auto py-4">
        {children}
      </main>
      <footer className="h-20 w-full flex items-center justify-center border-t">
        <p>Made with 💗 by Deepanshu</p>
      </footer>
    </>
  );
};

export default Layout;
