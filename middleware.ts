import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const tempToken = req.cookies.get("temporary_token");
  if (tempToken) {
    return NextResponse.next();
  } else if (req.nextUrl.pathname !== "/") {
    return NextResponse.redirect(new URL("/", req.url));
  } else {
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
    "/agent",
    "/quiz",
  ],
};
