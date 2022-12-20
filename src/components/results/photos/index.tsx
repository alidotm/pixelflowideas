import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { type FC } from "react";
import { trpc } from "../../../utils/trpc";
import loadingIcon from "../../../../public/loading.svg";
import Pagination from "../../pagination";

const PhotoResults: FC = () => {
  //router
  const router = useRouter();

  //routes
  //pexels photo route
  const { data: pexelData, isLoading: pexelLoading } =
    trpc.photo.getPexelPhotos.useQuery({
      search: router?.query?.search ? (router?.query?.search as string) : "",
      page: router?.query?.page ? parseInt(router?.query?.page as string) : 1,
    });

  const { data: unsplashData, isLoading: unsplashLoading } =
    trpc.photo.getUnsplashPhotos.useQuery({
      search: router?.query?.search ? (router?.query?.search as string) : "",
      page: router?.query?.page ? parseInt(router?.query?.page as string) : 1,
    });

  //total photos
  //unsplash route
  const totalPexelPhotos: number = pexelData?.total_results
    ? pexelData?.total_results
    : 0;
  const totalUnsplashPhotos: number =
    (unsplashData?.response?.results.length as number) !== 0
      ? (unsplashData?.response?.total as number)
      : 0;

  console.log(unsplashLoading || pexelLoading);

  return (
    <div className="my-20 w-full">
      {unsplashLoading || pexelLoading ? (
        <div className="mt-6 flex w-full justify-center">
          <Image src={loadingIcon} alt="loading..." className="h-7 w-7" />
        </div>
      ) : null}

      {!pexelData?.photos || !unsplashData?.response?.results ? null : (
        <h2 className="text-3xl font-semibold">Photos</h2>
      )}

      <div className="mt-6 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
        {pexelData?.photos.map((p) => (
          <Link href={`/photo/pexels${p.id}`} key={p.id}>
            <div className="col-span-1 aspect-square w-full">
              <div className="relative h-full w-full cursor-pointer transition-opacity duration-300 ease-in-out hover:opacity-70">
                <Image
                  fill
                  src={p.src.large}
                  alt={p.alt as string}
                  className="object-cover"
                  blurDataURL={p.src.tiny}
                  placeholder="blur"
                />
              </div>
            </div>
          </Link>
        ))}

        {unsplashData?.response?.results.map((p) => (
          <Link href={`/photo/unsplash${p.id}`} key={p.id}>
            <div className="col-span-1 aspect-square w-full">
              <div className="relative h-full w-full cursor-pointer transition-opacity duration-300 ease-in-out hover:opacity-70">
                <Image
                  fill
                  src={p.urls.small}
                  alt={p.alt_description as string}
                  className="object-cover"
                  blurDataURL={p.urls.small}
                  placeholder="blur"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {totalPexelPhotos + totalUnsplashPhotos > 0 && (
        <Pagination totalPhotos={totalPexelPhotos + totalUnsplashPhotos} />
      )}
    </div>
  );
};

export default PhotoResults;
