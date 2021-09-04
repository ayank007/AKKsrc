import React from "react";

import "./Contact.css";

import { Heading1 } from "../Headings/Heading1";

const Contact = () => {
    return(
        <div id="Contact" className="px-16 mb-8">
            <Heading1 heading="Contact" />
            <div className="content py-8 px-8">
                <p className="font-semibold">Could not get your query in FAQs section ?</p>
                <p>...then directly send message at WhatsApp or email between 7pm to 9pm</p>
                <p>If you are not entitled or may-be not a student, submit the form with all required details</p>
                <form method="POST" id="ContactForm" className="w-full py-5">
                    <div className="flex gap-x-5">
                        <input className="form-control" required type="text" placeholder="Name *" />
                        <input className="form-control" required type="text" placeholder="Phone / Email *" />
                    </div>
                    <textarea className="form-control my-5" required placeholder="Your agenda *"></textarea>
                    <button type="reset" className="px-10 py-2 rounded text-white bg-blue-900">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;