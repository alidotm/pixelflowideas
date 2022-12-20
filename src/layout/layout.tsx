import Head from "next/head";
import { type ReactNode, type FC } from "react";
import Navbar from "../components/navbar";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>PixelFlowIdeas</title>
        <meta
          name="description"
          content="Search stock assets from famous website in one place with PixelFlowIdeas"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>"
        />
      </Head>
      <div className="w-screen">
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default Layout;
