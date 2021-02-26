import Head from 'next/head';
import React  from "react";
import styles from '../styles/pages/Home.module.css';
//import { Topo } from '../components/Topo';
import { Profile } from '../components/Profile';
import { SubHeader } from '../components/SubHeader';


export default function Home() {

  return (

    <div className={styles.container}>
      <Head>
         <title>VR</title>
      </Head>
      

    <SubHeader />
     
     
    </div> 


  
  )
}
