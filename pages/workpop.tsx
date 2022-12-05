import React from "react";
import Image from "next/image";
import {useRouter} from "next/router";

const Workpop = () => {

    const router=useRouter()

    return (
        <div
            className={
                "fixed z-[999] w-full h-full top-0 left-0 grey-gradient justify-center items-center pb-14 overflow-y-scroll"
            }
        >
            <div className={"w-full h-60 relative rounded-b-2xl"}>
                <div className={"w-full h-full absolute top-0"}>
                    <Image
                        alt=""
                        src={"/images/work_bg.jpg"}
                        layout={"fill"}
                        className={"rounded-b-3xl"}
                    ></Image>
                </div>
                <div
                    className={
                        "w-48 h-10 bg-white absolute bottom-5 right-5 rounded-full flex items-center justify-around"
                    }
                >
                    <p className={"font-bold"}>Impact-to-earn</p>
                    <div
                        className={
                            "w-8 h-8 rounded-full flex justify-center items-center bg-black"
                        }
                    >
                        <div className={"w-3/5 h-3/5 relative"}>
                            <Image
                                alt=""
                                src={"/images/carrot_icon_white.svg"}
                                layout={"fill"}
                            ></Image>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"w-full flex flex-wrap justify-center relative p-8"}>
                <div className={"flex items-center flex-row justify-centers"}>
                    <div
                        className={
                            "w-12 h-12 mr-3 rounded-full flex justify-center items-center bg-white"
                        }
                    >
                        <div className={"w-3/5 h-3/5 relative gold rounded-full"}>

                        </div>
                    </div>
                    <p className={"font-bold text-2xl"}>Street eco-walk</p>
                </div>
                <p className={"font-medium mt-2 mb-8"}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.

                    Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </p>
                <div className={"grid grid-cols-2 gap-2 w-full"}>
                    {/*<p className={"opacity-50 font-bold text-xl"}>Requirements:</p>*/}
                    <p
                        className={
                            "justify-self-start w-1/2 text-center font-bold text-xl"
                        }
                    >
                        Profit:
                    </p>
                    <div
                        className={
                            "p-1 rounded-full bg-black rounded-full flex justify-center items-center"
                        }
                    >
                        <p className={"text-white inline-block text-sm font-medium"}>
                            +{1234}
                        </p>
                        <div className={"inline-block ml-2 relative w-6 h-6"}>
                            <Image
                                alt=""
                                src={"/images/carrot_icon_white.svg"}
                                layout={"fill"}
                            ></Image>
                        </div>
                    </div>
                </div>
                <button
                    className={
                        "w-3/4 active-el rounded-full h-16 mt-8 text-white text-center text-2xl font-bold"
                    }
                    onClick={() => {
                        router.push('/share')
                    }}
                >
                    Take job!
                </button>
            </div>
            <div
                className={
                    "w-12 h-12 absolute left-1 top-16 bg-white flex justify-center items-center rounded-full cursor-pointer"
                }
                onClick={() => {

                }}
            >
                <div className={"w-5 h-5 relative"} onClick={()=>{router.push('/work')}}>
                    <Image
                        alt=""
                        src={"/images/arrow_back.svg"}
                        layout={"fill"}
                    ></Image>
                </div>
            </div>
        </div>
    );
};

export default Workpop;
