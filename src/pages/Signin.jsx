import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {darkLogo} from '../assets/index'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { RotatingLines } from 'react-loader-spinner';
import { motion } from 'framer-motion';
import { Dispatch, useDispatch } from 'react-redux';
import { setUserInfo } from '../redux/amazonSlice';



const Signin = () =>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const auth = getAuth();
    const[firebaseErr,setFirebaseErr]=useState("");
    const[userEmailErr,setUserEmailErr]=useState("");
    const[userPassErr,setUserPassErr]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
      //Loading state starts
    const[Loading,setLoading]=useState(false);
    const[successMsg,setSuccessMsg]=useState("");
      // Error messages Start 
    const [errEmail,setErrEmail]=useState("");
    const [errPassword,setErrPassword]=useState("");
    const handleEmail=(e)=>{
        setEmail(e.target.value)
        setErrEmail("")
       }
       const handlePassword=(e)=>{
        setPassword(e.target.value)
        setErrPassword("")
       }
       const emailValidation=(email)=>{
        return String(email).toLowerCase().match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
      }

    const handleSignIn=(e)=>{
            e.preventDefault();
            if(!email){
                setErrEmail("Enter your E-mail")
               }else{
                 if(!emailValidation(email)){
                  setErrEmail("Enter a valid email")
                 }
               }
               if(!password){
                setErrPassword("Enter your password")
               }else{
                if(password.length < 6){
                  setErrPassword("password must be at list 6 characters")
                }
               }
               if(email && password){
                  signInWithEmailAndPassword(auth, email, password)
                  .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    dispatch(setUserInfo({
                      _id:user.uid,
                      userName:user.displayName,
                      email:user.email,
                      image:user.photoURL
                    }))
                    setLoading(false)
                    setSuccessMsg("Logged in successfully ! Welcome you back !")
                    setTimeout(()=>{
                      navigate("/")
                    },3000)
                    // ...
                  })
                  .catch((error) => {
                    const errorCode = error.code;
                    if(errorCode.includes("auth/invalid-email")){
                      setUserEmailErr("Invallid Email")
                    }
                    if(errorCode.includes("auth/wrong-password")){
                      setUserPassErr("Wrong password ! try again")
                    }
                    console.log("something went wrong ,try with correct credential")
                  });
                  setEmail("")
                  setPassword("")
               }
    }
  return (
    <div className='w-full'>
        <div className='w-full bg-gray-100 pb-10'>
           {
            successMsg ? (
              <div>
              <motion.p
              initial={{y:0, opacity:0}}
              animate={{y:0, opacity:1}}
              transition={{duration:0.5}}
              className='text-base font-titleFont font-semibold text-green-500 border-[1px]
              border-green-500 px-2 text-center'
              >{successMsg}</motion.p>
            </div>
            ):(
              <form className='w-[350px] mx-auto flex flex-col items-center'>
              <Link to="/" ><img className='w-32 m-5' src={darkLogo} alt="AmazonDarkLogo" /></Link>
              <div className=' w-full  border border-zinc-200p p-6'>
                  <h2 className='font-titleFont text-3xl font-medium mb-4 '>Sign In</h2>
                  <div className='flex flex-col gap-3'>
                      <div className='flex flex-col gap-2'>
                          <p className='text-sm font-medium'>E-mail or Mobile Phone Number</p>
                          <input 
                              className='w-full lowercase py-1 border border-zinc-400 px-2 text-base  
                                          rounded-sm outline-none focus-within:border-[#e77600] 
                                          focus-within:shadow-amazonInput duration-100' 
                              type="email"
                              onChange={handleEmail} />
                      </div>
                      {
                           errEmail &&(
                                   <p className='text-red-600 text-xs font-semibold tracking-wide 
                                        flex items-center gap-2 -mt-1.5'>
                                        <span className=' italic font-titleFont font-extrabold text-base'>!</span>
                                           {errEmail}
                                  </p>
                                       )
                        }
                      {
                           userEmailErr &&(
                                   <p className='text-red-600 text-xs font-semibold tracking-wide 
                                        flex items-center gap-2 -mt-1.5'>
                                        <span className=' italic font-titleFont font-extrabold text-base'>!</span>
                                           {userEmailErr}
                                  </p>
                                       )
                        }
                        
                      <div className='flex flex-col gap-2'>
                          <p className='text-sm font-medium'>Password</p>
                          <input 
                              className='w-full lowercase py-1 border border-zinc-400 px-2 text-base  
                                      rounded-sm outline-none focus-within:border-[#e77600] 
                                      focus-within:shadow-amazonInput duration-100' 
                              type="password"
                              autoComplete="on"
                              onChange={handlePassword} />
                      </div>
                      {
                           errPassword &&(
                                   <p className='text-red-600 text-xs font-semibold tracking-wide 
                                        flex items-center gap-2 -mt-1.5'>
                                        <span className=' italic font-titleFont font-extrabold text-base'>!</span>
                                           {errPassword}
                                  </p>
                                       )
                        }
                      {
                           userPassErr &&(
                                   <p className='text-red-600 text-xs font-semibold tracking-wide 
                                        flex items-center gap-2 -mt-1.5'>
                                        <span className=' italic font-titleFont font-extrabold text-base'>!</span>
                                           {userPassErr}
                                  </p>
                                       )
                        }
                      <button 
                          onClick={handleSignIn} 
                          className='w-full py-1.5 text-sm font-normal rounded-sm 
                                      bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border
                                      border-zinc-400 active:border-yellow-800 active:shadow-amazonInput'
                       >Continue</button>
                       {
                 Loading &&(
                        <div className='flex justify-center '>
                          <RotatingLines
                            strokeColor="#febd69"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="50"
                            visible={true}
                         />
                        </div>
              )
            }
                  </div>
                  <p className='text-xs text-black leading-5 mt-4 '>By continuing, you agree to Amazon's 
                      <span className='text-blue-600  hover:text-orange-700
                      hover:underline underline-offset-1'> Conditions of Use </span>
                       and 
                       <span className='text-blue-600  hover:text-orange-700
                      hover:underline underline-offset-1'> Privacy Notice</span>.
                  </p>
                  <p className=' text-xs cursor-pointer text-gray-600'>
                      <ArrowRightIcon />
                      <span className='text-blue-600 hover:text-orange-700
                      hover:underline underline-offset-1'>Need help?</span>
                  </p>
              </div> 
               <p className='w-full text-xs text-gray-600 mt-4 flex items-center'>
                  <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex'></span>
                  <span className='w-1/3 text-center'> New to Amazon? </span>
                  <span className='w-1/3 h-[1px] bg-zinc-400 inline-flex'></span>
               </p> 
              <Link className='w-full'  to="/registration">
              <button  className='w-full mt-2 py-1.5 text-sm font-normal rounded-sm 
                      bg-gradient-to-t from-slate-200 to-slate-100 hover:bg-gradient-to-b border
                      border-zinc-400 active:border-yellow-800 active:shadow-amazonInput'>
                      Create your Amazon account
              </button>
              </Link>
          </form>
            )
           }
        </div>
        <div className='w-full bg-gradient-to-t from-white via-white to-zinc-200 h-20
                         flex flex-col items-center justify-center gap-4'>
            <div className='flex items-center gap-6 justify-center'>
                <p className='text-xs text-blue-600 hover:text-orange-600
                            hover:underline underline-offset-1 cursor-pointer duration-100'>
                 Conditions of Use 
                </p>
                <p className='text-xs text-blue-600 hover:text-orange-600
                            hover:underline underline-offset-1 cursor-pointer duration-100'>
                  Privacy Notice  
                </p>
                <p className='text-xs text-blue-600 hover:text-orange-600
                            hover:underline underline-offset-1 cursor-pointer duration-100'>
                 Help  
                </p>
            </div>
            <p className='text-xs text-gray-600'>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
        </div>
    </div>
  )
}

export default Signin