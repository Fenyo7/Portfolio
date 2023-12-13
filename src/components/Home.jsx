import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
    return (
        <div name="home" className="w-full h-screen bg-[#0d231c]">
            {/* Container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-[#FFF8E7]">Hi, my name is</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#D4AF37]">
                    Levente Fenyvesi
                </h1>
                <h2 className="text-4xl sm:text-7xl font-bold text-[#FFF8E7]">
                    I'm a Full Stack Developer.
                </h2>
                <p className="text-[#FFF8E7] py-4 max-w-[700px]">
                    I’m a full-stack developer specializing in building (and
                    occasionally designing) exceptional digital experiences.
                    Currently, I’m focused on building responsive full-stack web
                    applications.
                </p>
                <div>
                    <button className="text-[#FFF8E7] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#D4AF37] hover:border-[#D4AF37]">
                        Projects
                        <span className="group-hover:rotate-90 duration-300">
                            <HiArrowNarrowRight className="ml-3 " />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
