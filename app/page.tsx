import Navbar from "@/components/navbar";
import Header from "@/components/header";
import React from "react";
import About from "@/components/about";
import MySkills from "@/components/MySkills";
import Project from "@/components/Project";
import Footer from "@/components/footer";
import Head from 'next/head'



export const metadata = {
  title: 'Hashem Portfolio', // Tab name
  description: 'My first portfolio',
  icons: {
    icon: '/HASHEM.ico', // Tab icon
  },
}


export default function Home() {
  return (
    <>
    <Head>
        <title>{metadata.title}</title>
        <link rel="icon" href={metadata.icons.icon} />
      </Head>
    
      <Navbar />
      <Header />
      <About />
      <MySkills />
      <Project />
      <Footer />
    </>
  );
}
