import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from "../components/Layout";
import {useRouter} from "next/router";

export default function Home() {

    const achivements = [
        {name:'Aaron',rate:'10.000'},
        {name:'Aaron',rate:'10.000'},
        {name:'Aaron',rate:'10.000'},
        {name:'Aaron',rate:'10.000'},
        {name:'Aaron',rate:'10.000'},
        {name:'Aaron',rate:'10.000'},
        {name:'Aaron',rate:'10.000'},
        {name:'Aaron',rate:'10.000'},
        {name:'Aaron',rate:'10.000'},
        {name:'Aaron',rate:'10.000'},
        {name:'Aaron',rate:'10.000'},
        {name:'Aaron',rate:'10.000'},
        {name:'Aaron',rate:'10.000'},
        {name:'Aaron',rate:'10.000'},
        {name:'Aaron',rate:'10.000'},
        {name:'Aaron',rate:'10.000'},
        {name:'Aaron',rate:'10.000'},
        {name:'Aaron',rate:'10.000'},
        {name:'Aaron',rate:'10.000'},
        {name:'Aaron',rate:'10.000'},
        {name:'Aaron',rate:'10.000'},
        {name:'Aaron',rate:'10.000'},
    ]

    const router=useRouter()

    return (
        <div className={'overflow-hidden min-h-screen'}>
            <Layout>
                <div className={'w-full flex items-center justify-center'}>
                    <div className={'w-5 aspect-square absolute left-5'} onClick={()=>{router.push('/home')}}>
                        <Image src={'/images/arrow_back.svg'} alt={'arrow_back'} layout={'fill'}></Image>
                    </div>
                    <p className={'text-2xl font-bold'}>Rating</p>
                </div>
                <div className={'w-full h-96 mt-4 flex-col flex  gap-7 overflow-y-scroll border-black border-2 rounded-xl p-3'}>
                    {achivements.map((item,counter)=>{
                        return <div key={counter} className={'w-full border-b-2 border-black flex justify-between items-center justify-center'}>
                            <p className={'font-semibold'}>{item.name}</p>
                            <p className={'font-semibold'}>{item.rate}</p>
                        </div>
                    })}
                </div>
            </Layout>
        </div>
    )
}
