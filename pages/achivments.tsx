import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from "../components/Layout";
import {useRouter} from "next/router";

export default function Home() {

    const achivements = [
        'battery',
        'bnb',
        'ton',
        'eth',
        'bnb',
        'ton',
        'eth',
        'bnb',
        'ton',
        'eth',
        'bnb',
        'ton',
        'eth',
        'bnb',
        'ton',
        'eth',
        'bnb',
        'ton',
        'eth',
        'bnb',
        'ton',
        'eth',
    ]

    const router=useRouter()

    return (
        <div className={'overflow-hidden min-h-screen'}>
            <Layout>
                <div className={'w-full flex items-center justify-center'}>
                    <div className={'w-5 aspect-square absolute left-5'} onClick={()=>{router.push('/home')}}>
                        <Image src={'/images/arrow_back.svg'} alt={'arrow_back'} layout={'fill'}></Image>
                    </div>
                    <p className={'text-2xl font-bold'}>Achivments</p>
                </div>
                <div className={'w-full h-96 mt-4 grid grid-cols-3 justify-center gap-7 overflow-y-scroll p-3'}>
                    {achivements.map((item,counter)=>{
                        return <div key={counter} className={'w-full flex flex-col items-center justify-center'}>
                            <div className={'w-full aspect-square relative'}>
                                <Image src={`/images/achivments/${item}.svg`} alt={item+counter} layout={'fill'}></Image>
                            </div>
                            {item=='battery'?<p className={'text-[#E22EFF] text-center leading-[100%]'}>Battery hero</p>:<p>reader</p>}
                        </div>
                    })}
                </div>
            </Layout>
        </div>
    )
}
