import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions ={
    session:{
        strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials:{},
            authorize(credentials, req){
                const { username, password } = credentials as { username: string, password: string };
                if(username !== "admin" || password !== "admin"){
                    alert("Invalid username or password");
                    throw new Error("Login Failed, boooooooo "+username+" "+password);
                };
                return {id: 'admin', name: 'admin'};
            }
        })

    ],
    pages: {
        signIn : '../../auth/login',
    }
}

export default NextAuth(authOptions);