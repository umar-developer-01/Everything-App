import Image from "next/image";
import { auth } from "@/lib/auth";
import CreateAccount from "@/components/createAccount";
import SigninAccount from "@/components/signinAccount";
import XLogo from "@/public/xlogo.jpg";
import { redirect } from "next/navigation";
import GoogleLogo from "@/public/google.png";
import AppleLogo from "@/public/apple.png";

export default async function Home() {
  const session = await auth(); // Get the authenticated user session

  if (session) {
    redirect("/dashboard"); // ✅ Server-side redirect if not authenticated
  }

  return (
    <div className="h-screen w-screen bg-black flex flex-col">
      <div className="flex-1 flex gap-4">
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
              <CreateAccount />
              <div className="text-[11px] w-72 mt-2">
                By signing up, you agree to the{" "}
                <span className="span-text">Terms of Service</span> and{" "}
                <span className="span-text">Privacy Policy</span>, including{" "}
                <span className="span-text">Cookie Use</span>.
              </div>
            </div>

            <div className="mb-4">Already have an account?</div>
            <SigninAccount />
          </div>
        </div>
      </div>
      <div className="text-sm text-gray-500 flex justify-center gap-2 mb-4">
        <p>About</p>
        <p>Download the X app</p>
        <p>Help Center</p>
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
        <p>Accessibility</p>
        <p>Ads Info</p>
        <p>Blog</p>
        <p>Brand Resources</p>
        <p>Advertising</p>
        <p>Marketing</p>
        <p>X for Business</p>
        <p>Developers</p>
        <p>Directory</p>
        <p>Settings</p>
        <p>2025 X Corp.</p>
      </div>
    </div>
  );
}
