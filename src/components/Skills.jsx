import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";

const Skills = () => {
    return (
        <div
            name="skills"
            className="w-full h-screen bg-[#0d231c] text-[#FFF8E7]"
        >
            {/* Container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-[#D4AF37] ">
                        Skills
                    </p>
                    <p className="py-4">
                        Technologies I have worked with so far:
                    </p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                    <div className="hover:scale-110 duration-500 text-[#0d231c] hover:text-[#FFF8E7]">
                        <img
                            className="w-20 mx-auto"
                            src={HTML}
                            alt="HTML icon"
                        />
                        <p className="my-4 ">HTML</p>
                    </div>
                    <div className="hover:scale-110 duration-500 text-[#0d231c] hover:text-[#FFF8E7]">
                        <img
                            className="w-20 mx-auto"
                            src={CSS}
                            alt="HTML icon"
                        />
                        <p className="my-4">CSS</p>
                    </div>
                    <div className="hover:scale-110 duration-500 text-[#0d231c] hover:text-[#FFF8E7]">
                        <img
                            className="w-20 mx-auto"
                            src={JavaScript}
                            alt="HTML icon"
                        />
                        <p className="my-4">JAVASCRIPT</p>
                    </div>
                    <div className="hover:scale-110 duration-500 text-[#0d231c] hover:text-[#FFF8E7]">
                        <img
                            className="w-20 mx-auto"
                            src={ReactImg}
                            alt="HTML icon"
                        />
                        <p className="my-4">REACT</p>
                    </div>
                    <div className="hover:scale-110 duration-500 text-[#0d231c] hover:text-[#FFF8E7]">
                        <img
                            className="w-20 mx-auto"
                            src={GitHub}
                            alt="HTML icon"
                        />
                        <p className="my-4">GITHUB</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
