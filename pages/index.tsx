import React from "react";
import Head from "next/head";


const Home: React.FC = () => {
  return (
      <div>
          <Head>
              <title>Creative Minds</title>
              <meta name={"description"} content={"Text Board for creative minds"}/>
              <link rel={"icon"} href={"/favicon.ico"}/>
          </Head>

          <main></main>
      </div>
  )
}

export default Home;