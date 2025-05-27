
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { username, password } = await request.json();
  const isAuthenticated = username === 'admin' && password === 'password123';
  if (isAuthenticated) {
    const response = NextResponse.json({ success: true });
    response.cookies.set('auth', 'admin-auth', { httpOnly: true });
    return response;
  } else {
    return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
  }
}
