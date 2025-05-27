
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request) {
  const authCookie = request.cookies.get('auth');
  const isLoggedIn = authCookie && authCookie.value === 'admin-auth';

  if (!isLoggedIn && request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
