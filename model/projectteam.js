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
    memberEmail:String,
    memberName:String
  }],
});

mongoose.models = {};

mySchema.methods.addmember = async function(memberdata){
  try{
    this.teamMembers = this.teamMembers.concat(memberdata);
    await this.save();
    return this.teamMembers;
  }
  catch(error){
    console.log(error);
  }
}


const ProjectTeam = mongoose.model("projectteam", mySchema);

export default ProjectTeam;