import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from "../components/Layout";

export default function Home() {
    return (
        <div className={'overflow-hidden min-h-screen'}>
            <Layout>
                <div className={'w-full flex items-center justify-center'}>
                    <p className={'text-2xl font-bold'}>Lunch pad</p>
                </div>
                <div className={'w-full h-96 mt-4 flex-col flex  overflow-y-scroll items-center justify-center'}>
                    <p className={'font-bold text-5xl'}>Will be soon</p>
                </div>
            </Layout>
        </div>
    )
}
