import React from "react";
import { FcGoogle } from "react-icons/fc";
import {RiErrorWarningFill} from "react-icons/ri";
import Link from "next/link";
import { useFormik } from "formik";
import loginValidate from "../lib/validate";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import atlas from '../public/jiraImages/atlas.svg';
import atlas2 from '../public/jiraImages/atlas2.svg';


export async function getServerSideProps(context) {
  const userSession = await getSession(context);

  if(userSession){
    return {
      redirect:{
        destination:"/dashboard",
        permanent: false
      }
    }
  }
     
    return{
      props:{ userSession }
    }
  }

const Login = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues:{
      email:"",
      password:""
    },
    validate:loginValidate,
    onSubmit
  });

  //custom validation
  const formik2 = useFormik({
    initialValues:{
      email:"govind2@gmail.com",
      password:"Test@123"
    },
    validate:loginValidate,
    onSubmit
  });

  async function handleGoogleSignin(){
    signIn("google", { callbackUrl: "http://localhost:3000/dashboard" });
  }

  // async function onSubmit(values){
  //   console.log(values);
  //   try {
  //     const res = await fetch("/api/userLogin", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify(values)
  //     });

  //     const data = await res.json();

  //     if (data.message == "Required Fields...") {
  //       alert("Required field");
  //     }

  //     else if (data.message == "Please enter valid email address") {
  //       alert("Please enter valid email address");
  //     }

  //     else if (data.message == "user registered nhi hai....") {
  //       alert("user registered nhi hai....");
  //     }

  //     else if (data.message == "Email id or password not matched !") {
  //       alert("Email id or password not matched !");
  //     }

  //     else if (data.message == "login success !") {
  //       alert("login success !");
  //       setCookie(null, 'token', data.token, { secure: true });
  //       router.push("/");
  //     }

  //     else {
  //       alert("Technical Error, try again later");
  //     }

  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  async function onSubmit(values){
    const status = await signIn("credentials", {
      redirect:false,
      email:values.email,
      password: values.password,
      callbackUrl:"/dashboard"
    });

    if(status.ok){
      router.push(status.url)
    }
    else{
      alert(status.error);
      console.log(status);
    }
  }

  // return (
  //   <>
  //     <div className="bg-[#FAFBFC] min-h-screen">
  //       <div className="container mx-auto py-8">
  //         <h1 className="text-[#0052CC] text-center font-bold text-4xl select-none">
  //           ATLASSIAN
  //         </h1>
  //         <div className="flex justify-center md:mt-12 sm:mt-8 mt-4">
  //           <form
  //             onSubmit={formik.handleSubmit}
  //             method="post"
  //             className="md:bg-white py-7 px-5 w-[400px] rounded-sm md:shadow-md flex flex-col place-items-center"
  //           >
  //             <div className="text-center">
  //               <p className="font-bold text-[#5E6C84]">
  //                 Log in to your account
  //               </p>
  //             </div>
  //             <div className="text-center mt-6 md:w-80 w-full">
  //               <input
  //                 type="email"
  //                 name="email"
  //                 placeholder="Enter email"
  //                 className={`w-full text-[#091E42] border-2 border-[#dfe1f6] ${formik.errors.email ? "border-[#BB4B3D] focus:border-[#BB4B3D]" : ""} p-2 rounded outline-none focus:border-[#528cd6] transition-colors ease-in-out bg-[#fafbfc] hover:bg-[#ebebeb] focus:bg-white`}
  //                 // onChange={formik.handleChange}
  //                 // value={formik.values.email}
  //                 {...formik.getFieldProps("email")}
  //               />

  //               {
  //                 formik.errors.email && formik.touched.email ? (<p className="absolute flex text-[#BB4B3D] text-sm gap-x-1  align-middle place-items-center">
  //                 <RiErrorWarningFill />
  //                 {formik.errors.email}
  //               </p>) : null

  //               }
                
  //             </div>
  //             <div className="text-center mt-6 my-2 md:w-80 w-full">
  //               <input
  //                 type="password"
  //                 name="password"
  //                 placeholder="Enter password"
  //                 className={`w-full text-[#091E42] border-2 border-[#dfe1f6] ${formik.errors.password ? "border-[#BB4B3D] focus:border-[#BB4B3D]" : ""} p-2 rounded outline-none focus:border-[#528cd6] transition-colors ease-in-out bg-[#fafbfc] hover:bg-[#ebebeb] focus:bg-white`}
  //                 // onChange={formik.handleChange}
  //                 // value={formik.values.email}
  //                 {...formik.getFieldProps("password")}
  //               />

  //               {
  //                 formik.errors.password && formik.touched.password ? (<p className="absolute flex text-[#BB4B3D] text-sm gap-x-1  align-middle place-items-center">
  //                 <RiErrorWarningFill />
  //                 {formik.errors.password}
  //               </p>) : null

  //               }
                
  //             </div>
  //             <div className="text-center mt-6 md:w-80 w-full">
  //               <button
  //                 type="submit"
  //                 className="w-full p-2 bg-[#0052CC] font-medium text-white rounded hover:bg-[#196be6] active:bg-[#154da1]"
  //               >
  //                 Submit
  //               </button>
  //             </div>
  //             <div className="text-center my-3 select-none  md:w-80 w-full">
  //               <p className="text-[14px] text-[#97A0AF]">OR</p>
  //             </div>
  //             <div className="text-center my-3 md:w-80 w-full">
  //               <button
  //                 type="button"
  //                 onClick={handleGoogleSignin}
  //                 className="w-full flex flex-row justify-around text-center place-items-center p-2 bg-white font-medium drop-shadow-md rounded hover:bg-[#FAFBFC] text-[#42526E]"
  //               >
  //                 <FcGoogle size={20} className="" />
  //                 Continue with Google
  //               </button>
  //             </div>
  //             <div className="text-center my-3 md:w-80 w-full">
  //               <button
  //                 type="button"
  //                 className="w-full flex flex-row justify-around text-center place-items-center p-2 bg-white font-medium drop-shadow-md rounded hover:bg-[#FAFBFC] text-[#42526E]"
  //               >
  //                 <Image width={18} height={18} src="/microsoft-logo.svg" className="" alt="Microsoft-Image" />
  //                 Continue with Microsoft
  //               </button>
  //             </div>
  //             <div className="text-center my-3 md:w-80 w-full">
  //               {/* <button
  //                 type="button"
  //                 className="w-full flex flex-row justify-around text-center place-items-center p-2 bg-white font-medium drop-shadow-md rounded hover:bg-[#FAFBFC] text-[#42526E]"
  //               >
  //                 <Image width={18} height={18} src="/apple-logo.svg" className="" />
  //                 Continue with Apple
  //               </button> */}
  //             </div>
  //             {/* <div className="text-center my-3 md:w-80 w-full">
  //               <button
  //                 type="button"
  //                 className="w-full flex flex-row justify-around text-center place-items-center p-2 bg-white font-medium drop-shadow-md rounded hover:bg-[#FAFBFC] text-[#42526E]"
  //               >
  //                 <Image width={18} height={18}
  //                   src="/slack-logo.svg"
  //                   className="w-[18px] h-[18px]"
  //                 />
  //                 Continue with Slack
  //               </button>
  //             </div> */}
  //             <hr className="border-1 border-[#D5D8DE] md:w-80 w-full mt-6 mb-1" />
  //             <div className="flex justify-center gap-x-3 text-center my-3 md:w-80 w-full">
  //               <Link href={"#"} className="text-[#0052CC] hover:underline">
  //                 Can&apos;t log in?
  //               </Link>
  //               <p className="text-gray-500">&#8226;</p>
  //               <Link href={"/signup"} className="text-[#0052CC] hover:underline">
  //                 Sign up for an account
  //               </Link>
  //             </div>
  //           </form>
  //         </div>
  //         <div className="flex justify-center gap-x-3 text-center mt-3 mb-4 w-full">
  //           <Link href={"#"} className="text-[#0052CC] hover:underline text-sm">
  //             Privacy Policy
  //           </Link>
  //           <p className="text-gray-500">&#8226;</p>
  //           <Link href={"#"} className="text-[#0052CC] hover:underline text-sm">
  //             User Notice
  //           </Link>
  //         </div>
  //         <h1 className="text-[#42526E] text-center font-bold text-3xl select-none">
  //           ATLASSIAN
  //         </h1>
  //       </div>
  //     </div>
  //   </>
  // );

  return (
    <>
      <div className="" style={{backgroundColor:'#FAFBFC',minHeight:"100vh"}}>
        <div className="container mx-auto py-2">
          <div className="d-flex justify-content-center mt-md-3 mt-md-2 mt-3">
          
            <form
              onSubmit={formik.handleSubmit}
              method="post"
              className="bg-md-white py-1 px-5 shadow d-flex flex-column" style={{borderRadius:"10px", boxShadow:""}}
            >
              <div className="text-center">
          <Image src={atlas} alt="atlassian logo" width={250} />
                <p className="fw-bold" style={{color:"#5E6C84"}}>
                  Log in to your account
                </p>
              </div>
              <div className="text-center mt-1 w-md-80 w-100">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  className={`w-100 border border-2 ${formik.errors.email ? "border-[#BB4B3D] focus:border-[#BB4B3D]" : ""} p-2 rounded outline-none focus:border-[#528cd6] transition-colors ease-in-out bg-[#fafbfc] hover:bg-[#ebebeb] focus:bg-white`}
                  style={{
                    color:"#091E42",
                    borderColor:"#dfe1f6"
                  }}
                  {...formik.getFieldProps("email")}
                />

                {
                  formik.errors.email && formik.touched.email ? (<p className="absolute flex text-[#BB4B3D] text-sm gap-x-1  align-middle place-items-center">
                  <RiErrorWarningFill />
                  {formik.errors.email}
                </p>) : null

                }
                
              </div>
              <div className="text-center mt-3 my-2 w-md-80 w-100">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  className={`w-100 border-2 border ${formik.errors.password ? "border-[#BB4B3D] focus:border-[#BB4B3D]" : ""} p-2 rounded outline-none focus:border-[#528cd6] transition-colors ease-in-out bg-[#fafbfc] hover:bg-[#ebebeb] focus:bg-white`}
                  style={{
                    color:"#091E42",
                    borderColor:"#dfe1f6"
                  }}
                  {...formik.getFieldProps("password")}
                />

                {
                  formik.errors.password && formik.touched.password ? (<p className="absolute flex text-[#BB4B3D] text-sm gap-x-1  align-middle place-items-center">
                  <RiErrorWarningFill />
                  {formik.errors.password}
                </p>) : null

                }
                
              </div>
              <div className="text-center mt-3 w-md-80 w-100">
                <button
                  type="submit"
                  className="w-100 p-2 fw-medium text-white border-0 rounded hover:bg-[#196be6] active:bg-[#154da1]"
                  style={{backgroundColor:"#0052CC"}}
                >
                  Submit
                </button>
              </div>
              <div className="text-center my-1 select-none w-md-80 w-100">
                <p className="" style={{fontSize:"14px",color:"#97A0AF"}}>OR</p>
              </div>
              <button
                  onClick={formik2.handleSubmit}
                  type="submit"
                  className="w-100 p-2 fw-medium text-white border-0 rounded hover:bg-[#196be6] active:bg-[#154da1]"
                  style={{backgroundColor:"#0052CC"}}
                >
                  Guest visit
                </button>
              <div className="text-center my-1 w-md-80 w-full">
                <button
                  type="button"
                  onClick={handleGoogleSignin}
                  className="w-100 d-flex flex-row justify-content-around text-center align-items-center p-2 bg-white font-weight-medium shadow-sm border-0 rounded hover:bg-[#FAFBFC]" style={{color:"#42526E"}}
                >
                  <FcGoogle size={20} className="" />
                  Continue with Google
                </button>
              </div>
              <div className="text-center my-1 w-md-80 w-100">
                <button
                  type="button"
                  className="w-100 d-flex flex-row justify-content-around text-center align-items-center p-2 bg-white font-weight-medium shadow-sm border-0 rounded hover:bg-[#FAFBFC]" style={{color:"#42526E"}}
                >
                  <Image width={18} height={18} src="/microsoft-logo.svg" className="" alt="Microsoft-Image" />
                  Continue with Microsoft
                </button>
              </div>
              <div className="text-center my-3 md:w-80 w-full">
             
              </div>
              <div className="d-flex justify-content-center gap-3 text-center w-md-80 w-100">
                <Link href={"#"} className="hover:underline" style={{color:"#0052CC"}}>
                  Can&apos;t log in?
                </Link>
                <p className="text-gray-500">&#8226;</p>
                <Link href={"/signup"} className="text-[#0052CC] hover:underline">
                  Sign up for an account
                </Link>
              </div>
              <hr className="w-md-80 w-full mt-1 mb-1" style={{border:"1px solid gray"}} />
              <div className="text-center">
          <Image src={atlas2} alt="atlassian logo" width={150} />
         </div>
         <div className="d-flex justify-content-center gap-3 text-center mb-4 w-100">
            <Link href={"#"} className="text-[#0052CC] hover:underline text-sm">
              Privacy Policy
            </Link>
            <p className="text-gray-500">&#8226;</p>
            <Link href={"#"} className="text-[#0052CC] hover:underline text-sm">
              User Notice
            </Link>
          </div>
            </form>
            {/* <form onSubmit={formik2.handleSubmit}> */}
              {/* </form> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;