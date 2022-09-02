import { places } from "../educationData";

export default function Education() {
    return (

        <section id="Education" className="">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">

                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Education and Experience
                    </h1>

                    <div className="flex flex-wrap -m-4">
                        <div className="flex relative">

                            {places.map((place) => (
                                <div className="educationGrid">
                                    <div className="educationTile">
                                        <h1 className="">{place.title}</h1>
                                        <h1>{place.years}</h1>
                                        <h1>{place.work}</h1>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}