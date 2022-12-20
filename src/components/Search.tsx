import { useRouter } from "next/router";
import { type FormEvent, type FC, useState } from "react";

const Search: FC = () => {
  //router
  const router = useRouter();

  //input state
  const [search, setSearch] = useState<string>("");

  //onSubmit form
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    router.push({
      query: {
        search,
        page: 1,
      },
    });
  };

  return (
    <form onSubmit={onSubmit} className="mx-auto w-full max-w-lg">
      <div className="relative flex h-12 w-full items-center overflow-hidden rounded-lg border border-zinc-600/70 bg-white px-2 focus-within:shadow-lg">
        <div className="grid h-full w-10 place-items-center text-zinc-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <input
          className="peer h-full w-full pr-2 text-base text-zinc-700 outline-none placeholder:text-zinc-400"
          type="text"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search something.."
        />
      </div>
    </form>
  );
};

export default Search;
