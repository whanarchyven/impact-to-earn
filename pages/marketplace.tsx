import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from "../components/Layout";
import {useRouter} from "next/router";
import {useState} from "react";
import TabSwitcher from "../components/TabSwitcher";
import ItemCard from "../components/ItemCard";

const items = [{idx:1,name:'cap'},{idx:1,name:'cap'},{idx:1,name:'cap'},{idx:1,name:'cap'},{idx:1,name:'cap'},{idx:1,name:'cap'}]
const tabs=['Costume','Accessories','Cap']

export default function Home() {
    const router = useRouter()
    const [activeTab,setActiveTab]=useState(tabs[0])
    return (
        <div className={'overflow-hidden min-h-screen'}>
            <Layout>
                <div className={'w-full flex items-center justify-center'}>
                    <p className={'text-2xl font-bold'}>Marketplace</p>
                </div>
                <div className={'w-full mt-2 h-8'}>
                    <TabSwitcher tabs={tabs} activeTab={activeTab} switchTab={(item)=>{setActiveTab(item)}}></TabSwitcher>
                </div>
                <div className={'w-full h-96 mt-4 grid grid-cols-2 justify-center gap-7 overflow-y-scroll p-3'}>
                    {items.map((item, counter) => {
                        return <div key={counter} className={'w-full flex flex-col items-center justify-center'}>
                            <ItemCard item={item}></ItemCard>
                        </div>
                    })}
                </div>
            </Layout>
        </div>
    )
}
