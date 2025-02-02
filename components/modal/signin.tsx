"use client";
import Image from "next/image";
import { Dialog, DialogPanel } from "@headlessui/react";
import { signIn } from "next-auth/react";
import { useTheme } from "@/components/context/index";
import { useRouter } from "next/navigation";
import { useState } from "react";
import GoogleLogo from "@/public/google.png";
import AppleLogo from "@/public/apple.png";
import XLogo from "@/public/xlogo.jpg";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Signin = ({ open }: { open: boolean }) => {
  const router = useRouter();
  const { handlePopup } = useTheme();
  const [enterInfo, setenterInfo] = useState<string>("");
  const [password, setpassword] = useState<string>("");
  const [showPassword, setshowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setenterInfo(e.target.value || "");
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setpassword(e.target.value || "");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email: enterInfo,
      password,
    });
    if (result?.error) {
      setError(result?.error || "Error in Signin");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <>
      {" "}
      <Dialog
        open={open}
        onClose={() => {}} // Prevent auto-close on backdrop click
        className="relative z-10"
      >
        <div
          className="fixed inset-0 bg-gray-500/75"
          onMouseDown={(e) => e.stopPropagation()} // Prevent clicks on backdrop from propagating
        />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              className="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
              onMouseDown={(e) => e.stopPropagation()} // Prevent clicks inside the modal from closing it
            >
              <div className="bg-black pb-10">
                {/* Heading and Cross */}
                <div className="relative flex justify-center">
                  <XMarkIcon
                    className="text-white h-8 w-8 absolute top-2 left-2"
                    onClick={() => handlePopup("")}
                  />
                  <div className="mt-2">
                    <Image src={XLogo} alt="XLogo" className="h-12 w-14" />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="flex flex-col mt-4 px-16">
                    <div className="text-white text-2xl">Sign in to X</div>
                    <form onSubmit={handleSubmit}>
                      <div className="mt-8">
                        <button className="signup-btn">
                          <Image
                            src={GoogleLogo}
                            alt="Google"
                            height={25}
                            width={25}
                          />
                          Signup with Google
                        </button>

                        <button className="signup-btn mt-4">
                          <Image
                            src={AppleLogo}
                            alt="Google"
                            height={25}
                            width={25}
                          />
                          Signup with Apple
                        </button>

                        <div className="mx-4 w-64 flex items-center gap-2 mt-2">
                          <div className="h-[0.1px] w-32 bg-white"></div>
                          <div className="text-sm text-white">or</div>
                          <div className="h-[0.1px] w-32 bg-white"></div>
                        </div>

                        <div className="flex flex-col gap-6 mt-4">
                          <input
                            value={enterInfo}
                            type="email"
                            onChange={handleInfo}
                            placeholder="Phone, email, or username"
                            className="input-box"
                          />
                          <div className="relative">
                            <input
                              value={password}
                              onChange={handlePassword}
                              placeholder="Password"
                              type={showPassword ? "text" : "password"}
                              className="input-box w-full"
                            />

                            {showPassword && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6 absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                onClick={() => setshowPassword(!showPassword)}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                              </svg>
                            )}

                            {!showPassword && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6 absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                onClick={() => setshowPassword(!showPassword)}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                                />
                              </svg>
                            )}
                          </div>
                        </div>
                        {error && <p className="text-red-500 mt-4">{error}</p>}
                      </div>

                      <div className="mt-8 flex flex-col  justify-center">
                        <button
                          type="submit"
                          className="bg-white text-black text-sm font-thin px-16 py-1 rounded-full  w-72 h-8 "
                        >
                          Next
                        </button>

                        <button className="bg-black text-white border border-white text-sm font-thin px-16 py-1 rounded-full  w-72 h-8 mt-4 ">
                          Forgot Password?
                        </button>
                      </div>
                    </form>

                    <div className="text-[14px] w-72 mt-8 text-white">
                      Don't have an account?{" "}
                      <span
                        className="span-text"
                        onClick={() => handlePopup("signup")}
                      >
                        Signup
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Signin;
