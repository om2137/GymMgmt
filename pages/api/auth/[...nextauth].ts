import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const user = process.env.USER; 
const pass = process.env.PASS;

const authOptions: NextAuthOptions ={
    session:{
        strategy: 'jwt',
        maxAge: 60*60*24,//valid 1 day
    },
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials:{},
            authorize(credentials, req){
                const { username, password } = credentials as { username: string, password: string };
                if(username !== user || password !== pass ){
                    throw new Error("Login Failed"+username+" "+password);
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