import Head from 'next/head'

const App = props => {
    const { Component, pageProps } = props

    return (
        <>
            <Head>
                <link
                    href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
                    rel="stylesheet"
                />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default App
