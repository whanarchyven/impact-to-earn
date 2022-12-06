import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from "../components/Layout";
import {useRouter} from "next/router";


export default function Home() {
    const router=useRouter()
  return (
    <div className={'overflow-hidden min-h-screen'}>
      <Layout>
        <div className={'w-full flex-col h-full flex items-center justify-center'}>
            <div className={'w-52 aspect-[3/4] relative'}>
                <Image src={'/images/avatar.png'} alt={'avatar'} layout={'fill'}></Image>
                <div className={'absolute -right-12 w-10 flex flex-col items-center justify-center h-full'}>
                    <div className={'w-full my-3 aspect-square relative'} onClick={()=>{router.push('/achivments')}}>
                        <Image src={'/images/home/achviements.svg'} alt={'achviements'} layout={'fill'}></Image>
                    </div>
                    <div className={'w-full my-3 aspect-square relative'} onClick={()=>{router.push('/rating')}}>
                        <Image src={'/images/home/rating.svg'} alt={'rating'} layout={'fill'}></Image>
                    </div>
                </div>

            </div>
            <div className={'w-52 mt-3 grid grid-cols-3 gap-2 justify-center items-center'}>
                <p>Name</p>
                <p className={'font-bold'}>LVL 5</p>
                <div className={'lvl-up p-2 font-bold rounded-full'}>Lvl up</div>
            </div>
            <div className={'w-40 mt-3 flex items-center justify-around'}>
                <div className={'w-10 aspect-square rounded-full bg-white p-2'}>
                    <div className={'w-full h-full relative'}>
                        <Image src={'/images/home/giftbox1.svg'} layout={'fill'} alt={'gift1'}></Image>
                    </div>
                </div>
                <div className={'w-10 aspect-square rounded-full bg-white p-2'}>
                    <div className={'w-full h-full relative'}>
                        <Image src={'/images/home/giftbox2.svg'} layout={'fill'} alt={'gift2'}></Image>
                    </div>
                </div>
                <div className={'w-10 aspect-square rounded-full bg-white p-2'}>
                    <div className={'w-full h-full relative'}>
                        <Image src={'/images/home/giftbox3.svg'} layout={'fill'} alt={'gift3'}></Image>
                    </div>
                </div>
            </div>
            <div className={'w-64 mt-3'}>
                <div className={'w-full gap-2 grid grid-cols-8 items-center'}>
                    <p className={'col-span-2'}>Reader</p>
                    <div className={'col-span-6 h-3 relative flex items-center rounded-full'}>
                        {/*<div className={'w-5 absolute left-3/4 aspect-square rounded-full active-el'}></div>*/}
                        <p className={'w-full text-right'}>83/100</p>
                    </div>
                </div>
            </div>
            <div className={'w-64 mt-3'}>
                <div className={'w-full gap-2 grid grid-cols-8 items-center'}>
                    <p className={'col-span-2'}>Exp</p>
                    <div className={'col-span-6 h-3 relative flex items-center rounded-full'}>
                        {/*<div className={'w-5 absolute left-1/4 aspect-square rounded-full active-el'}></div>*/}
                        <p className={'w-full text-right'}>180/600</p>
                    </div>
                </div>
            </div>

        </div>
      </Layout>
    </div>
  )
}
