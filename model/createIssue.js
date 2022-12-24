import mongoose from "mongoose";

const mySchema = new mongoose.Schema({
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
  reporter:{
    type:String,
    required:true
  },
  assignee:{
    type:String,
    required:true
  }
},
{timestamps:true}
);

mongoose.models = {};

const CreateIssue = mongoose.model("createissue", mySchema);

export default CreateIssue;