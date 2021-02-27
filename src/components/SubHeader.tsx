import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import styles from '../styles/components/SubHeader.module.css';
import { FiTruck, FiPlayCircle,FiHome } from 'react-icons/fi';
import { Footer} from '../components/Footer';
import { Content } from '../components/Content';

export function SubHeader(){
  return(
<div className={styles.subHeaderContainer}>

<Container className={styles.container}>


<Row>
    <Col>
        
   <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://d1fk7i3duur4ft.cloudfront.net/n6vcEbp0lpOr2f1ktfxwEpy83NI=/fit-in/1920x0/https://sup-ecommerce-caita.s3.sa-east-1.amazonaws.com/ba96b70b-bannersite1920x370veraocaita2021.jpg"
            alt="Tabloide"
          />
      
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://d1fk7i3duur4ft.cloudfront.net/BiBQl_CzANNDsLm8WeIdjq4EXDI=/fit-in/1920x0/https://sup-ecommerce-caita.s3.sa-east-1.amazonaws.com/a5d7f23c-layout21920x370px.png"
            alt="Coca Cola"
          />

       
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://d1fk7i3duur4ft.cloudfront.net/7knXd4FMlhugK7-cixcyW25eTmY=/fit-in/1920x0/https://sup-ecommerce-caita.s3.sa-east-1.amazonaws.com/afa6e43f-whatsapp-image-20210212-at-072122.jpeg"
            alt="Sadia"
          />

        </Carousel.Item>
      </Carousel>

      </Col>
    </Row>


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


      <Row className={styles.category}>
        <Col sm={2}>
          <img alt=" BEBIDAS " src="https://d1fk7i3duur4ft.cloudfront.net/RPf-q9EUg5Sj5BZ1kw1WaKBDqQs=/fit-in/233x383/https://sup-ecommerce-caita.s3.sa-east-1.amazonaws.com/1258896f-bebidasini.png" />
        </Col>
        <Col sm={10}>10</Col>
      </Row>



      <Row className={styles.category}>
        <Col sm={2}>
        <img alt=" HORTIFRUTI  " src="https://d1fk7i3duur4ft.cloudfront.net/lMPWT-mrJXqrxtFzZ_ymtuuD9ik=/fit-in/233x383/https://sup-ecommerce-caita.s3.sa-east-1.amazonaws.com/e8d66c48-hortifrutiini.jpg" />
          </Col>
        <Col sm={10}>10</Col>
      </Row>




       <Row>
         <Col className={styles.imgBackground}><img alt="Como Comprar" src="https://d1fk7i3duur4ft.cloudfront.net/D1wqEHEH4Xb9dPLG8t09FF3pj0A=/fit-in/335x0/https://sup-ecommerce-caita.s3-sa-east-1.amazonaws.com/d4c56868-como-comprar.jpg" /></Col>
         <Col className={styles.imgBackground}><img alt="Açougue" src="https://d1fk7i3duur4ft.cloudfront.net/_b6jt0BWOAdaMY0TZjergUB4Evo=/fit-in/335x0/https://sup-ecommerce-caita.s3-sa-east-1.amazonaws.com/a20957b3-ac%CC%A7ougue.jpg" /></Col>
         <Col className={styles.imgBackground}><img alt="Cervejas" src="https://d1fk7i3duur4ft.cloudfront.net/qIX42N60fb5epIxpOOOf7-CBnHM=/fit-in/335x0/https://sup-ecommerce-caita.s3-sa-east-1.amazonaws.com/a88f6650-cervejas.jpg" /></Col>
         <Col className={styles.imgBackground}><img alt="Especiais" src="https://d1fk7i3duur4ft.cloudfront.net/K2CLVJzDFiZPVH17584txFBvTQg=/fit-in/335x0/https://sup-ecommerce-caita.s3-sa-east-1.amazonaws.com/5417726e-especiais.jpg" /></Col>
      </Row>


      <Row>
         <Footer />
      </Row>
    </Container>



</div>
  )
}