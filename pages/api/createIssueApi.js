// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDB from "../../middleware/database";
import CreateIssue from "../../model/createIssue";
import ProjectTeam from "../../model/projectteam";
const handler = async (req, res) => {
  if (req.method == 'POST') {
    const {summary,description,reporter,assignee,issueType,issuePriority,selectedProjectTeam} = req.body;
    try {
      if (!summary || !description || !reporter || !assignee || !issueType || !issuePriority || !selectedProjectTeam) {
        res.status(400).json({ message: " All fields are Required!" });
      }
      const LatestIssue = await CreateIssue.findOne().sort({ _id: -1 });
      const ticketStatus = 'todo';
      let projectId;
      if (LatestIssue) {
        projectId = LatestIssue.projectId + 1;
      } else {
        projectId = 1;
      }
      const data = new CreateIssue({summary,description,reporter,assignee,issueType,issuePriority,projectId,ticketStatus});
      const result = await data.save();
      if(result){

        const findTeam = await ProjectTeam.findOne({"teamMembers.memberName":assignee});
        const teamMembers = findTeam.teamMembers;
        let member = {};
        let index = 0;
  
        for (let i = 0; i < teamMembers.length; i++) {
          if(teamMembers[i].memberName == assignee)
          {
            member = teamMembers[i];
            index = i;
          }
        }
        const work = await findTeam.addmemberWork({ IssueID:projectId,summary,ticketStatus}, index);
        if(work){
          res.status(201).json(result);
        }
        else{
          res.status(500).json({ message: "Technical Error, try again later" });
        }
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