import connectDB from "../../../middleware/database";
import ProjectTeam from "../../../model/projectteam";

const handler = async (req,res)=>{

    if(req.method==='GET'){
        const {teamId} = req.query;
        try {
            const team = await ProjectTeam.findOne({teamId:teamId});
            if(team){
                res.status(200).json(team);
            }
            else{
                res.status(422).json({message:'Team not found'});
            }
            
        } catch (error) {
            res.status(500).json({message:'server error'});
        }
    }
}

export default connectDB(handler);