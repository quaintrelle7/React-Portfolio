import React from "react";
import { skills } from "../skillsData";


export default function Skills() {
    return (
        <section id="skills" >
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Skills &amp; Technologies
                    </h1>
                    <p className="paraText">
                        Skills I've gained while working and capable of working on, but, not limited to.
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 text-center">
                    {skills.map((skill) => (
                        <div key={skill} className="p-8 sm:w-1/4">
                            <div className="bg-indigo-800 rounded flex p-4 h-full text-center items-center">
                                <div className="flex h-20 w-20 items-center">
                                    <img
                                        alt="gallery"
                                        className=""
                                        src={skill.image}
                                    />
                                </div>
                                <div className="absolute mt-20 font-medium text-white">
                                    {skill.title}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >);
}