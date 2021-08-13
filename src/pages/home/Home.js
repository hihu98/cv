import Head from 'next/head'
import GeneralInfo from './GeneralInfo'

const Home = props => {
    return (
        <>
            <Head>
                <title>hihuCv</title>
            </Head>
            <header className="p-4 bg-gradient-to-r from-blue-500 to-green-400 w-full flex flex-row justify-between items-center">
                <span className="text-white text-xl font-thin">Resume</span>
                <button className="text-white font-bold border border-white shadow px-4 py-2 hover:bg-white hover:text-blue-700 transition-all">
                    Download my CV
                </button>
            </header>
            <div className="py-4 flex flex-row flex-wrap min-h-screen bg-gray-200">
                <section className="w-full md:w-2/3 px-4">
                    <GeneralInfo />
                </section>
                <section className="w-1/3 px-4"></section>
            </div>
        </>
    )
}

export default Home
