"use client";

import { useState } from "react";
import SigninModal from "./modal/signin";

const SigninAccount = () => {
  const [open, setOpen] = useState(false);

  const handleSigninAccount = () => {
    setOpen(true);
  };

  return (
    <>
      <button
        onClick={handleSigninAccount}
        className="text-blue-500 bg-black text-sm border-[1px] font-thin px-16 py-1 rounded-full flex justify-center items-center w-72 h-8"
      >
        Signin
      </button>
      {open && <SigninModal open={open} setOpen={setOpen} />}
    </>
  );
};

export default SigninAccount;
