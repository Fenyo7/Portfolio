import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import profilePic from "../assets/profilepic.jpg";

const Home = () => {
    return (
        <div name="home" className="flex h-screen bg-[#0d231c]">
            
            <div className="flex-1 flex justify-end my-[300px]">
                <div className="max-w-[800px] px-8">
                    <p className="text-[#FFF8E7]">Hi, my name is</p>
                    <h1 className="text-4xl sm:text-7xl font-bold text-[#D4AF37]">
                        Levente Fenyvesi
                    </h1>
                    <h2 className="sm:text-7xl font-bold text-[#FFF8E7]">
                        I'm a Full Stack Developer.
                    </h2>
                    <p className="text-[#FFF8E7] py-4">
                        I’m a full-stack developer specializing in building (and
                        occasionally designing) exceptional digital experiences.
                        Currently, I’m focused on building responsive full-stack
                        web applications.
                    </p>
                    <div>
                        <Link
                            to="work"
                            smooth={true}
                            duration={500}
                            className="w-32 text-[#FFF8E7] group border-2 px-6 py-3 my-2 flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37]"
                        >
                            Projects
                            <span className="group-hover:rotate-90 duration-300">
                                <HiArrowNarrowRight className="ml-3" />
                            </span>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex-1 flex justify-center items-center">
                <img
                    src={profilePic}
                    alt="Levente Fenyvesi"
                    className="max-h-[600px] rounded-lg shadow-lg"
                />
            </div>
        </div>
    );
};

export default Home;
