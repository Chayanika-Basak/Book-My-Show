import React from 'react'
import PlaysFilter from '../components/Filters/Plays.filters';
import Poster from '../components/Poster/poster.component';

const Plays = () => {
    return (
        <>
            <div className="container mx-auto px-4">
                <div className="w-full lg:flex lg:flex-row-reverse">
                    <div className=" lg:w-3/4">
                        <h2 className="text-2xl text-gray-800 font-bold py-3 px-2 mt-10 hidden lg:block">
                            Plays in National Capital Region (NCR)
                        </h2>
                        <div className="flex items-center ml-2">
                            <button className="text-sm text-coral-400 rounded-full px-4 m-1 border-coolGrey-100 border-2">
                                Theatre
                            </button>
                            <button className="text-sm text-coral-400 rounded-full px-4 m-1 border-coolGrey-100 border-2">
                                StoryTelling
                            </button>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00307894-swmrwbmltq-portrait.jpg"
                                    title="Sharafat Chode Di Maine"
                                    subtitle="Hindi ₹100 onwards"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00307894-swmrwbmltq-portrait.jpg"
                                    title="Sharafat Chode Di Maine"
                                    subtitle="Hindi ₹100 onwards"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00307894-swmrwbmltq-portrait.jpg"
                                    title="Sharafat Chode Di Maine"
                                    subtitle="Hindi ₹100 onwards"
                                />
                            </div>
                            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                                <Poster
                                    src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNSBTZXA%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00307894-swmrwbmltq-portrait.jpg"
                                    title="Sharafat Chode Di Maine"
                                    subtitle="Hindi ₹100 onwards"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-3/12">
                        <h2 className="text-2xl font-bold mt-10 ml-6 py-3">
                            Filters
                        </h2>
                        <div className="">
                            <PlaysFilter 
                            title="Date"
                            tags={["Today", "Tomorrow", "This Weekend"]}
                            />
                        </div>
                        <div className="">
                            <PlaysFilter 
                            title="Language"
                            tags={["Tamil", "Telugu", "English"]}
                            />
                        </div>
                    </div>
                </div>

                <div>

                </div>
            </div>
        </>
    )
}

export default Plays;
