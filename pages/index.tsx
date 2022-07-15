import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import GoogleLoadingV1 from '../components/Loading/GoogleLoadingV1';
import HomePageFunction from '../components/HomePageFunction';
import TopBar from '../components/TopBar';
import SearchBarInput from '../components/SearchBar/SearchBarInput';
import ButtonsUnderSearchBar from '../components/SearchBar/ButtonsUnderSearchBar';
import PageInfoBottom from './../components/PageInfoBottom';
import Login from '../components/LoginButtonsComponent';

const Home: NextPage = () => {
  return (
    <div className="bg-gray-600 h-screen">
      <Head>
        <title>Google Clone By @KimDog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <TopBar/>
        <HomePageFunction/>
        <SearchBarInput/>
        {/*<PageInfoBottom/>*/}

    </div>
  )
}

export default Home