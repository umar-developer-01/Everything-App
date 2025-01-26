"use client";
import { useState } from "react";
import SignupModal from "./modal/signup";
const CreateAccount = () => {
  const [open, setOpen] = useState(false);
  const handleCreateAccount = () => {
    setOpen(true);
    console.log("I am here ");
  };
  return (
    <>
      <button className="primary-btn" onClick={handleCreateAccount}>
        Create Account
      </button>
      {open && <SignupModal open={open} setOpen={setOpen} />}
    </>
  );
};

export default CreateAccount;
