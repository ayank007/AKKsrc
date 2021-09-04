import React, {useEffect} from 'react';
import "./Validate.css";

const hideValidationModal = (e) => {
    const path = e.composedPath();
    if(path.some(el => el.id === 'validation')){
        return;
    }
    document.querySelector(".validation-bg").classList.remove("active");
    document.querySelector("body").classList.remove("noScroll");
}

export const showValidationModal = (type) => {
    document.querySelector(".validation-bg").classList.add("active");
    document.querySelector("body").classList.add("noScroll");
}

export const Validate = () => {
    useEffect(()=>{
        document.querySelector(".validation-bg").addEventListener("click", hideValidationModal);
    });

    return(
        <div className="validation-bg w-full h-screen pointer-events-none opacity-0 z-50 fixed top-0 left-0 flex items-center justify-center transition duration-300">
            {/* <div className="h-screen w-full flex justify-center items-center absolute top-1/2 transform -translate-y-1/2 left-0"> */}
                <div id="validation" className="validation w-96 max-w-full h-auto bg-white rounded-2xl z-10 p-4 transform -translate-y-20 transition duration-500">
                    <input type="text" className="w-full h-9 rounded my-2 px-4" placeholder="Your Name" />
                    <div className="my-2 flex gap-3 justify-center items-center">
                        <select className="h-9 rounded w-28 px-3">
                            <option value="3">3rd year</option>
                            <option value="2">2nd year</option>
                            <option value="1">1st year</option>
                        </select>
                        <select className="h-9 rounded w-28 px-3">
                            <option value="hons">Honours</option>
                            <option value="pass">Pass</option>
                        </select>
                        <input className="h-9 rounded w-28 px-3" min="1" type="number" placeholder="Roll" />
                    </div>
                    <button type="button" className="mt-2 bg-blue-700 rounded py-1 px-4 text-white cursor-pointer">Process</button>
                </div>
            {/* </div> */}
        </div>
    );
}