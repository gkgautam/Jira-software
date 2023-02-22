import connectDB from "../../middleware/database";
import User from "../../model/user";
import argon2 from "argon2";
import validator from 'validator';


const handler = async (req, res) => {

  if (req.method == "POST") {

    const { name, emailorpersonal,phone, password } = req.body;

    if (!name || !emailorpersonal || !password || !phone) {
      res.status(400).json({ message: "Required field" });
    }

    else if (!validator.isEmail(emailorpersonal)) {
      res.status(400).json({ message: "Please enter valid email address" });
    }

    else {
      try {
        const userFind = await User.findOne({ email: emailorpersonal });
        console.log('spiderman21',userFind);

        if (userFind) {
        console.log('spiderman23',userFind);
          res.status(400).json({ message: "Email already Registered" });
        }

        else {
        console.log('spiderman24',userFind);
            const hashedPassword = await argon2.hash(password);
            const newUser = new User({ name: name, email: emailorpersonal,phone:phone, password: hashedPassword });
            const result = await newUser.save();

            if (result) {
              res.status(201).json({ message: "User Saved Success" });
            }
            else {
              res.status(500).json({ message: "Technical Error, try again later" });
            }
        }




      }

      catch (error) {
        console.log(error);
      }
    }
  }
}

export default connectDB(handler);