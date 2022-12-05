import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from "../components/Layout";
import Work from "../components/Work";

export default function Home() {
  return (
    <div className={'overflow-hidden min-h-screen'}>
      <Layout>
        <Work/>
      </Layout>
    </div>
  )
}
