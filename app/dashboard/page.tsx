import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Logout from "@/components/logout";
import LeftSidebar from "@/components/sidebars/leftSidebar";

export default async function Dashboard() {
  const session = await auth(); // Get the authenticated user session

  if (!session) {
    redirect("/"); // ✅ Server-side redirect if not authenticated
  }

  return (
    <>
      {/* <div className="max-w-2xl mx-auto mt-10">
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <p className="mt-4">
          Welcome, <strong>{session?.user?.name || "User"}</strong>{" "}
        </p>
        <p>Email: {session?.user?.email}</p> */}
        {/* <Logout /> */}
      {/* </div> */}
      <div className="h-screen w-screen bg-black">
        <div className="h-full w-full grid grid-cols-10 sm:px-[20px] md:px-[100px] lg:px-[200px]">
          <div className="col-span-2  bg-black border-r border-white-800">
            <LeftSidebar />
          </div>
          <div className="col-span-5  bg-blue-300">B</div>
          <div className="col-span-3 bg-green-300">C</div>
        </div>
      </div>
    </>
  );
}
