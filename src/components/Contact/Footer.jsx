import React from "react";

import "./Footer.css";

const Footer = () => {
    return(
        <footer className="bottom-0 left-0 w-full px-16">
            <div className="border-t border-gray-300 w-full py-5 flex justify-between flex-wrap gap-x-8 text-base font-semibold">
                <p>© 2021 | All Right Reserved</p>
                <p>designed developed by <a href="https://ayank007.github.io/Portfolio" rel="noreferrer" target="_blank" className=" text-blue-900 underline">ayank007</a></p>
            </div>
        </footer>
    );
}

export default Footer;