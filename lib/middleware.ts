import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  // Extract token from cookies
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  console.log("🔍 Debug: Token in middleware →", token);

  // If no token, redirect to home page
  if (!token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next(); // Continue to the protected page
}

// Apply middleware to specific routes
export const config = {
  matcher: ["/dashboard"], // Protect the dashboard route
};
