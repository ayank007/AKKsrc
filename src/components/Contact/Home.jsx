import React from 'react';
import "./Home.css";
import clg from "../../Images/clg.jpg";
import bookstore from "../../Images/bookstore.jpg";

const Home = () => {
    return(
        <div className="flex flex-nowrap gap-x-6 px-16 py-8" id="Home">
            <div className="homeLeft w-full rounded overflow-hidden h-full">
                <img src={clg} alt="clg" width="100%" />
            </div>
            <div className="homeRight w-full max-w-sm flex flex-col gap-y-6">
                <div className="rounded overflow-hidden h-1/2 flex items-center justify-center">
                    <a href="/">
                        <img src={clg} alt="college direction" />
                        <div className="layer absolute top-0 left-0 bg-black opacity-30 flex p-2 items-center justify-center w-full" style={{height:"100%"}}></div>
                        <div className="absolute top-1/2 left-1/2 font-bold text-white transform -translate-y-1/2 -translate-x-1/2">
                            <p className="absolute left-0 -top-4 text-lg">View</p>
                            <h1 className="text-5xl font-bold">College</h1>
                            <p className="absolute right-0 -bottom-7 text-lg">direction.</p>
                        </div>
                    </a>
                </div>
                <div className="rounded overflow-hidden h-1/2 flex items-center justify-center">
                    <a href="/">
                        <img src={bookstore} alt="bookstore" />
                        <div className="layer absolute top-0 left-0 bg-black opacity-40 flex p-2 items-center justify-center w-full" style={{height:"100%"}}></div>
                        <div className="absolute top-1/2 left-1/2 font-bold text-white transform -translate-y-1/2 -translate-x-1/2">
                            <p className="absolute left-0 -top-5 text-lg">Recommended</p>
                            <h1 className="text-5xl font-bold">Books</h1>
                            <p className="absolute right-0 -bottom-6 text-lg">lists.</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;