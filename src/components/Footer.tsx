import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import styles from '../styles/components/Footer.module.css';
import { ImPhone } from "react-icons/im";

export function Footer(){
  return(
  <div className={styles.footerContainer}>
    <>
        <Container>
          <Row style={{marginTop: '40px'}}> 
            <Col sm={6} style={{textAlign: 'right'}}><img alt="VR" src="./logo.png" /></Col>
            <Col sm={6} style={{textAlign: 'left'}}> <span> <ImPhone />(19) 3442.7600 / 3701.6520</span></Col>
          </Row>
        </Container>
      <nav>
           
                <ul>
                 <li>ERP VR</li>
                 <li>VR MASTERFISCO</li>
                 <li>VR MOBILE</li>
                 <li>VR GERENCIADOR E-FISCAL</li>
                 <li>VR COLETOR</li>
                 <li>VR CONTABILIDADE</li>
                 <li>VR WMS</li>
                 <li>VR CONCILIADOR DE CARTÕES</li>
              </ul>
          
            </nav>
</>
<>
           
              <Row style={{marginRight: '0px'}}>
                <Col sm={4}>
                <div className={styles.pagamentoContainer}>
                <p>Pagamentos aceitos OnLine:</p>
                <div>
                    <span>
                    <ul>
                      <li>
                        <div>
                          <img alt="Mastercard" title="Mastercard" src="https://s3.amazonaws.com/sup-ecommerce-static/cards/mastercard.png" />
                        </div>
                      </li>
                      <li>
                        <div>
                          <img alt="VISA" title="VISA" src="https://s3.amazonaws.com/sup-ecommerce-static/cards/visa.png" />
                        </div>
                        </li>
                    </ul>
                    </span>
               </div>

               
               </div>
               </Col>

               <Col sm={4}>

               <div className={styles.pagamentoContainer}>
                <p>Pagamentos aceitos na Entrega:</p>
                <div>
                    <span>
                    <ul>
                      <li>
                        <div>
                          <img alt="Mastercard" title="Mastercard" src="https://s3.amazonaws.com/sup-ecommerce-static/cards/mastercard.png" />
                        </div>
                      </li>
                      <li>
                        <div>
                          <img alt="VISA" title="VISA" src="https://s3.amazonaws.com/sup-ecommerce-static/cards/visa.png" />
                        </div>
                        </li>


                        <li>
                        <div>
                         <img alt="Banricompras" title="Banricompras" src="https://s3.amazonaws.com/sup-ecommerce-static/cards/banricompras.png" />
                        </div>
                        </li>


                        
                    </ul>
                    </span>
               </div>

               
               </div>

                 </Col>

               <Col sm={4}>
               <div className={styles.segurancaContainer}>
                <p>Segurança:</p>
                <div>
                    <span>
                    <ul>
                      <li>
                        <div>
                          <img alt="Amnazon" title="Amazon" src="https://www.caitasupermercados.com.br/shared/images/seguranca.png" />
                        </div>
                      </li>
                     
                    </ul>
                    </span>
               </div>
               </div>


               </Col>
               </Row>

            
            </>

            <>
            
            
            <Row className={styles.endereco}>
                <Col sm={8}>
                  <div >
                      <p>
                      @ 2021 <strong>VR SOFTWARE LTDA</strong> - TODOS OS DIREITOS RESERVADOS<br />
                      RUA NARCISO GONÇALVES, N. 59
                      JARDIM CIDADE UNIVERSITÁRIA
                      LIMEIRA - SP | CEP 13484-646
                      </p>
                  </div>
                </Col>
                <Col sm={4}>
                  integrated ERP: <img alt="O Super" src="https://d1fk7i3duur4ft.cloudfront.net/KNOwpsqtF-O927Wu1dJtT4lLvm0=/fit-in/0x25/https://sup-ecommerce-samy.s3.sa-east-1.amazonaws.com/86043ab2-logosysmomenor.png" />
                  &nbsp;&nbsp;&nbsp;
                   Plataform: <img alt="O Super" src="https://www.caitasupermercados.com.br/shared/images/logo-osuper.png" />
                </Col>
            </Row>
            
            </>


            <>
            <div className={styles.reservado}>
                   <p>
                      As imagens dos produtos no site são meramente ilustrativas e retiradas do site https://www.caitasupermercados.com.br/ <br />.
                   </p>
               </div>
            
            </>


  </div>
  )
}