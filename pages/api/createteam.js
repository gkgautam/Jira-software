import connectDB from "../../middleware/database";
import ProjectTeam from "../../model/projectteam";

const handler = async (req, res) => {

  if (req.method == "POST") {
    const { teamName, memberEmail, memberName } = req.body;

    const newMember = { memberEmail, memberName };

    if (teamName == "" || memberEmail == "") {
      res.status(422).json({ message: "Required fields" });
    } else {
      try {
        const teamExist = await ProjectTeam.findOne({ teamName });

        if (teamExist && teamExist.teamMembers.length > 0) {

          let flag = 0;

          for (let i = 0; i < teamExist.teamMembers.length; i++) {
            if (teamExist.teamMembers[i].memberEmail === memberEmail) {
              flag = 1;
            }
          }
          if (flag == 1) {
            return res.status(422).json({ message: "Member already exist in this team" });
          } 
                    
          else {
            await teamExist.addmember(newMember);
            const addMember = await teamExist.save();

            if (addMember) {
              res
                .status(201)
                .json({ message: "Member added success", addMember });
            } else {
              res.status(422).json({ message: "Technical Error" });
            }
          }
        } else {
          const newTeam = new ProjectTeam({
            teamId: Date.now(),
            teamName,
            teamMembers: { memberEmail, memberName },
          });
          const result = await newTeam.save();

          if (result) {
            res.status(201).json({ message: "Team Created", result });
          } else {
            res.status(422).json({ message: "Technical Error" });
          }
        }
      } catch (error) {
        res.status(500).json({ message: error });
      }
    }
  } else if (req.method == "GET") {
    const allteams = await ProjectTeam.find({});
    if (allteams) {
      res.status(200).json(allteams);
    } else {
      res.status(422).json({ message: "Technical Error" });
    }
  }
};

export default connectDB(handler);