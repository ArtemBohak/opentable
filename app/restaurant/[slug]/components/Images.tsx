import Image from "next/image";
import { FC } from "react";

type Props = {
  images: string[];
  name: string;
};

const Images: FC<Props> = ({ images, name }) => {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
        {images.length === 1 ? "1 photo" : `${images.length} photos`}
      </h1>
      <div className="flex flex-wrap">
        {images.map((item, index) => (
          <div key={index} className="relative w-56 h-44 mr-1 mb-1">
            <Image
              fill
              src={item}
              alt={`${name}_${index + 1}`}
              sizes="(max-width: 768px) 60vw,
            (max-width: 1280px) 80vw,
            100vw"
              className="object-cover"
              // quality={40}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
