import { FC } from "react";

type Props = {
  description: string;
};

const Description: FC<Props> = ({ description }) => {
  return (
    <div>
      <div className="mt-4">
        <p className="text-lg font-light">{description}</p>
      </div>
    </div>
  );
};

export default Description;
