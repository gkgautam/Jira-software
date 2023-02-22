import mongoose from "mongoose";

const mySchema = new mongoose.Schema({
  UserID:{
    type:Number,
    default:1
  },
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  phone:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }
});

mongoose.models = {};

const User = mongoose.model("user", mySchema);

export default User;