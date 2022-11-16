import React from "react";
import Card from "./Card";

const Tabs = ({ color }) => {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <>
            <div className="flex flex-wrap overflow-scroll">
                <div className="w-full">
                    <ul
                        className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                        role="tablist"
                    >
                        <li className="-mb-px  last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase p-2 shadow-lg rounded block leading-normal " +
                                    (openTab === 1
                                        ? "text-red-400   bg-" + color + "-600"
                                        : "text-" + color + "-600 bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                Profile
                            </a>
                        </li>
                        <li className="-mb-px  last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase p-2 shadow-lg rounded block leading-normal " +
                                    (openTab === 2
                                        ? "text-red-400 bg-" + color + "-600"
                                        : "text-" + color + "-600 bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                Settings
                            </a>
                        </li>
                        <li className="-mb-px  last:mr-0 flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold uppercase p-2 shadow-lg rounded block leading-normal " +
                                    (openTab === 3
                                        ? "text-red-400 bg-" + color + "-600"
                                        : "text-" + color + "-600 bg-white")
                                }
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                                Options
                            </a>
                        </li>
                    </ul>
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                        <div className="p-2 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block bg-gray-200 h-full px-16 py-4 overflow-scroll" : "hidden"} id="link1">
                                    <input type="type" id="email" class="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder="Search" />
                                    <div className="flex flex-wrap p-2 w-full">
                                        <div className="w-1/3">
                                            <Card />

                                        </div>
                                        <div className="w-1/3">
                                            <Card />

                                        </div><div className="w-1/3">
                                            <Card />

                                        </div>
                                        <div className="w-1/3">
                                            <Card />

                                        </div><div className="w-1/3">
                                            <Card />

                                        </div>





                                    </div>
                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                    <p>
                                        Completely synergize resource taxing relationships via
                                        premier niche markets. Professionally cultivate one-to-one
                                        customer service with robust ideas.
                                        <br />
                                        <br />
                                        Dynamically innovate resource-leveling customer service for
                                        state of the art customer service.
                                    </p>
                                </div>
                                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                    <p>
                                        Efficiently unleash cross-media information without
                                        cross-media value. Quickly maximize timely deliverables for
                                        real-time schemas.
                                        <br />
                                        <br /> Dramatically maintain clicks-and-mortar solutions
                                        without functional solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tabs