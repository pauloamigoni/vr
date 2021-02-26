import React  from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { Topo } from "../components/Topo";
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Topo />
       <Component {...pageProps} />
  </>

  )
}

export default MyApp
