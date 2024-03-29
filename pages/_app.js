import Head from "next/head";
import Script from "next/script";
import Layout from "../components/Layout";
import { SessionProvider } from "next-auth/react";
import NextNProgress from 'nextjs-progressbar';
import NProgress from 'nprogress';
// import '../styles/globals.css'
function App({ Component, pageProps }) {
    NProgress.configure({showSpinner:false, trickle:false, minimum:0.01})
    return (
        <>
        <NextNProgress color="#00b1af" height={2}/>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
                    crossOrigin="anonymous"
                />
            </Head>

            <Script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
                crossOrigin="anonymous" />
            <SessionProvider session={pageProps.session}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </SessionProvider>

        </>
);
}
export default App;