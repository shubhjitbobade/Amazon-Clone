import React, { useState } from 'react';
import { logo } from '../../assets/index';
import HeaderBottom from './HeaderBottom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { allItems } from '../../constants';

const Header=()=>{
    const [showAll,setShowAll]=useState(false);
 
    return(
        <div className='w-full sticky top-0 z-50 '>
            <div className='w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4'>
            {/* ---------------------------------Image Start Here--------------------------------- */}
            <div className='headerHover'>
                 <img className='w-24 mt-2' src={logo} alt="logo" />
            </div>
            {/* ---------------------------------Image End Here--------------------------------- */}

            {/* ---------------------------------Dilivary Start Here--------------------------------- */}
            <div className='headerHover'>
                <LocationOnIcon />
                <p className='text-sm text-lightText font-light flex flex-col'>
                    Hello{" "} <span className='text-sm font-semibold -mt-1 text-whiteText '>Select your address
                </span></p>
            </div>
            {/* ---------------------------------Dilivary End Here--------------------------------- */}

            {/* ---------------------------------Search Start Here--------------------------------- */}
            <div className='h-10 rounded-md flex flex-grow relative'>
                <span onClick={()=>setShowAll(!showAll)} className='w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer
                duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md'>
                    All <span></span>
                <ArrowDropDownIcon />
                </span>
                {
                    showAll && (
                        <div>
                            <ul className='absolute w-56 h-80 top-10 left-0 overflow-y-scroll
                            overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex-col gap-1 z-50'>
                            
                                {
                                    allItems.map(item=>(
                                        <li className='text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent 
                                        hover:border-b-amazon_blue cursor-pointer duration-200' key={item._id}>{item.title}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    )
                }
                <input className='h-full text-base text-amazon_blue flex-grow ouline-none border-none px-2'
                 type="text"
                  />
                  <span className='w-12 h-full flex items-center justify-center bg-amazon_yellow 
                  hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md
                  rounded-br-md'>
                  <SearchIcon />
                  </span>
            </div>

            {/* ---------------------------------Search End Here--------------------------------- */}

            {/* ---------------------------------SignIn Start Here--------------------------------- */}

                <div className='flex flex-col items-start justify-center headerHover'>
                    <p className='text-xs text-lightText font-light'>Hello, Sign in</p>
                    <p className='text-sm font-semibold -mt-1 text-whiteText'> Accounts & List {" "}<span><ArrowDropDownIcon /></span></p>
                </div>
            {/* ---------------------------------SignIn End Here--------------------------------- */}
            {/* ---------------------------------Orders Start Here--------------------------------- */}

                <div className='flex flex-col items-start justify-center headerHover'>
                    <p className='text-xs text-lightText font-light'>Returns</p>
                    <p className='text-sm font-semibold -mt-1 text-whiteText'> & Orders{" "}<span><ArrowDropDownIcon /></span></p>
                </div>
            {/* ---------------------------------Orders End Here--------------------------------- */}
            {/* ---------------------------------Cart Start Here--------------------------------- */}
            <div className='flex  items-start justify-center headerHover relative'>
                <ShoppingCartIcon />
                <p className='text-xs font-semiold mt-3 text-whiteText'>
                    cart
                     <span className='absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue
                      rounded-full flex justify-center items-center'>0</span>
                </p>
            </div>
            {/* ---------------------------------Cart End Here--------------------------------- */}
       </div>
       <HeaderBottom />
        </div>
    )
}
export default Header;
