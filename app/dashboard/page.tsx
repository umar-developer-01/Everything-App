import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  // const session = await auth(); // Get the current session

  // if (!session?.user) {
  //   redirect("/login"); // Redirect to login if not authenticated
  // }

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      {/* <p className="mt-4">Welcome, <strong>{session.user.name || "User"}</strong></p>
      <p>Email: {session.user.email}</p> */}
    </div>
  );
}
