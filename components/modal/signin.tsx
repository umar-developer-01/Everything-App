"use client";
import Image from "next/image";
import { Dialog, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import GoogleLogo from "../../public/google.png";
import AppleLogo from "../../public/apple.png";
import XLogo from "../../public/xlogo.jpg";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Signin = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) => {
  const [enterInfo, setenterInfo] = useState();

  const handleInfo = (e) => {
    setenterInfo(e.target.value);
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
                    onClick={() => setOpen(false)}
                  />
                  <div className="mt-2">
                    <Image src={XLogo} alt="XLogo" className="h-12 w-14" />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="flex flex-col mt-4 px-16">
                    <div className="text-white text-2xl">Sign in to X</div>

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
                          onChange={handleInfo}
                          placeholder="Phone, email, or username"
                          className="input-box"
                        />
                      </div>
                    </div>

                    <div className="mt-8 flex flex-col  justify-center">
                      <button className="bg-white text-black text-sm font-thin px-16 py-1 rounded-full  w-72 h-8 ">
                        Next
                      </button>

                      <button className="bg-black text-white border border-white text-sm font-thin px-16 py-1 rounded-full  w-72 h-8 mt-4 ">
                        Forgot Password?
                      </button>
                    </div>

                    <div className="text-[14px] w-72 mt-8 text-white">
                      Don't have an account?{" "}
                      <span className="span-text">Signup</span>
                     
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
