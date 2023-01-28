// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDB from "../../middleware/database";
import CreateIssue from "../../model/createIssue";
const handler = async (req, res) => {
  if (req.method == 'GET') {
    try {
    //   const data = await CreateIssue.find({},{_id:1}); jab kuch particular feild ko fetch krna ho from every object inside that array/database.
    //   const data = await CreateIssue.find({},{_id:1,asignee:1});
    //   const data = await CreateIssue.find({},{_id:1,assignee:1,reporter:1,issuePriority:1,});
    const data = await CreateIssue.find({});
    
      if(data){
        res.status(200).json(data);
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