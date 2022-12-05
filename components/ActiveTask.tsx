import React, {useState} from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

interface activeTaskModule {
    active_task?: { title: string, profit: number,type:string }
}

const ActiveTask = ({active_task}: activeTaskModule) => {

    const [activePopOpen, setActivePopOpen] = useState(false)
    const toggleActivePop = () => {
        setActivePopOpen(!activePopOpen)
    }

    return (
        <div className={'w-full h-full relative grid grid-cols-9 items-center grid-rows-3 gap-2'} onClick={() => {
            toggleActivePop()
        }}>
            <div className={'col-start-1 col-end-7'}>
                {active_task != undefined ?
                    <p className={'w-full font-semibold text-lg'}>{active_task.title}</p> : null}
            </div>
            <div className={'col-start-7 flex col-end-10 bg-black rounded-full flex justify-center items-center'}>
                <p className={'text-white font-semibold'}>+{active_task?.profit}</p>
                <div className={'ml-2 relative w-6 h-6'}>
                    <Image
                        alt="carrot"
                        src={'/images/carrot_icon_white.svg'}
                        layout={'fill'}
                    ></Image>
                </div>
            </div>
            <div className={'row-start-2 col-start-1 col-end-10 h-full relative rounded-full bg-[#C7C7CC]'} style={styles}>
                <div className={'absolute left-0 top-0 w-3/4 h-full rounded-full active-el'}>

                </div>
            </div>
            <div className={'col-start-4 col-end-10 row-start-3 flex items-end'}>
                {/*<p className={'w-full text-center font-semibold text-xs text-[#898994]'}>{active_task.workItem.type.toUpperCase()}</p>*/}
                <p className={'w-full text-right font-semibold text-xs text-[#898994]'}>{active_task?.type}</p>
            </div>

        </div>
    );

};

export default ActiveTask;
