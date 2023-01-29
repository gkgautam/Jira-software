import connectDB from "../../middleware/database";
import CreateIssue from "../../model/createIssue";

const handler = async (req, res)=>{


    if(req.method == 'GET'){
    
        const { viewIssue } = req.query;
    
        try {
    
          const result = await CreateIssue.find({projectId:'3'});
    
          if(result){
            res.status(201).json(result);
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