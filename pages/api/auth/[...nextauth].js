import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import mongoose from 'mongoose';
import User from "../../../model/user";
import CredentialsProvider from "next-auth/providers/credentials";
import { verify } from "argon2";

const connectAuthDB = async (req, res)=>{
  if(mongoose.connections[0].readyState){
    return;
  }
  mongoose.connect(process.env.MONGO_DB_URI, { useUnifiedTopology: true, useNewUrlParser: true } );

};

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {

        connectAuthDB();
        
        const isUserExist = await User.findOne({ email: credentials.email });
        if (!isUserExist) {
          throw new Error("User does not exist!");
        }
        const checkPassword = await verify(
          isUserExist.password,
          credentials.password
        );
        if (!checkPassword || isUserExist.email !== credentials.email) {
          throw new Error("Invalid credentials!");
        }
        return isUserExist;
      },
    }),
  ],
});
