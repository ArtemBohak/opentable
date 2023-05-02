import { FC, PropsWithChildren } from "react";
import Header from "./components/Header";

interface Props extends PropsWithChildren {
  params: { slug: string };
}

const RestaurantLayout: FC<Props> = ({ children, params }) => {
  return (
    <>
      <Header name={params.slug} />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        {children}
      </div>
    </>
  );
};

export default RestaurantLayout;
