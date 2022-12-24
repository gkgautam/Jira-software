// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDB from "../../middleware/database";
import CreateIssue from "../../model/createIssue";
const handler = async (req, res) => {
  if(req.method == 'POST'){
    const {} = req.body;
  }
}

export default connectDB(handler);