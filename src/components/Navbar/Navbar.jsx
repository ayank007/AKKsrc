import React from 'react';
import logo from "../../Images/logo.png";
import {showValidationModal} from '../../actions/Validate';

export const Nav1 = () => {
    return(
        <div className="flex px-16 justify-between items-center h-10 text-white bg-blue-900">
            <p className="font-normal text-sm">Welcome to the official website of Prof. Arun Kr. Koley</p>
            <div className="flex justify-center items-center h-full gap-6">
                <p className="cursor-pointer" onClick={()=>showValidationModal("email")}>
                    <i className="fa fa-envelope"></i>
                </p>
                <p className="cursor-pointer" onClick={()=>showValidationModal("whatsapp")}><i className="fa fa-whatsapp"></i></p>
                <p className="cursor-pointer" onClick={()=>showValidationModal("phone")}><i className="fa fa-phone"></i></p>
            </div>
        </div>
    );
}

export const Nav2 = () => {
    return(
        <div className="flex bg-white justify-between items-center h-16 border-b border-gray-400 px-16 font-semibold">
            <div className="logo">
                <img src={logo} alt="logo" className="transform h-10 -rotate-12" />
            </div>
            <nav className="flex items-center justify-center h-full gap-6">
                <div><a href="/">Home</a></div>
                <div><a href="/">About</a></div>
                <div><a href="/">College</a></div>
                <div><a href="/">Contact</a></div>
                <div><a href="/">FAQ</a></div>
                <div><a href="/">Notice</a></div>
            </nav>
            <div className="flex items-center justify-center h-full gap-6">
                <p className="border-r border-gray-400 pr-5 cursor-pointer">Available 7pm-9pm</p>
                <select name="lang" id="lang" className="cursor-pointer outline-none font-semibold border-0">
                    <option value="eng">Eng</option>
                    <option value="ben">Ben</option>
                </select>
            </div>
        </div>
    );
}