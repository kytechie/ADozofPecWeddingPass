import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Protect every admin page except the login page
  if (
    pathname.startsWith("/admin") &&
    !pathname.startsWith("/login")
  ) {
    const hasSession = request.cookies
      .getAll()
      .some((cookie) => cookie.name.startsWith("sb-"));

    if (!hasSession) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};