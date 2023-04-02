import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {darkLogo} from '../assets/index'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



function Registration() {

  const auth = getAuth();


  const[clientName,setClientName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[cPassword,setCPassword]=useState("");

  // Error messages Start
  const[errClientName,setErrClientName]=useState("");
  const[errEmail,setErrEmail]=useState("");
  const[errPassword,setErrPassword]=useState("");
  const[errCPassword,setErrCPassword]=useState("");

// Handle function Start 
 const handleName=(e)=>{
  setClientName(e.target.value)
  setErrClientName("")
 }
 const handleEmail=(e)=>{
  setEmail(e.target.value)
  setErrEmail("")
 }
 const handlePassword=(e)=>{
  setPassword(e.target.value)
  setErrPassword("")
 }
 const handleCPassword=(e)=>{
  setCPassword(e.target.value)
  setErrCPassword("")
 }


//  Email validation start

const emailValidation=(email)=>{
  return String(email).toLowerCase().match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
}

  const handleRegistration=(e)=>{
    e.preventDefault();
   if(!clientName){
    setErrClientName("Enter Your name");
   }
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
   if(!cPassword){
    setErrCPassword("Confarm your password")
   }else{
    if(cPassword !== password){
      setErrCPassword("Password not match")
    }
   }
   if(clientName && email && emailValidation(email) && password && password.length >= 6 && 
   cPassword && cPassword === password ){
    // console.log(clientName,email, password ,cPassword)
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error);

          // ..
        });

// ------------------------FireBase Registra End Here----------------------------------------

    setClientName("")
    setEmail("")
    setPassword("")
    setCPassword("")
   }
    
  }
  return (
    <div className='w-full '>
      <div className='w-full bg-gray-100 pb-10'>
        <form className='w-[350px] mx-auto flex flex-col items-center'>
                <Link to="/" ><img className='w-32 m-5' src={darkLogo} alt="AmazonDarkLogo" /></Link>
                <div className=' w-full  border border-zinc-200p p-6'>
          <h2 className='font-titleFont text-3xl font-medium mb-4'>
            Create Account
          </h2>
          <div className='flex flex-col gap-3'>
               <div className='flex flex-col gap-2'>
                  <p className='text-sm font-medium'>Your name</p>
                   <input
                    className='w-full  py-1 border border-zinc-400 px-2 text-base  
                              rounded-sm outline-none focus-within:border-[#e77600] 
                              focus-within:shadow-amazonInput duration-100' 
                    type="text" 
                    value={clientName}
                    onChange={handleName}
                    />
                </div>
                {
                   errClientName &&(
                         <p className='text-red-600 text-xs font-semibold tracking-wide 
                          flex items-center gap-2 -mt-1.5'>
                            <span className=' italic font-titleFont font-extrabold text-base'>!</span>
                          {errClientName}
                          </p>
                       )
                  }

               <div className='flex flex-col gap-2'>
                  <p className='text-sm font-medium'>Email or mobile phone number</p>
                   <input 
                    className='w-full  py-1 border border-zinc-400 px-2 text-base  
                            rounded-sm outline-none focus-within:border-[#e77600] 
                            focus-within:shadow-amazonInput duration-100' 
                    type="email" 
                    value={email}
                    onChange={handleEmail}
                    />
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
               <div className='flex flex-col gap-2'>
                  <p className='text-sm font-medium'>Password</p>
                   <input 
                    className='w-full  py-1 border border-zinc-400 px-2 text-base  
                            rounded-sm outline-none focus-within:border-[#e77600] 
                            focus-within:shadow-amazonInput duration-100' 
                    type="password"
                    value={password}
                    onChange={handlePassword}
                     />
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
                <div className='flex flex-col gap-2'>
                    <p className='text-sm font-medium'>Re-enter Password</p>
                    <input 
                      className='w-full  py-1 border border-zinc-400 px-2 text-base  
                              rounded-sm outline-none focus-within:border-[#e77600] 
                              focus-within:shadow-amazonInput duration-100' 
                      type="password"
                      value={cPassword}
                      onChange={handleCPassword}
                      />
               <p className='text-xs text-gray-600 leading-5 mt-0 '>
                  Passwords must be at least 6 characters.
               </p>
                  </div>
                  {
                   errCPassword &&(
                         <p className='text-red-600 text-xs font-semibold tracking-wide 
                          flex items-center gap-2 -mt-1.5'>
                            <span className=' italic font-titleFont font-extrabold text-base'>!</span>
                          {errCPassword}
                          </p>
                       )
                  }
                       
             <button 
                onClick={handleRegistration} className='w-full py-1.5 text-sm font-normal rounded-sm 
                        bg-gradient-to-t from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border
                        border-zinc-400 active:border-yellow-800 active:shadow-amazonInput'
               >Continue
              </button>
           </div>
           <p className='text-xs text-black leading-5 mt-4 '>By continuing, you agree to Amazon's 
                        <span className='text-blue-600  hover:text-orange-700
                        hover:underline underline-offset-1'> Conditions of Use </span>
                         and 
                         <span className='text-blue-600  hover:text-orange-700
                        hover:underline underline-offset-1'> Privacy Notice</span>.
                    </p>
            <div>
              <p className='text-xs text-black leading-5 '>Already have an account?
                  <Link to="/signin">
                    <span className='text-blue-600  hover:text-orange-700
                          hover:underline underline-offset-1'> Sign in<ArrowRightIcon />
                    </span> 
                  </Link>
               </p>
             </div>
             <p className='text-xs text-black -mt-2'>
                Buying for work? 
                <span className='text-blue-600  hover:text-orange-700
                        hover:underline underline-offset-1'>
                    Create a free business account
                </span>
             </p>
         </div>
        </form>
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

export default Registration