import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions ={
    session:{
        strategy: 'jwt',
        maxAge: 15,
    },
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials:{},
            authorize(credentials, req){
                const { username, password } = credentials as { username: string, password: string };
                if(username !== "sandy" || password !== "Sandy@4888"){
                    throw new Error("Login Failed, boooooooo "+username+" "+password);
                };
                return {
                    id: 'admin', 
                    name: 'sandy',
                    role: 'admin',
                };
            }
        })

    ],
    pages: {
        signIn : '../../auth/login',
    },
    callbacks: {
        jwt(params) {
            if(params.user?.role){
                params.token.role = params.user.role;
            }
            return params.token;
        },
        
    }
}

export default NextAuth(authOptions);