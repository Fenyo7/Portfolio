import React from "react";

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-screen bg-[#0d231c] text-[#FFF8E7]"
        >
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-[#D4AF37]">
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-4xl font-bold">
                        <p>Hi. I'm Levente Fenyvesi, a junior fullstack developer graduate from GreenFox academy.</p>
                    </div>
                    <div className="text-[#3A6B6F]">
                        <p>
                            I'm an aspiring developer with a background in
                            computer science, having studied at both Óbuda and
                            ELTE Universities. While I paused my academic
                            journey and went to work at Samsung Göd, managing
                            critical operations in chemical loading, my love for
                            science and coding never faded. My passion for
                            technology and problem-solving led me to GreenFox
                            Academy, where I continued my studies in full-stack
                            development. Now, I'm excited to start my career as
                            a Junior Developer, learning new technologies,
                            meeting new people and collaborating on exciting
                            projects.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
