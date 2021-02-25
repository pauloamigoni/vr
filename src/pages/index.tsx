import Head from 'next/head';
import React  from "react";
import { ChallengeBox } from '../components/ChallengeBox';
import { CompleteChallenges } from '../components/CompleteChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { CountdownContext, CountdownProvider } from '../contexts/CountdownContext';
import styles from '../styles/pages/Home.module.css';

import { Topo } from '../components/Topo';

export default function Home() {

  return (

   
    <div className={styles.container}>
    
      <Head>
         <title>Move.It</title>
      </Head>

      <Topo />
     

   
    </div> 

   
   

  
  )
}
