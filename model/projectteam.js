import mongoose from "mongoose";

const mySchema = new mongoose.Schema({
  teamId:{
    type:Number,
    default:1
  },
  teamName:{
    type:String,
    required:true
  },
  teamMembers:[{
    email:String,
    name:String
  }],
});

mongoose.models = {};

const ProjectTeam = mongoose.model("projectteam", mySchema);

export default ProjectTeam;