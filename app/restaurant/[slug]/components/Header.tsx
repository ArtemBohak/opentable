import { FC } from "react";

type Props = {
  name: string;
};

const Header: FC<Props> = ({ name }) => {
  const renderTitle = () => {
    const nameArray = name.split("-");

    nameArray[nameArray.length - 1] = `(${nameArray[nameArray.length - 1]})`;

    return nameArray.join(' ')
  };

  return (
    <div className="h-96 overflow-hidden">
      <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
        <h1 className="text-7xl text-white capitalize text-shadow text-center">
          {renderTitle()}
        </h1>
      </div>
    </div>
  );
};

export default Header;
