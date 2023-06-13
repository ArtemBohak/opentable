import React, { ChangeEvent, FC } from "react";

type Props = {
  inputs: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone: string;
    city: string;
  };
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  isSignin: boolean;
};

const AuthModalForm: FC<Props> = ({ inputs, handleChangeInput, isSignin }) => {
  return (
    <div>
      {isSignin ? null : (
        <div className="my-3 flex justify-between text-sm">
          <input
            type="text"
            className="border rounded p-2 w-[49%]"
            placeholder="First name"
            value={inputs.firstName}
            onChange={handleChangeInput}
            name="firstName"
          />
          <input
            type="text"
            className="border rounded p-2 w-[49%]"
            placeholder="Last name"
            value={inputs.lastName}
            onChange={handleChangeInput}
            name="lastName"
          />
        </div>
      )}
      <div className="my-3 flex justify-between text-sm">
        <input
          type="email"
          className="border rounded p-2 w-full"
          placeholder="Email"
          value={inputs.email}
          onChange={handleChangeInput}
          name="email"
        />
      </div>
      {isSignin ? null : (
        <div className="my-3 flex justify-between text-sm">
          <input
            type="text"
            className="border rounded p-2 w-[49%]"
            placeholder="Phone number"
            value={inputs.phone}
            onChange={handleChangeInput}
            name="phone"
          />
          <input
            type="text"
            className="border rounded p-2 w-[49%]"
            placeholder="City"
            value={inputs.city}
            onChange={handleChangeInput}
            name="city"
          />
        </div>
      )}
      <div className="my-3 flex justify-between text-sm">
        <input
          type="password"
          className="border rounded p-2 w-full"
          placeholder="Password"
          value={inputs.password}
          onChange={handleChangeInput}
          name="password"
        />
      </div>
    </div>
  );
};

export default AuthModalForm;
