import { auth } from "@/lib/auth";
import Logout from "@/components/logout";

export default async function Dashboard() {
  const session = await auth(); // Get the authenticated user session

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-4">
        Welcome, <strong>{session?.user?.name || "User"}</strong>
      </p>
      <p>Email: {session?.user?.email}</p>
      <Logout />
    </div>
  );
}
