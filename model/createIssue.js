import mongoose from "mongoose";

const mySchema = new mongoose.Schema({
  projectId:{
    type:Number,
    default:1
  },
  issueType:{
    type:String,
    required:true
  },
  issuePriority:{
    type:String,
    required:true,
  },
  summary:{
    type:String
  },
  description:{
    type:String
  },
  reporter:
    {
      name:{
        type:String,
        required:true
      },
      email:{
        type:String,
        required:true
      }
    },
  assignee:
    {
      name:{
        type:String,
        required:true
      },
      email:{
        type:String,
        required:true
      }
    },
  ticketStatus:{
    type:String,
    default:'todo'
  },
  projectTeamId:{
    type:Number
  }
},
{timestamps:true}
);

mongoose.models = {};

const CreateIssue = mongoose.model("createissue", mySchema);

export default CreateIssue;