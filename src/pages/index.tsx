import { type NextPage } from "next";
import Head from "next/head";
import Landing from "../components/Landing";
import Results from "../components/results/photos";
import Search from "../components/Search";

// import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  // const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

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
      <main className="mx-auto flex w-screen max-w-screen-xl flex-col items-center px-6 pt-20">
        <Landing />
        <Search />
        <Results />
      </main>
    </>
  );
};

export default Home;
