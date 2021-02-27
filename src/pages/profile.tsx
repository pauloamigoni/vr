import Head from 'next/head';
import React  from "react";
import { Col, Container, Row } from 'react-bootstrap';
import { Footer} from '../components/Footer';
import { BiUserCircle} from 'react-icons/bi';
import styles from '../styles/pages/Profile.module.css';





export default function Profile() {

  return (

    <div className={styles.container}>
      <Head>
         <title>VR</title>
      </Head>
          
          <Container className={styles.boxRegister}>
            <Row>
             <div className={styles.title}>
                 <BiUserCircle /> Quer ser nosso cliente? Cadastre-se agora
             </div>
            </Row>

            <Row>
                 <Col><strong>Pessoa Fisica</strong></Col>
                 <Col><strong>Pessoa Juridica</strong></Col>
            </Row>
            <Row><br /></Row>
            <Row>
                 <Col><strong>Nome Completo</strong>
                 <input type="search" placeholder="O que você procura?" name="search" value="" />
                 </Col>
            </Row>

            <Row>
                 <Col><strong>E-mail</strong>
                 <input type="search" placeholder="O que você procura?" name="search" value="" />
                 </Col>
                 <Col><strong>CPF</strong>
                 <input type="search" placeholder="O que você procura?" name="search" value="" />
                 </Col>
            </Row>

            <Row>
                 <Col><strong>Senha</strong>
                 <input type="search" placeholder="O que você procura?" name="search" value="" />
                 </Col>
                 <Col><strong>Repetir Senha</strong>
                 <input type="search" placeholder="O que você procura?" name="search" value="" />
                 </Col>
            </Row>

            <Row style={{textAlign: 'center', marginTop: '40px'}}>
                 <p>Ao cadastrar-se, você concorda com os Termos de Uso e Politica de Privacidade.</p>
            </Row>








          </Container>


         <Footer />
    </div> 


  
  )
}
