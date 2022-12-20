import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";
import githubIcon from "../../../public/github.svg";

const Navbar: FC = () => {
  return (
    <header
      aria-label="Site header"
      className="sticky top-0 z-50 flex h-16 w-screen items-center justify-center border-b bg-white"
    >
      <div className="flex w-full max-w-screen-xl justify-between px-6">
        <div aria-label="Site Logo">
          <h6 className="text-base font-medium">🚀 PixelFlowIdeas</h6>
        </div>

        <Link
          href="https://github.com/alidotm/pixelflowideas"
          target="_black"
          aria-label="Site github"
          className="transition-opacity duration-300 ease-in-out hover:opacity-70"
        >
          <Image src={githubIcon} alt="Github" className="h-5 w-5" />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
