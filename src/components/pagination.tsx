import { useRouter } from "next/router";
import { type FC } from "react";
import ReactPaginate from "react-paginate";

type Props = {
  totalPhotos: number;
};

const Pagination: FC<Props> = ({ totalPhotos }) => {
  //router
  const router = useRouter();

  //total pages
  const pageCount = totalPhotos / 30;

  const handlePageClick = (e: { selected: number }) => {
    router.push({ query: { ...router.query, page: e.selected + 1 } });
    console.log(e);
  };

  return (
    <div className="mt-20 flex w-full justify-center px-6">
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={() => {
          return;
        }}
        nextLinkClassName="block h-9 w-9 cursor-pointer hover:bg-zinc-100 text-sm flex justify-center items-center rounded-md border border-zinc-200 text-center "
        previousLinkClassName="block h-9 w-9 cursor-pointer hover:bg-zinc-100 text-sm flex justify-center items-center rounded-md border border-zinc-200 text-center "
        className="flex max-w-sm flex-grow justify-between space-x-1"
        activeLinkClassName="bg-black text-white font-medium"
        forcePage={
          parseInt(router.query.page as string) > 0
            ? parseInt(router.query.page as string) - 1
            : 1
        }
        pageLinkClassName="h-9 w-9 hover:bg-zinc-100 transition-color duration-300 ease-in-out cursor-pointer text-sm flex justify-center items-center rounded-md border border-zinc-200 text-center "
      />
    </div>
  );
};

export default Pagination;
