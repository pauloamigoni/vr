import Head from 'next/head';
import React  from "react";
import styles from '../styles/pages/Home.module.css';
import { Profile as Prof } from '../components/Profile';
import { SubHeader } from '../components/SubHeader';



export default function Profile() {

  return (

    <div className={styles.container}>
      <Head>
         <title>VR</title>
      </Head>
      

   
    <Prof />
     
     
    </div> 


  
  )
}
