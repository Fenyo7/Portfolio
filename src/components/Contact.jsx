import React from "react";

const Contact = () => {
    return (
        <div
            name="contact"
            className="w-full h-screen bg-[#0d231c] flex justify-center items-center p-4"
        >
            <form
                method="POST"
                action="https://getform.io/f/67d152ff-0908-4fd5-84e6-cf6028cdcf5c"
                className="flex flex-col max-w-[600px] w-full"
            >
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-[#D4AF37] text-[#FFF8E7]">
                        Contact
                    </p>
                    <p className="text-[#3A6B6F] py-4">
                        Submit the form below or reach out via email -
                        fenyo.lev@gmail.com
                    </p>
                </div>
                <input
                    className="bg-[#3A6B6F] p-2"
                    type="text"
                    placeholder="Name"
                    name="name"
                />
                <input
                    className="my-4 p-2 bg-[#3A6B6F]"
                    type="email"
                    placeholder="Email"
                    name="email"
                />
                <textarea
                    className="bg-[#3A6B6F] p-2"
                    name="message"
                    rows="10"
                    placeholder="Message"
                ></textarea>
                <button className="text-[#FFF8E7] border-2 hover:bg-[#D4AF37] hover:border-[#D4AF37] px-4 py-3 my-8 mx-auto flex items-center">
                    Send
                </button>
            </form>
        </div>
    );
};

export default Contact;
