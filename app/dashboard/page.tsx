import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Logout from "@/components/logout";
import RightSidebar from "@/components/sidebars/rightSidebar";
import LeftSidebar from "@/components/sidebars/leftSidebar";
import Main from "@/components/main/page";

export default async function Dashboard() {
  const session = await auth(); // Get the authenticated user session

  if (!session) {
    redirect("/"); // ✅ Server-side redirect if not authenticated
  }

  return (
    <>

      <div className="h-screen w-screen bg-black overflow-hidden">
        <div className="h-full w-full grid grid-cols-10 sm:px-[20px] md:px-[100px] lg:px-[200px]">

          {/* Left Sidebar - Fixed */}
          <div className="col-span-2 bg-black border-r border-gray-500 overflow-hidden">
            <LeftSidebar />
          </div>

          {/* Main Content - Scrollable */}
          <div className="col-span-5 border-r border-gray-500 overflow-y-auto h-full scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
            <Main />
          </div>

          {/* Right Section - Fixed */}
          <div className="col-span-3 bg-black overflow-hidden ">
            <RightSidebar />
          </div>

        </div>
      </div>

    </>
  );
}
