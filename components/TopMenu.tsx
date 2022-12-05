import React, {useState} from 'react';
import Image from "next/image";
import {useRouter} from "next/router";
import {router} from "next/client";

// import {usage} from "browserslist";

interface topMenuInterface {
    balance: number,
}

const TopMenu = ({balance}: topMenuInterface) => {

    const [menuIsShown, setMenuIsShown] = useState(false)
    const needUrl = useRouter()

    const bord = menuIsShown ? ' outline-2 ' : ''

    return (
        <div className={'w-full h-full grid grid-cols-6 items-center grid-rows-1 gap-2'}>
            <div className={'absolute z-[999] w-5  left-2 border-black' + bord}>
                <div className={'relative w-full h-5'}>
                    <Image
                        src={'/images/burger_icon.svg'}
                        layout={'fill'}
                        alt=""
                    ></Image>
                </div>
                {menuIsShown ?
                    <div className={'w-full flex justify-center items-center flex-col'}>
                        <div className={'w-8 relative h-8 my-2'} onClick={() => {
                        }}>
                            {needUrl.pathname == '/faq' ?
                                <Image
                                    src={'/images/burger_icons/faq_active.svg'}
                                    layout={'fill'}
                                    alt=""
                                ></Image> :
                                <Image
                                    src={'/images/burger_icons/faq.svg'}
                                    layout={'fill'}
                                    alt=""
                                ></Image>}
                        </div>
                        <a className={'w-8 relative h-8 my-2'} onClick={() => {
                            needUrl.push('/support')
                        }}>
                            {needUrl.pathname == '/support' ?
                                <Image
                                    src={'/images/burger_icons/support_active.svg'}
                                    layout={'fill'}
                                    alt=""
                                ></Image> :
                                <Image
                                    src={'/images/burger_icons/support.svg'}
                                    layout={'fill'}
                                    alt=""
                                ></Image>}
                        </a>
                        <div className={'w-8 relative h-8 my-2'} onClick={() => {
                            needUrl.push('/inventory')
                        }}>
                            {needUrl.pathname == '/inventory' ?
                                <Image
                                    src={'/images/burger_icons/inventory_active.svg'}
                                    layout={'fill'}
                                    alt=""
                                ></Image> :
                                <Image
                                    src={'/images/burger_icons/inventory.svg'}
                                    layout={'fill'}
                                    alt=""
                                ></Image>}
                        </div>
                    </div> : null}

            </div>
            <a className={'col-start-2 col-end-4 h-6 relative'} href={'https://impact-to-earn.com/'}>
                <Image src={'/images/logo.png'} alt={'logo'} layout={'fill'}></Image>
            </a>
            <div className={'col-start-4 col-end-7 px-2 flex items-center justify-self-end'}>
                {needUrl.pathname == '/home' ? <p className={' underline text-lg leading-[100%] font-semibold'} onClick={()=>{needUrl.push('/stake')}}>
                    Stake
                </p> : <p className={' text-lg leading-[100%] font-semibold'}>
                    {balance.toFixed(2)}
                </p>}
                <div className={'h-full aspect-square w-6 relative mx-2'}>
                    <Image
                        src={'/images/token_icon.svg'}
                        layout={'fill'}
                        alt=""
                    ></Image>
                </div>

                <p className={'text-lg leading-[100%] font-semibold'}>
                    Token
                </p>
            </div>
        </div>
    );
};

export default TopMenu;
