"use client";
import { useTheme } from "@/components/context/index";
import SigninModal from "@/components/modal/signin";

const SigninAccount = () => {
  const { popup, handlePopup } = useTheme();

  return (
    <>
      <button
        onClick={() => handlePopup("signin")}
        className="text-blue-500 bg-black text-sm border-[1px] font-thin px-16 py-1 rounded-full flex justify-center items-center w-72 h-8"
      >
        Signin
      </button>
      {popup === "signin" && <SigninModal open={popup === "signin"} />}
    </>
  );
};

export default SigninAccount;
