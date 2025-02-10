// src/middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// Define which routes should be protected. This matcher protects:
// - /cart and anything under it
// - /checkout and anything under it
// - /studio and its subroutes
// - /product and all its subpaths
const isProtectedRoute = createRouteMatcher([
  '/cart(.*)',
  '/checkout(.*)',
  '/studio(.*)',
  '/product(.*)',
]);

export default clerkMiddleware(
  async (auth, req) => {
    // If the current route is one of the protected ones…
    if (isProtectedRoute(req)) {
      // This call will automatically redirect unauthenticated users.
      await auth.protect();
    }
    // If the user is authenticated (or the route isn’t protected), let the request proceed.
    return NextResponse.next();
  },
  // // Optionally enable debug logs in development to see more details in your terminal:
  // { debug: process.env.NODE_ENV === 'development' }
);

export const config = {
  matcher: [
    // Skip Next.js internals and static files.
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes.
    '/(api|trpc)(.*)',
  ],
};
