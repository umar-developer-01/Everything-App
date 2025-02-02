"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  const signOutFun = () => {
    signOut({ callbackUrl: "/" });
  };
  return (
    <button
      onClick={signOutFun}
      className="px-4 py-2 bg-red-500 text-white rounded"
    >
      Logout
    </button>
  );
}
