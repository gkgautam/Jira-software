// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDB from "../../middleware/database";
import CreateIssue from "../../model/createIssue";
const handler = async (req, res) => {
  if (req.method == 'POST') {
    const {summary,description,reporter,assignee,issueType,issuePriority} = req.body;
    try {
      if (!summary || !description || !reporter || !assignee) {
        res.status(400).json({ message: " All fields are Required!" });
      }
      const LatestIssue = await CreateIssue.findOne().sort({ _id: -1 });
      let projectId;
      if (LatestIssue) {
        projectId = LatestIssue.projectId + 1;
      } else {
        projectId = 1;
      }
      const data = new CreateIssue({summary,description,reporter,assignee,issueType,issuePriority,projectId});
      const result = await data.save();
      if(result){
        res.status(201).json(result);
      }
      else{
        res.status(500).json({ message: "Technical Error, try again later" });
      }
    }
    catch (error) {
      res.status(404).json({ message: "page not found" });
    }

  }
}

export default connectDB(handler);