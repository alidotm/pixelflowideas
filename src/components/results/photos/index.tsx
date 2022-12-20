import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { type FC } from "react";
import { trpc } from "../../../utils/trpc";

const PhotoResults: FC = () => {
  //router
  const router = useRouter();

  //route
  const { data, isLoading } = trpc.photo.getPexelPhotos.useQuery({
    search: router?.query?.search ? (router?.query?.search as string) : "",
    page: router?.query?.page ? parseInt(router?.query?.page as string) : 1,
  });

  return (
    <div className="my-20 w-full">
      {!isLoading ? (
        <>
          <h2 className="text-3xl font-semibold">Photos</h2>
          <div className="mt-6 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {data?.photos.map((p) => (
              <Link href={`/photo/${p.id}`} key={p.id}>
                <div className="col-span-1 aspect-square w-full">
                  <div className="relative h-full w-full cursor-pointer transition-opacity duration-300 ease-in-out hover:opacity-70">
                    <Image
                      fill
                      src={p.src.large}
                      alt={p.alt as string}
                      className="object-cover"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <div>Loading..</div>
      )}
    </div>
  );
};

export default PhotoResults;
