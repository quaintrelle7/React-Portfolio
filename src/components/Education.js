import { places } from "../educationData";

export default function Education() {
    return (

        <section id="Education" className="bgEducation2">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">

                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
                        Education and Experience
                    </h1>

                    <div className="w-70 flex flex-wrap  mx-20">

                        {places.map((place) => (
                            <div className="sm:w-1/2  p-10 ">
                                <div className=" border-white border-2 bg-black h-40 w-30 pt-10 rounded-xl">
                                    <h1 className="text-white text-xl">{place.title}</h1>
                                    <h1 className="text-gray-300 text-lg" >{place.years}</h1>
                                    <h1 className="text-white text-xl">{place.work}</h1>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
}