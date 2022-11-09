import { NextResponse } from "next/server";
import { jwtVerify } from "jose"

const JWT_SECRET = process.env.JWT_SECRET

export default async function middleware (req) {
    const { cookies, nextUrl, url } = req
    const jwt = cookies.get("token")

    if(nextUrl.pathname.includes("/profile")){
        if(jwt === undefined){
            return NextResponse.redirect(new URL("/account/login", url))    
        }   
        try {
            await jwtVerify(jwt, new TextEncoder().encode(JWT_SECRET))
            return NextResponse.next()
        } catch (error) {
            console.log("error",error)
            return NextResponse.redirect(new URL("/account/login", url))
        }
    }
    if(nextUrl.pathname.includes("/account/login")){
        if(jwt){
            return NextResponse.redirect(new URL("/", url))    
        }
        return NextResponse.next()
    }

}