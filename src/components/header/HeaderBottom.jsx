import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseIcon from '@mui/icons-material/Close';
import {motion} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import SideNavContent from './SideNavContent';
const HeaderBotton=()=>{
    const [sideBar,setSideBar]=useState(false);
    const ref=useRef();
    useEffect(()=>{
        document.body.addEventListener("click",(e)=>{
            if(e.target.contains(ref.current)){
                setSideBar(false);
            }
        })
    },[ref,sideBar])
    return(
       <div className="w-full px-4 h-[36px] bg-amazon_light text-white flex items-center">
    {/* ----------------------ListItems Start Here----------------------------- */}
        <div>
            <ul className="flex items-center gap-2 text-sm tracking-wide">
                <li onClick={()=>setSideBar(true)} className="headerHover flex items-center gap-1"><MenuIcon /> All</li>
                <li className="headerHover"> Amazon miniTV</li>
                <li className="headerHover"> Sell</li>
                <li className="headerHover"> Best Sellers</li>
                <li className="headerHover"> Mobiles</li>
                <li className="headerHover"> Customer Service</li>
                <li className="headerHover"> Today's Deals</li>
                <li className="headerHover"> Electronics</li>
            </ul>
        </div>
    {/* ----------------------ListItems End Here----------------------------- */}

    {/* ----------------------SideNav Start Here----------------------------- */}
    {
        sideBar && (
            <div className='w-full h-screen text-black  fixed top-0 left-0 bg-amazon_blue 
            bg-opacity-50 '>
                <div className='w-full h-full relative'>
                    <motion.div  ref={ref} initial={{x:-500,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:.5}}
                    className='w-[350px] h-full bg-white border border-black'>
                        <div className='w-full bg-amazon_light text-white  py-2 px-6 flex 
                        items-center gap-4'>
                            <AccountCircleIcon />
                            <h3>Hello, Sign In</h3>
                        </div>
                       <SideNavContent 
                       title="Digital Content & Devices"
                       one="Echo & Alexa"
                       two="Fire TV"
                       three="Kindle E-Readers & eBooks"
                       four="Audible Audobooks"
                       five="Amazon Prime video"
                       />
                       <SideNavContent 
                       title="Shop By category"
                       one="Mobile, Computers"
                       two="TV, Appliance,Electronics"
                       three="Men's Fashion "
                       four="Audible Audobooks"
                       five="Amazon Prime video"
                       />
                       <SideNavContent 
                       title="Program and Features"
                       one="Gift cards & Mobile Recharges"
                       two="Flight Tickets"
                       three="Clearance store"
                       />
                        <span onClick={()=>setSideBar(false)} className='cursor-pointer absolute top-0 left-[360px] w-7 h-7 text-black
                        flex items-center border bg-gray-200 hover:bg-red-500 hover:text-white duration-300'>
                        <CloseIcon />
                        </span>
                    </motion.div>
                </div>
            </div>
        )
    }
    {/* ----------------------SideNav End Here----------------------------- */}
       </div> 
    )
}
export default HeaderBotton;