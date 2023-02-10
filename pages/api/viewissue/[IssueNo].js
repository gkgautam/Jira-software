import connectDB from "../../../middleware/database";
import CreateIssue from "../../../model/createIssue";

const handler = async (req, res)=>{


    if(req.method == 'GET'){
    
        const { IssueNo } = req.query;
        console.log('bachhan',req.query)
    
        try {
    
          const result = await CreateIssue.find({projectId:IssueNo});
    
          if(result){
            res.status(200).json(result);
          }
          else{
            res.status(500).json({message : "Technical Error, try again later"});
          }
        
        } catch (error) {
          console.log(error);
        }
      }

      if(req.method === 'PUT'){
        console.log('superman');
    
        const { IssueNo } = req.query;
        const { description, ticketStatus } = req.body;
        console.log('visa41',ticketStatus);
        try {
          // const result = await CreateIssue.find({projectId:IssueNo});
          const result = await CreateIssue.updateOne({projectId:IssueNo},{$set:{description,ticketStatus}});
          if(result){
            console.log('updateed apidata',result);
            res.status(200).json(result);
          }
          else{
            res.status(500).json({message : "Technical Error, try again later"});
          }
        
        } catch (error) {
          console.log(error);
        }
      }

}

export default connectDB(handler);