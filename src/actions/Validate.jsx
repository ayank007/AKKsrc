import React, {useEffect} from 'react';
import "./Validate.css";

const hideValidationModal = (e) => {
    const path = e.composedPath();
    if(path.some(el => el.id === 'validation')){
        return;
    }
    document.querySelector(".validation-bg").classList.remove("active");
}

export const showValidationModal = (type) => {
    document.querySelector(".validation-bg").classList.add("active");
}

export const Validate = () => {
    useEffect(()=>{
        document.querySelector(".validation-bg").addEventListener("click", hideValidationModal);
    });

    return(
        <div className="validation-bg w-full h-full pointer-events-none opacity-0 z-50 fixed top-0 left-0 flex items-center justify-center transition duration-300">
            <div id="validation" className="validation w-96 max-w-full h-auto bg-white rounded-2xl z-10 p-4 transform -translate-y-20 transition duration-500">
                <input type="text" className="w-full h-9 rounded my-2 px-4" placeholder="Your Name" />
                <div className="my-2 flex gap-3 justify-center items-center">
                    <input className="h-9 rounded w-28 px-3" maxLength="4" type="tel" placeholder="Year" />
                    <select className="h-9 rounded w-28">
                        <option value="hons">Honours</option>
                        <option value="pass">Pass</option>
                    </select>
                    <input className="h-9 rounded w-28 px-3" type="number" placeholder="Roll" />
                </div>
                <button type="button" className="mt-2 bg-blue-700 rounded py-1 px-4 text-white cursor-pointer">Process</button>
            </div>
        </div>
    );
}