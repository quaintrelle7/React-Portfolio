import React from "react";
import Sharayu from "./assets/sharayu.jpeg"

function About() {
    return (<section id="about">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-2/3 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                    Hi, I'm Sharayu.
                    <br className="hidden lg:inline-block" />I love building amazing
                    stuffs.
                </h1>
                <p className="mb-8 leading-relaxed">

                </p>
                <h2 className="title-font sm:text-xl text-xl mb-4 font-medium text-white"> Current Focus: Blockchain| MERN </h2>

                <div className="flex justify-center">
                    <a
                        href="#contact"
                        className="inline-flex text-white bg-indigo-800 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Work With Me
                    </a>
                    <a
                        href="#projects"
                        className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                        Projects
                    </a>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/3">
                <img
                    className="myImg"
                    alt="Sharayu"
                    // src={require('./assets/sharayu.jpeg')}
                    src={Sharayu}
                />
            </div>
        </div>
    </section>);
}

export default About;