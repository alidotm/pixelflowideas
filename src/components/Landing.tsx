import { type FC } from "react";
import Link from "next/link";

const Landing: FC = () => {
  return (
    <div className="mb-6 max-w-lg sm:mb-10">
      <h1 className="text-4xl font-bold sm:text-5xl">
        Search all stock assets on one site.
      </h1>
      <p className="mt-2 text-zinc-500">
        Search all stock assets like photos, videos, animation and etc in one
        place from famous sites like{" "}
        <a
          href="https://www.pexels.com/"
          target="_blank"
          className="font-medium text-zinc-600"
          rel="noreferrer"
        >
          Pexels,{" "}
        </a>
        <a
          href="https://unsplash.com/"
          target="_blank"
          className="font-medium text-zinc-600"
          rel="noreferrer"
        >
          Unsplash,{" "}
        </a>{" "}
        and etc see full list {" "}
        <Link href="" className="font-medium text-zinc-600">
          here
        </Link>
      </p>
    </div>
  );
};
export default Landing;
