import { Router } from "express"
import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"


export default withAuth(
  
  function middleware(req) {
    return NextResponse.rewrite(req.url)
  },
  {
    callbacks: {
      authorized: ({ token }) => token?.role === "admin",
    },
  }
)

export const config = { matcher: ["/","/admission","/profiles"] }