import { auth } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  const session = await auth(); // Get the authenticated user session

  if (!session?.user) {
    return NextResponse.redirect(new URL("/", req.url)); // Redirect if not authenticated
  }

  return NextResponse.next(); // Continue if authenticated
}

export const config = {
  matcher: ["/dashboard"], // Protect this route
};
