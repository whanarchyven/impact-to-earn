import React, {useState} from "react";
import ActiveTask from "./ActiveTask";
import WorkCard from "./WorkCard"


const Work = () => {
    const worktabs = ["daily", "work"];
    const [workTab, setWorkTab] = useState("daily");
    const works = [{
        title: 'Street eco-walk',
        profit: 123,
        type: 'Impact-to-earn'
    },
        {
            title: 'Street eco-walk',
            profit: 123,
            type: 'Impact-to-earn'
        },
        {
            title: 'Street eco-walk',
            profit: 123,
            type: 'Impact-to-earn'
        },
        {
            title: 'Street eco-walk',
            profit: 123,
            type: 'Impact-to-earn'
        }];
    console.log(works);

    return (
        <div
            className={
                "w-full h-full grid grid-cols-1 gap-2  sm:grid-cols-2 xl:gap-8 xl:grid-cols-4 pb-0 p-1"
            }
        >
            <div className={"xl:col-start-4 row-start-1 row-end-1"}>
                <p className={"w-full text-center mb-0 font-bold text-2xl"}>
                    Work in progress
                </p>
                <div className={"w-full bg-white p-2 rounded-xl h-20"}>
                    <ActiveTask active_task={works[0]}/>
                </div>
            </div>
            <div
                className={
                    "sm:col-start-1 sm:col-end-3 sm:row-start-1 row-start-2 mt-0 sm:mt-0 row-end-7 pt-0"
                }
            >
                <p className={"w-full text-center font-bold text-2xl"}>Billboard</p>
                {/*<div className={"grid grid-cols-5 grid-rows-1 h-12 sm:p-6 p-3 gap-4"}>*/}
                {/*  <div*/}
                {/*    className={*/}
                {/*      "col-start-1 col-end-3 bg-white text-[#898994] rounded-full h-full"*/}
                {/*    }*/}
                {/*  >*/}
                {/*    <TabSwitcher*/}
                {/*      tabs={worktabs}*/}
                {/*      activeTab={workTab}*/}
                {/*      switchTab={setWorkTab}*/}
                {/*    />*/}
                {/*  </div>*/}
                {/*  <div className={"col-start-4 col-end-6"}>*/}
                {/*    <select*/}
                {/*      className={*/}
                {/*        "w-full h-full rounded-full font-bold text-center text-[#898994]"*/}
                {/*      }*/}
                {/*    >*/}
                {/*      <option className={"rounded-full text-[#898994]"}>*/}
                {/*        Available now*/}
                {/*      </option>*/}
                {/*      <option className={"rounded-full text-[#898994]"}>*/}
                {/*        Option 1*/}
                {/*      </option>*/}
                {/*      <option className={"rounded-full text-[#898994]"}>*/}
                {/*        Option 2*/}
                {/*      </option>*/}
                {/*      <option className={"rounded-full text-[#898994]"}>*/}
                {/*        Option 3*/}
                {/*      </option>*/}
                {/*      <option className={"rounded-full text-[#898994]"}>*/}
                {/*        Option 4*/}
                {/*      </option>*/}
                {/*    </select>*/}
                {/*  </div>*/}
                {/*</div>*/}
                <div
                    className={
                        "grid grid-cols-1 content-start gap-4 overflow-y-scroll h-full pb-20 lg:grid-cols-2"
                    }
                >
                    {works
                        .map((item) => {
                            return (
                                <div className={"h-36"} key={item.title}>
                                    <WorkCard workItem={item}/>
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default Work;
