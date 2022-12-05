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
                <div className={'w-full flex items-center justify-center'}>
                    <div className={'w-5 aspect-square absolute left-5'} onClick={()=>{router.push('/home')}}>
                        <Image src={'/images/arrow_back.svg'} alt={'arrow_back'} layout={'fill'}></Image>
                    </div>
                    <p className={'text-2xl font-bold'}>Stacking</p>
                </div>
                <div className={'w-full h-96 mt-4 flex-col flex  gap-7 overflow-y-scroll rounded-xl p-3'}>
                    <div className={'w-full grid grid-cols-3 items-center justify-center'}>
                        <p className={'text-center text-sm text-black'}>Token staked <br/><b>0</b></p>
                        <p className={'text-center text-black'}>APY: <br/><b>header</b></p>
                        <p className={'text-center text-black'}>Total staked <br/><b>137.000</b></p>
                    </div>
                    <input type={'number'} className={'rounded-lg w-full h-8 text-center block'}/>
                    <button className={'w-full mt-5 h-12 active-el rounded-full flex items-center justify-center font-bold text-white'}>
                        Stake!
                    </button>
                </div>
            </Layout>
        </div>
    )
}
