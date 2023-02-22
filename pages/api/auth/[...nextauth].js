import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import connectDB from "../../../middleware/database";
import User from "../../../model/user";
import CredentialsProvider from "next-auth/providers/credentials";
import { verify } from "argon2";
export default NextAuth({
    secret:process.env.NEXTAUTH_SECRET,
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        CredentialsProvider({
          name:"Credentials",
          async authorize(credentials,req){
            try {
              connectDB();
              const isUserExist = await User.findOne({email:credentials.email});
              if(!isUserExist){
                throw new Error('User does not exist!');
              }
              else{
                const checkPassword = await verify(isUserExist.password,credentials.password);
                if(!checkPassword || isUserExist.email!==credentials.email){
                  throw new Error('Invalid credentials!');
                }
                return isUserExist;
              }
            } catch (error) {
              throw new Error(error);
            }
          }
        })
      ]
});
