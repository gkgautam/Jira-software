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
      const foundedProjecTeam = await ProjectTeam.findOne({teamId:selectedProjectTeam});
      // const foundedProjecTeam2 = await ProjectTeam.find({$and:[{"teamMembers.memberName":assignee}],teamId:selectedProjectTeam});
      // console.log('Foundedteam:',foundedProjecTeam.teamMembers);
      let  foundedMember3;
      const foundedMember = foundedProjecTeam.teamMembers.map((item)=>{
        if(item.memberName === assignee){
          foundedMember3 = item;
        }
        // return (item.memberName);
      });
      // console.log(foundedMember3);
      // const foundedMember = foundedProjecTeam.findOne({memberEmail:'john@gmail.com'});
      // const updatedProjectTeam = await ProjectTeam.updateOne({teamId:selectedProjectTeam},{$set:{description,ticketStatus}});
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