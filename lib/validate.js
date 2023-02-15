import validator from "validator";

export default function loginValidate(values){

  const errors = {};

  if(!values.email){
    errors.email = "Required";
  }
  else if (!validator.isEmail(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
}