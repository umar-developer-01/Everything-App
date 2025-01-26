"use client";
import Image from "next/image";
import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import XLogo from "../../public/xlogo.jpg";

import { XMarkIcon } from "@heroicons/react/24/outline";

const Signup = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleName = (e: any) => {
    setName(e.target.value);
  };

  const handlEmail = (e: any) => {
    setEmail(e.target.value);
  };
  return (
    <>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-10"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="bg-black">
                {/* Heading and a Cross */}
                <div className="relative flex justify-center">
                  <XMarkIcon
                    className="text-white h-8 w-8 absolute top-2 left-2"
                    onClick={() => setOpen(false)}
                  />
                  <div className="mt-2">
                    <Image src={XLogo} alt="XLogo" className="h-12 w-14" />
                  </div>
                </div>

                <div className="flex flex-col mt-4 px-16">
                  <div className="text-white text-2xl">Create Your Account</div>

                  <div className="flex flex-col gap-6 mt-6">
                    <input
                      value={name}
                      onChange={handleName}
                      placeholder="Name"
                      className="input-box"
                    />
                    <input
                      value={email}
                      onChange={handlEmail}
                      placeholder="Email"
                      className="input-box"
                    />
                  </div>

                  <div className="mt-6">
                    <div className="text-white text-sm">Date of Birth</div>
                    <div className="text-xs text-gray-500 mt-2">
                      {" "}
                      This will not be shown be publicly. Confirm your own age,
                      even if this account is for a business, a pet, or
                      something else.
                    </div>
                    <div className="mt-2">

                    </div>
                  </div>
                </div>

                <button className="">Next</button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};
export default Signup;

{
  /* <div className="bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
              

                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    {/* <DialogTitle
                      as="h3"
                      className="text-base font-semibold text-gray-900"
                    > */
}
{
  /* Deactivate account */
}

{
  /* </DialogTitle> */
}
{
  /* <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you sure you want to deactivate your account? All of
                        your data will be permanently removed. This action
                        cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>
              </div> */
}
{
  /* <div className="bg-black px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                  Deactivate
                </button>
                <button
                  type="button"
                  data-autofocus
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div> */
}
