import { NextResponse } from "next/server";

export async function middleware(req) {

  console.log("✅ Middleware loaded");

  const token = req.cookies.get("authjs.session-token")?.value || null;

  const { pathname } = req.nextUrl;

  /* console.log("🔒 TOKEN:", session); */
  console.log("🔍 PATH:", pathname);

  //throw new Error("Stop point");

  // Allow unauthenticated access to login and home
  if (pathname === "/" || pathname.startsWith("/login")) {
    return NextResponse.next();
  }

  // Protect /dashboard routes
  /* if (pathname.startsWith("/dashboard") && !session?.user) { */
  if (pathname.startsWith("/dashboard") && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};

/* export const config = {
  matcher: [
   // "/((?!api|_next/static|_next/image|.*\\.png$).*)",
    "/dashboard/:path*"
  ],
}; */
