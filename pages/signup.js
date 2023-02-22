import { React, useState } from 'react'
import Link from 'next/link';


const Signup = () => {

  const [signupData, setSignupData] = useState({
    name: "",
    emailorpersonal: "",
    phone:"",
    password: ""
  });

  const getSignupData = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const signupUser = async (e) => {
    e.preventDefault();


    const { name, emailorpersonal, password,phone} = signupData;

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, emailorpersonal,phone, password })
      });

      const data = await res.json();

      if (data.message == "Required field") {
        window.alert("Required field");
      }
      else if (data.message == "Please enter valid email address") {
        window.alert("Invalid email id");
      }
      else if (data.message === "Email already Registered") {
        window.alert("Email already exist");
      }
      else if (data.message === "User Saved Success") {
        window.alert("Registration success");
        setSignupData({ name: "", emailorpersonal: "", password: "",phone: "" });
      }
      else {
        window.alert("Technical Error, try again later")
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>


      <div className="container-fluid py-5" style={{ backgroundColor: "rgb(7, 71, 166)" }}>
        <div className="container text-white">
          <div className="row d-flex justify-content-center">
            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-10 col-11">
              <form method='POST'>
                <legend className='h1 text-center'>Sign up</legend>

                <div className="mb-3">
                  <label htmlFor="fullname1" className="form-label">Full Name</label>
                  <input type="text" name='name' placeholder='Name' style={{ boxShadow: "none" }} className="form-control" id="fullname1" value={signupData.name} onChange={getSignupData} />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Personal Email Id or Company Email Id</label>
                  <input type="email" name="emailorpersonal" placeholder='Email address' style={{ boxShadow: "none" }} className="form-control" id="email" value={signupData.emailorpersonal} onChange={getSignupData} />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone</label>
                  <input type="tel" name="phone" placeholder="mobile" style={{ boxShadow: "none" }} className="form-control" id="phone" value={signupData.phone} onChange={getSignupData} />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" name="password" placeholder="Password" style={{ boxShadow: "none" }} className="form-control" id="password" value={signupData.password} onChange={getSignupData} />
                </div>

                <div className="mt-4">
                  <button type="submit" className="btn rounded-pill" style={{ backgroundColor: "#FE414D", color: "white", width: "130px", boxShadow: "none" }} onClick={signupUser}>Sign up</button>
                </div>

                <div className="mt-4">
                  <span>Already have an accout?</span> <Link href="/login"><a>Login</a></Link>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Signup