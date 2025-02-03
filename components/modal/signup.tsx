"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useTheme } from "@/components/context/index";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "@/lib/validations/index";

import { Dialog, DialogPanel } from "@headlessui/react";
import XLogo from "@/public/xlogo.jpg";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { formatDate, validateDate } from "@/lib/functions/date";

interface User {
  name: string;
  email: string;
  password: string;
}

const Signup = ({ open }: { open: boolean }) => {
  const router = useRouter();
  const { handlePopup } = useTheme();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const [error, setError] = useState<string | null>(null);
  const [showPassword, setshowPassword] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);

  const [selectedDay, setSelectedDay] = useState<string | undefined>();
  const [selectedMonth, setSelectedMonth] = useState<string>("");
  const [selectedYear, setSelectedYear] = useState<string | undefined>();
  const [dateError, setdateError] = useState<string | null>("");

  const [daysInMonth, setDaysInMonth] = useState<number[]>([]); // Store the list of days

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

  const onSubmit = async (data: User) => {
    setLoading(true);
    setError(null);
    setdateError(null);

    const payload = {
      selectedDay,
      selectedMonth,
      selectedYear,
    };

    const date = formatDate(payload);

    const { valid, dateObj, message } = validateDate(date);
    if (!valid) {
      setLoading(false);
      setdateError(message);
      return;
    }
    const response = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, date: dateObj }),
    });

    if (response.ok) {
      // ✅ Sign in the user immediately after successful signup
      await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false, // Prevents full-page reload
      });
      router.push("/dashboard"); // Redirect to dashboard after login
    } else {
      setLoading(false);
      setError("Signup failed");
    }
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
                <form onSubmit={handleSubmit(onSubmit)}>
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

                  <div className="flex flex-col mt-4 px-16">
                    <div className="text-white text-2xl">
                      Create Your Account
                    </div>

                    <div className="flex flex-col gap-6 mt-6">
                      <div>
                        <input
                          {...register("name")}
                          placeholder="Name"
                          className="input-box w-full"
                        />
                        {errors?.name && (
                          <p className="text-red-500 mt-2">
                            {errors?.name?.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <input
                          {...register("email")}
                          placeholder="Email"
                          className="input-box w-full"
                        />
                        {errors?.email && (
                          <p className="text-red-500 mt-2">
                            {errors?.email?.message}
                          </p>
                        )}
                      </div>

                      <div className="relative">
                        <input
                          {...register("password")}
                          placeholder="Password"
                          type={showPassword ? "text" : "password"}
                          className="input-box w-full"
                        />
                        {errors?.password && (
                          <p className="text-red-500 mt-2">
                            {errors?.password?.message}
                          </p>
                        )}

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
                      {error && <p className="text-red-500 mt-4">{error}</p>}
                      {dateError && (
                        <p className="text-red-500 mt-4">{dateError}</p>
                      )}
                    </div>
                  </div>

                  <div className="mt-10 flex justify-center">
                    <button
                      className="bg-white text-black text-sm font-thin px-16 py-1 rounded-full  w-72 h-8 "
                      disabled={loading}
                    >
                      {loading ? "Loading" : "Next"}
                    </button>
                  </div>
                </form>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Signup;
