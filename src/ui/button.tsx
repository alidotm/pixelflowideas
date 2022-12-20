import { type FC } from "react";

const Primary: FC = () => {
  return (
    <button className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring">
      <span className="absolute inset-0 border border-black group-active:border-black"></span>
      <span className="block border border-black bg-black px-12 py-3 transition-transform active:border-black active:bg-black group-hover:-translate-x-1 group-hover:-translate-y-1">
        Download
      </span>
    </button>
  );
};

export const Button = { Primary };
