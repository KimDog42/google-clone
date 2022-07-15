import type { NextPage } from 'next';
import Head from 'next/head';
import HomePageFunction from '../components/HomePageFunction';
import TopBar from '../components/TopBar';
import SearchBarInput from '../components/SearchBar/SearchBarInput';

const Home: NextPage = () => {
  return (
    <div className="bg-black h-screen">
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