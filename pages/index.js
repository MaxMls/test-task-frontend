
import Head from 'next/head'
import Main from "../components/main";
import React from "react";




export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Клиника</title>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
            </Head>

            <main>
                <Main/>
            </main>
        </div>
    )
}
