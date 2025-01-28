"use client";
import Image from "next/image";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import XLogo from "../../public/xlogo.jpg";

import { XMarkIcon } from "@heroicons/react/24/outline";

import { useState, useEffect } from "react";

const Signup = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [selectedDay, setSelectedDay] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const [daysInMonth, setDaysInMonth] = useState<number[]>([]); // Store the list of days

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // Helper function to calculate the number of days in a month
  const calculateDaysInMonth = (month: string, year: string) => {
    if (!month || !year) return [];
    const monthIndex = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ].indexOf(month);

    if (monthIndex === -1) return []; // Invalid month

    const days = new Date(Number(year), monthIndex + 1, 0).getDate(); // Get the last day of the month
    return Array.from({ length: days }, (_, i) => i + 1); // Create an array of days
  };

  // Update days in the month whenever selectedMonth or selectedYear changes
  useEffect(() => {
    if (selectedMonth && selectedYear) {
      const days = calculateDaysInMonth(selectedMonth, selectedYear);
      setDaysInMonth(days);

      // Reset selectedDay if it exceeds the new days in the month
      if (Number(selectedDay) > days.length) {
        setSelectedDay("");
      }
    }
  }, [selectedMonth, selectedYear, selectedDay]);

  return (
    <>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-10"
      >
        <DialogBackdrop className="fixed inset-0 bg-gray-500/75" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel className="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              <div className="bg-black">
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
                      onChange={handleEmail}
                      placeholder="Email"
                      className="input-box"
                    />
                  </div>

                  <div className="mt-6">
                    <div className="text-white text-sm">Date of Birth</div>
                    <div className="text-xs text-gray-500 mt-2">
                      This will not be shown publicly. Confirm your own age,
                      even if this account is for a business, a pet, or
                      something else.
                    </div>
                    <div className="mt-4 flex flex-row gap-2">
                      <div className="w-3/6">
                        <select
                          value={selectedMonth}
                          onChange={(e) => setSelectedMonth(e.target.value)}
                          className="w-full p-1 border-2 border-gray-500 focus:outline-none focus:border-blue-500 rounded-md text-white bg-black"
                        >
                          <option value="">Month</option>
                          {[
                            "January",
                            "February",
                            "March",
                            "April",
                            "May",
                            "June",
                            "July",
                            "August",
                            "September",
                            "October",
                            "November",
                            "December",
                          ].map((month) => (
                            <option key={month} value={month}>
                              {month}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="w-1/6">
                        <select
                          value={selectedDay}
                          onChange={(e) => setSelectedDay(e.target.value)}
                          className="w-full p-1 border-2 border-gray-500 focus:outline-none focus:border-blue-500 rounded-md text-white bg-black"
                        >
                          <option value="">Day</option>
                          {daysInMonth.map((day) => (
                            <option key={day} value={day}>
                              {day}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="w-2/6">
                        <select
                          value={selectedYear}
                          onChange={(e) => setSelectedYear(e.target.value)}
                          className="w-full p-1 border-2 border-gray-500 focus:outline-none focus:border-blue-500 rounded-md text-white bg-black"
                        >
                          <option value="">Year</option>
                          {Array.from(
                            { length: 2025 - 1905 + 1 },
                            (_, index) => {
                              const year = 1905 + index;
                              return (
                                <option key={year} value={year}>
                                  {year}
                                </option>
                              );
                            }
                          )}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-10 flex justify-center">
                  <button className="bg-white text-black text-sm font-thin px-16 py-1 rounded-full  w-72 h-8 ">
                    Next
                  </button>
                </div>
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
