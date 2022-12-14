import React from "react";
import { skills } from "../skillsData";


export default function Skills() {
    return (
        <section id="skills" className="bgSkills" >
            <div className="flex-wrap container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="heading">
                        Skills &amp; Technologies
                    </h1>
                    <p className="paraText">
                        Skills I've gained while working and capable of working on, but, not limited to.
                    </p>
                </div>
                <div className="flex flex-wrap sm:mx-20 sm:mb-2 -mx-2 text-center  bg-black-500 ">
                    {skills.map((skill) => (
                        <div key={skill} className=" p-8 sm:w-1/2 2xl:w-1/6 lg:w-1/4">
                            <div className="skillGrid">
                                <div className="skillImg">
                                    <img
                                        alt="gallery"
                                        className=""
                                        src={skill.image}
                                    />
                                </div>
                                <div className=" mt-20 text-xl text-black text-center">
                                    {skill.title}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        <hr className="line"></hr>

        </section >);
}