import React, {useState} from "react";
import Image from "next/image";


import {useRouter} from "next/router";

interface WorkCardInterface {
    workItem: { type: string, title: string, profit: number };
}

const WorkCard = ({workItem}: WorkCardInterface) => {

    const router = useRouter()


    return (
        <div className={"w-full h-full relative"}>
            <div
                className={"w-full h-full relative"}
                onClick={() => {
                    router.push('/workpop')
                }}
            >
                <div className={"w-full h-full absolute -top-1 -left-2 rounded-full"}>
                    <Image
                        alt=""
                        src={"/images/work_bg.jpg"}
                        layout={"fill"}
                        className={"rounded-3xl"}
                    ></Image>
                </div>
                <div className={"w-full h-[101%] rounded-full absolute -top-[0.3em] -left-4"}>
                    <Image
                        alt=""
                        src={"/images/card_overlay.png"}
                        layout={"fill"}
                        className={"rounded-2xl"}
                    ></Image></div>

                <div className={"w-full h-full p-4 absolute top-0"}>
                    <div className={"w-full h-full relative"}>
                        <div className={"absolute flex left-0 top-0"}>
                            <div
                                className={
                                    "w-10 h-10 active-el rounded-full inline-block align-top flex justify-center items-center"
                                }
                            ></div>
                            <div className={"inline-block align-top"}>
                                <p className={"inline-block truncate ml-4 font-bold w-[45%] text-xl"}>
                                    {workItem.title}
                                </p>
                                <p
                                    className={
                                        "inline-block ml-4 font-bold w-3/5 text-sm opacity-50"
                                    }
                                >
                                    {workItem.type == "M-2-E" ? "M-2-E" : "GO-CYCLE"}
                                </p>
                            </div>
                        </div>
                        <div
                            className={
                                "grid grid-cols-5 gap-2 grid-rows-1 absolute bottom-0 "
                            }
                        >
                            {/*{statKeys.map((stat) => {*/}
                            {/*  if (*/}
                            {/*    workItem.conditionsGTE?.[stat.stat_name] != undefined &&*/}
                            {/*    workItem.conditionsGTE?.[stat.stat_name] != 0*/}
                            {/*  ) {*/}
                            {/*    return (*/}
                            {/*      <div className={"w-14"} key={stat.stat_name}>*/}
                            {/*        <StatRequirementBar*/}
                            {/*          stat_value={workItem.conditionsGTE[stat.stat_name]}*/}
                            {/*          stat_name={stat.stat_name}*/}
                            {/*        ></StatRequirementBar>*/}
                            {/*      </div>*/}
                            {/*    );*/}
                            {/*  }*/}
                            {/*})}*/}
                        </div>
                        {workItem.type == 'Impact-to-earn' ? <div
                            className={
                                "p-1 rounded-full bottom-0 right-0 absolute bg-black rounded-full flex justify-center items-center"
                            }
                        >
                            <p className={"text-white inline-block text-sm font-medium"}>
                                +{workItem.profit}
                            </p>
                            <div className={"inline-block ml-2 relative w-6 h-6"}>
                                <Image
                                    alt=""
                                    src={"/images/carrot_icon_white.svg"}
                                    layout={"fill"}
                                ></Image>
                            </div>
                        </div> : <div
                            className={
                                "p-1 rounded-full bottom-0 right-0 absolute bg-black rounded-full flex justify-center items-center"
                            }
                        >
                            <p className={"text-white inline-block text-sm font-medium"}>
                                + KRM
                            </p>
                        </div>}
                        <div
                            className={
                                "p-1 rounded-full top-0 right-0 absolute bg-black rounded-full flex justify-center items-center"
                            }
                        >
                            <p className={"text-white inline-block text-sm font-medium"}>
                                {workItem.type}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/*{workPopOpen ? (*/}
            {/*    <WorkPopUp workItem={workItem} togglePop={toggleWorkPop}/>*/}
            {/*) : null}*/}
        </div>
    );
};

export default WorkCard;
