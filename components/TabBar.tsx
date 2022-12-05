import React, {useEffect, useRef, useState} from 'react';
import Image from "next/image";
import Link from "next/link";

interface tabBarInterface {
    currentTab: string,
}

const TabBar = ({currentTab}: tabBarInterface) => {

    const [isVisible, setIsVisible] = useState('visible-true');
    const [currentOffset, setCurrentOffset] = useState(0);
    const tabs = [
        'work',
        'shop',
        'home',
        'marketplace',
        'account',
    ]
    // useEffect(() => {
    //   window.addEventListener('scroll', ev => {
    //     if (window.scrollY > currentOffset + 100) {
    //       setIsVisible('visible-false');
    //       setCurrentOffset(window.scrollY);
    //     }
    //     else if (window.scrollY < currentOffset - 100) {
    //       setIsVisible('visible-true');
    //       setCurrentOffset(window.scrollY);
    //     }
    //   })
    // })

    return (
        <div
            className={'w-full h-full border-t-2 border-black grid grid-cols-5 visible-transition gap-6 grid-rows-1 p-5 ' + isVisible}>
            {tabs.map(item => {
                let active = '_active';
                let active_class='scale-110'
                if ('/' + item != currentTab) {
                    active = ''
                    active_class=''
                }
                return (
                    <Link className={'relative'} href={'/' + item} key={item}>
                        <div className={'relative aspect-square transition-all duration-1000 '+active_class}>
                            <Image
                                alt=""
                                src={'/images/tabs/' + item + active + '.svg'}
                                layout={'fill'}
                            ></Image>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default TabBar;
