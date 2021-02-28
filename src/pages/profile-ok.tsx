import Head from 'next/head';
import React, { useState }  from "react";
import { Col, Container, Row } from 'react-bootstrap';
import { Footer} from '../components/Footer';
import { BiUserCircle} from 'react-icons/bi';
import styles from '../styles/pages/Profile.module.css';
import { useToast } from '../hooks/toast';


export default function Profile() {

  const [name, setName] = useState('Nome Completo'); 
  const [documento, setDocumento] = useState('CPF'); 
  const { addToast } = useToast();

function useRadioButtons(name) {
  const [value, setState] = useState(null);


  const handleChange = e => {
    setState(e.target.value);
    
    switch (e.target.value) {
      case "F":
         setDocumento('CPF'); 
         setName('Nome Completo');
     
      break;

      case "J":
         setDocumento('CNPJ'); 
         setName('Razão Social');
        break;
    
      default:
        break;
    }

  };

  const inputProps = {
    name,
    type: "radio",
    onChange: handleChange
  };

  return [value, inputProps];
}
  const [tipoValue, tipoInputProps] = useRadioButtons("tipo");





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
          
            <div>
      <form>
     
        <fieldset>
         
          <input
            value="F"
            checked={tipoValue === "F"}
            {...tipoInputProps}
          />
           <strong> Pessoa Fisica</strong>
           &nbsp;&nbsp;&nbsp;
          <input
            value="J"
            checked={tipoValue === "J"}
            {...tipoInputProps}
          />
          <strong> Pessoa Juridica</strong>
        </fieldset>
      </form>
    </div>

            </Row>
            <Row><br /></Row>
            <Row>
                 <Col><strong>{name}</strong>
                 <input type="text" placeholder="Nome Completo" value="" />
                 </Col>
            </Row>

            <Row>
                 <Col><strong>E-mail</strong>
                 <input type="text" placeholder="E-mail Valido"  value="" />
                 </Col>
                 <Col><strong>{documento}</strong>
                 <input type="text" placeholder="CPF"  value="" />
                 </Col>
            </Row>

            <Row>
                 <Col><strong>Senha</strong>
                 <input type="text" placeholder="Senha"  value="" />
                 </Col>
                 <Col><strong>Repetir a Senha</strong>
                 <input type="text" placeholder="Repita a Senha"  value="" />
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
