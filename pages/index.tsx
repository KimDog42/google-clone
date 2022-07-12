import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import GoogleLoadingV1 from '../components/Loading/GoogleLoadingV1';
import HomePageFunction from '../components/HomePageFunction';
import TopBar from '../components/TopBar';
import SearchBarInput from './../components/SearchBarInput';

const Home: NextPage = () => {
  return (
    <div className="bg-gray-800 h-screen">
      <Head>
        <title>Google Clone By @KimDog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <TopBar/>
        <HomePageFunction/>
        <SearchBarInput/>

    </div>
  )
}

export default Home
