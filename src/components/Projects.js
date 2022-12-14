import React from "react";
import { projects } from "../projectsData";

export default function Projects() {

    return (
        <section id="projects" className="bgSkills">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40 ">
                <div className="flex flex-col w-full mb-20">
                    <h1 className="heading">
                        Apps I've Built
                    </h1>
                    <p className="paraText">
                        Applications which I built for the learning purpose.These are excludes the applications built for the companies.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {projects.map((project) => (
                        <a
                            href={project.link}
                            target=" _blank"
                            key={project.image}
                            className="sm:w-1/1 lg:w-1/2 2xl:w-1/4 w-100 p-4">
                            <div className="flex-wrap flex relative">

                                <img
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={project.image}
                                />

                                <h1 className="absolute px-20 py-20 z-5 title-font text-center text-3xl font-medium text-white">
                                    {project.title}
                                </h1>

                                <div className="px-8 py-10 relative z-5 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-400 mb-1">
                                        {project.subtitle}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-white mb-3">
                                        {project.title}
                                    </h1>
                                    <p className="leading-relaxed">{project.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        <hr className="line"></hr>

        </section>


    );
}