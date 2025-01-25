"use client";

const SigninAccount = () => {

  const handleSigninAccount = () => {
    console.log("I am here in Signin ");
  };
  return (
    <>
      <button onClick={handleSigninAccount} className="text-blue-500 bg-black text-sm border-[1px] font-thin px-16 py-1 rounded-full flex justify-center items-center w-72 h-8">
        Signin
      </button>
    </>
  );
};

export default SigninAccount;
