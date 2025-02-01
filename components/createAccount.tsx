"use client";
import { useTheme } from "./context/index";
import SignupModal from "./modal/signup";

const CreateAccount = () => {
  const { popup, handlePopup } = useTheme();

  return (
    <>
      <button className="primary-btn" onClick={() => handlePopup("signup")}>
        Create Account
      </button>
      {popup === "signup" && (
        <SignupModal open={popup === "signup"} />
      )}
    </>
  );
};

export default CreateAccount;
