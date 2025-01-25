"use client"

const CreateAccount = () => {
    
  const handleCreateAccount = () => {
    console.log("I am here ");
  };
  return (
    <>
      <button className="primary-btn" onClick={handleCreateAccount}>
        Create Account
      </button>
    </>
  );
};

export default CreateAccount;
