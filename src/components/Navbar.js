export default function Navbar() {
    return (
        <header className="bg-gray-800 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="title-font font-medium text-white mb-4 md:mb-0">
                    <a href="#about" className="ml-3 text-xl">
                        SHARAYU
                    </a>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">


                </nav>
                <a href="#projects"
                    className="rounded-3xl mr-5 inline-flex text-white items-center bg-indigo-800 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded hover:text-lg base mt-4 md:mt-0">
                    Projects
                </a>
                <a href="#skills"
                    className="rounded-3xl  mr-5  inline-flex text-white items-center bg-indigo-800 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded hover:text-lg base mt-4 md:mt-0">
                    Skills
                </a>
                <a href="https://quaintrelle7.blogspot.com/" target=" _blank"
                    className="rounded-3xl mr-5 inline-flex text-white items-center bg-indigo-800 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded hover:text-lg base mt-4 md:mt-0">
                    Blog</a>

                <a href="#"
                    className="rounded-3xl mr-5 inline-flex text-white items-center bg-indigo-800 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded hover:text-lg base mt-4 md:mt-0">
                    Resume</a>
                <a
                    href="#contact"
                    className="rounded-3xl inline-flex text-white items-center bg-indigo-800 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded hover:text-lg base mt-4 md:mt-0">
                    Contact
                </a>
            </div>
        </header>
    );
}