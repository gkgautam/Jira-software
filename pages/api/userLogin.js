import connectDB from "../../middleware/database";
import User from "../../model/user";
import argon2 from "argon2";
import validator from 'validator';
import jwt from 'jsonwebtoken';

const handler = async (req, res)=>{


  if(req.method == 'GET'){
    try {
      const data = await User.find({});
      res.status(200).json(data);

    } catch (error) {
      console.log(error)
    }
  }

  if(req.method == "POST"){

    const { email, password } = req.body;
console.log('himan',email,password);
    if(!email || !password){
      res.status(400).json({message:"Required Fields..."})
    }

    else if(!validator.isEmail(email)){
console.log('himan2',email,password);

      res.status(400).json({message:"Please enter valid email address"});
    }

    else{
      try {
console.log('himan3',email,password);
        
        const userFind = await User.findOne({email});

        if(!userFind){
console.log('himan4',email,password);
          res.status(400).json({message:"user registered nhi hai...."});
        }

        else{
console.log('himan5',email,password);
          const passMatch = await argon2.verify(userFind.password, password);

          if(!passMatch){
console.log('himan6',email,password);

            res.status(400).json({message:"Email id or password not matched !"});
          }
          else{
console.log('himan7',email,password);

              const token = jwt.sign({id:userFind._id}, process.env.TOKEN_SECRET_KEY, {
                expiresIn:"1h"
              });
              res.status(200).json({ message: "login success !", token });
          }
        }

      } catch (error) {
        console.log(error);
      }
    }
  }
}

export default connectDB(handler);