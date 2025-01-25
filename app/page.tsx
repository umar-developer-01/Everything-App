import Image from "next/image";
import XLogo from "../public/xlogo.jpg";
import GoogleLogo from "../public/google.png";
import AppleLogo from "../public/apple.png";
export default function Home() {
  return (
    <div className="flex gap-4 h-screen w-screen bg-black">
      <div className="flex-1 flex justify-center items-center">
        <Image src={XLogo} alt="Picture of the x" height={500} width={500} />
      </div>
      <div className="flex-1 flex justify-center text-white">
        <div>
          <div className="text-6xl font-medium pt-32 ">Happening Now</div>
          <div className="text-2xl pt-10">Join Today.</div>

          <div className="py-5 flex flex-col items-start gap-3">
            <button className="signup-btn">
              <Image src={GoogleLogo} alt="Google" height={25} width={25} />
              Signup with Google
            </button>

            <button className="signup-btn">
              <Image src={AppleLogo} alt="Google" height={25} width={25} />
              Signup with Apple
            </button>

            <div className="mx-4 w-64 flex items-center gap-2">
              <div className="h-[0.1px] w-32 bg-white"></div>
              <div className="text-sm">or</div>
              <div className="h-[0.1px] w-32 bg-white"></div>
            </div>
            <button className="primary-btn">Create Account</button>
            <div className="text-[11px] w-72 mt-2">
              By signing up, you agree to the <span className="span-text">Terms of Service</span> and <span className="span-text">Privacy
              Policy</span>, including <span className="span-text">Cookie Use</span>.
            </div>
          </div>

          <div className="mb-4">Already have an account?</div>
          <button className="text-blue-500 bg-black text-sm border-[1px] font-thin px-16 py-1 rounded-full flex justify-center items-center w-72 h-8">Signin</button>
        </div>
      </div>
    </div>
  );
}

// <div className="flex-1 h-full w-full">
// <Image
//   src={XLogo}
//   alt="Picture of the author"
//   layout="responsive" /* Ensures the image scales properly */
//   objectFit="contain" /* Adjusts how the image fits inside its container */
// />
// </div>
