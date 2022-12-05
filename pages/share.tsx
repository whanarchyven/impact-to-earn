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
                <div className={'w-full flex flex-col items-center justify-center'}>
                    <div className={'w-40 aspect-square relative'}>
                        <Image src={'/images/qr.png'} alt={'qr'} layout={'fill'}></Image>
                    </div>
                    <div className={'flex mt-4 pl-4 items-center'}>
                        <input type={'file'} className={'flex'}/>
                    </div>
                    <div className={'mt-4'}>
                        <input type={'number'} className={'rounded-lg w-48 h-8 text-center block'}/>
                        <p className={'w-48 text-center'}>How much batteries you wanna recoil?</p>
                    </div>
                    <button className={'w-48 mt-5 h-12 active-el rounded-full flex items-center justify-center font-bold text-white'}>
                        Send!
                    </button>
                </div>
            </Layout>
        </div>
    )
}
