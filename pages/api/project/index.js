import connectDB from "../../../middleware/database";
import ProjectTeam from "../../../model/projectteam";

const handler = async (req,res)=>{

        if(req.method ==='GET'){
            try {
                const allteams = await ProjectTeam.find({});
                if(allteams){
                    res.status(200).json(allteams);
                }
                else{
                    res.status(422).json({message:'Technical Error'});
                }
            } catch (error) {
                res.status(500).json({message:error});
            }
        }
}

export default connectDB(handler);