import { useRouter } from "next/router";
import { type FC } from "react";
import { trpc } from "../../../utils/trpc";

const PhotoResults: FC = () => {
  //router
  const router = useRouter();

  //route
  const { data } = trpc.photo.getPexelPhotos.useQuery({
    search: router?.query?.search ? (router?.query?.search as string) : "",
    page: router?.query?.page ? parseInt(router?.query?.page as string) : 1,
  });

  return (
    <div className="mt-20 w-full">
      <h2 className="text-2xl font-semibold">Photos</h2>
    </div>
  );
};

export default PhotoResults;
