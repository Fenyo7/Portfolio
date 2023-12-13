import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import GitHub from "../assets/github.png";
import Docker from "../assets/docker.png";
import Angular from "../assets/angular.png";
import NetCore from "../assets/netcore.png";
import TypeScript from "../assets/typescript.png";
import CSharp from "../assets/csharp.png";
import PostgreSQL from "../assets/postgresql.png";
import Tailwind from "../assets/tailwind.png";

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
                            src={TypeScript}
                            alt="HTML icon"
                        />
                        <p className="my-4">TYPESCRIPT</p>
                    </div>
                    <div className="hover:scale-110 duration-500 text-[#0d231c] hover:text-[#FFF8E7]">
                        <img
                            className="w-20 mx-auto"
                            src={Angular}
                            alt="HTML icon"
                        />
                        <p className="my-4">ANGULAR</p>
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
                            src={NetCore}
                            alt="HTML icon"
                        />
                        <p className="my-4">.NET CORE</p>
                    </div>
                    <div className="hover:scale-110 duration-500 text-[#0d231c] hover:text-[#FFF8E7]">
                        <img
                            className="w-20 mx-auto"
                            src={CSharp}
                            alt="HTML icon"
                        />
                        <p className="my-4">C#</p>
                    </div>
                    <div className="hover:scale-110 duration-500 text-[#0d231c] hover:text-[#FFF8E7]">
                        <img
                            className="w-20 mx-auto"
                            src={GitHub}
                            alt="HTML icon"
                        />
                        <p className="my-4">GITHUB</p>
                    </div>
                    <div className="hover:scale-110 duration-500 text-[#0d231c] hover:text-[#FFF8E7]">
                        <img
                            className="w-20 mx-auto"
                            src={Docker}
                            alt="HTML icon"
                        />
                        <p className="my-4">DOCKER</p>
                    </div>
                    <div className="hover:scale-110 duration-500 text-[#0d231c] hover:text-[#FFF8E7]">
                        <img
                            className="w-20 mx-auto"
                            src={PostgreSQL}
                            alt="HTML icon"
                        />
                        <p className="my-4">POSTGRESQL</p>
                    </div>
                    <div className="hover:scale-110 duration-500 text-[#0d231c] hover:text-[#FFF8E7]">
                        <img
                            className="w-20 mx-auto"
                            src={Tailwind}
                            alt="HTML icon"
                        />
                        <p className="my-4">TAILWIND</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
