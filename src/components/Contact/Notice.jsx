import React from 'react';
import { Heading1 } from '../Headings/Heading1';
import './Notice.css';

const Notice = () => {
    return(
        <div id="Notice" className="px-16">
            <Heading1 heading="Notice Board" />
            <div className="flex justify-end items-center pb-4 gap-x-4">
                <div className="px-8 py-2 rounded classSelect selectTag cursor-pointer border border-gray-300">
                    <p>Select Class {'\u00A0'} <i className="fa fa-angle-down"></i></p>
                    <div className="absolute pointer-events-none opacity-0 transform -translate-x-8 transition duration-300 z-10 bg-white rounded top-full right-0 py-3 w-40 border border-gray-300">
                        <div>Class I</div>
                        <div>Class II</div>
                        <div>Class III</div>
                    </div>
                </div>
                <div className="px-8 py-2 rounded yearSelect selectTag cursor-pointer border border-gray-300 pb-1">
                    <p>Select Year {'\u00A0'} <i className="fa fa-angle-down"></i></p>
                    <div className="absolute pointer-events-none opacity-0 transform -translate-x-8 transition duration-300 z-10 bg-white rounded top-full right-0 py-3 w-40 border border-gray-300">
                        <div>Year I</div>
                        <div>Year II</div>
                        <div>Year III</div>
                    </div>
                </div>
            </div>
            <div className="noticeBoard p-8 border border-gray-300 rounded-xl flex items-center justify-center w-full">
                <h1 className="text-xl font-bold noNoticeHeadline flex items-center justify-center">!! No Notice Currently !!</h1>
            </div>
            <br /><br />
        </div>
    );
}

export default Notice;