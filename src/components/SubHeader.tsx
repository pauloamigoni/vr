import { Col, Container, Row } from 'react-bootstrap';
import styles from '../styles/components/SubHeader.module.css';
import { FiTruck, FiPlayCircle,FiHome } from 'react-icons/fi';
import { Footer} from '../components/Footer';
import { Content } from '../components/Content';
import { Category } from '../components/Category';
import { Carrosel } from './Carrossel';
import { Recipe } from './Recipe';

export function SubHeader(){
  return(
<div className={styles.subHeaderContainer}>

<Container className={styles.container}>


<Carrosel />

<Row className={styles.textoContainer}>
    <Col sm className={styles.texto}>
    <FiHome />
      <strong>Adicionar</strong>
       <p>Novo endereço</p>
    </Col>

    <Col sm className={styles.texto}>
    <FiTruck />
      <strong>Frete Grátis</strong><br />
        <p>Em compras a partir de R$ 350,00</p>
    </Col>

    <Col sm className={styles.texto}>
    <FiPlayCircle />
      <strong>Primeira Compra?</strong><br />
        <p>Veja como comprar</p>
    </Col>
  </Row>


       <Content />

       <Row style={{alignItems: 'center', textAlign: 'center' , paddingLeft: '20px', paddingRight: '60px' }}>
         <Col sm={3} className={styles.imgBackground} >
           <img alt="Como Comprar" src="https://d1fk7i3duur4ft.cloudfront.net/D1wqEHEH4Xb9dPLG8t09FF3pj0A=/fit-in/335x0/https://sup-ecommerce-caita.s3-sa-east-1.amazonaws.com/d4c56868-como-comprar.jpg" />
         </Col>
         <Col sm={3}  className={styles.imgBackground}>
           <img alt="Açougue" src="https://d1fk7i3duur4ft.cloudfront.net/_b6jt0BWOAdaMY0TZjergUB4Evo=/fit-in/335x0/https://sup-ecommerce-caita.s3-sa-east-1.amazonaws.com/a20957b3-ac%CC%A7ougue.jpg" />
         </Col>
         <Col sm={3}  className={styles.imgBackground}>
           <img alt="Cervejas" src="https://d1fk7i3duur4ft.cloudfront.net/qIX42N60fb5epIxpOOOf7-CBnHM=/fit-in/335x0/https://sup-ecommerce-caita.s3-sa-east-1.amazonaws.com/a88f6650-cervejas.jpg" />
         </Col>
         <Col sm={3}  className={styles.imgBackground}>
         <img  alt="Especiais" src="https://d1fk7i3duur4ft.cloudfront.net/K2CLVJzDFiZPVH17584txFBvTQg=/fit-in/335x0/https://sup-ecommerce-caita.s3-sa-east-1.amazonaws.com/5417726e-especiais.jpg" />
         </Col>
      </Row>

      <Category />
      <Recipe />


      <Row>
         <Footer />
      </Row>


    </Container>



</div>
  )
}