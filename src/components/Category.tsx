import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import styles from '../styles/components/Category.module.css';

export function Category(){
  return(

<>
      <Row className={styles.category}>
        <Col sm={2}>
          <img alt=" BEBIDAS " src="https://d1fk7i3duur4ft.cloudfront.net/RPf-q9EUg5Sj5BZ1kw1WaKBDqQs=/fit-in/233x383/https://sup-ecommerce-caita.s3.sa-east-1.amazonaws.com/1258896f-bebidasini.png" />
        </Col>
        <Col sm={10} className={styles.categoryContainer}>
        
        <Card style={{ width: '16rem', padding: '15px', fontSize: '1rem', marginBottom:'10px', marginLeft: '30px', alignItems: 'center', textAlign: 'center' }}>
            <Card.Img style={{ height: '167px', width: '167px', maxHeight: '100%', maxWidth: '100%'}}
             variant="top" src="https://d1fk7i3duur4ft.cloudfront.net/_itI4Wy8_RRtkKNqUmqAmcXV9no=/fit-in/180x180/https://sup-ecommerce-royal.s3.sa-east-1.amazonaws.com/3ee08f62-mg0762.jpg" alt="SUCO FRESH LARANJA DEL VALLE PET 250ML" />
            <Card.Body>
                <Card.Title className={styles.description}>
                   Suco Fresh Laranja Del Valle Pet 250 ml</Card.Title>
                <Card.Text className={styles.boxPreco}>
                    <div className={styles.textoPromocao}>R$ 1<span>,49 un</span></div>
                </Card.Text>
                <Button className={styles.botaoAdd}>+ Adicionar</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '16rem', padding: '15px', fontSize: '1rem', marginBottom:'10px', marginLeft: '10px', alignItems: 'center', textAlign: 'center' }}>
            <Card.Img style={{ height: '167px', width: '167px', maxHeight: '100%', maxWidth: '100%'}}
             variant="top" src="https://d1fk7i3duur4ft.cloudfront.net/vw4y_Bvf63YQlqzfnc6kH9ueHFY=/fit-in/180x180/https://sup-ecommerce-royal.s3.amazonaws.com/eca02f68-11433-5af2073dcef8b.jpg" alt="CERVEJA IPA LEOPOLDINA 500ML" />
            <Card.Body>
                <Card.Title className={styles.description}>
                  Cerveja Ipa Leopoldina 500ml</Card.Title>
                <Card.Text className={styles.boxPreco}>
                    <div className={styles.textoPromocao}>R$ 19<span>,91 un</span></div>
                </Card.Text>
                <Button className={styles.botaoAdd}>+ Adicionar</Button>
            </Card.Body>
        </Card>


        <Card style={{ width: '16rem', padding: '15px', fontSize: '1rem', marginBottom:'10px', marginLeft: '10px', alignItems: 'center', textAlign: 'center' }}>
            <Card.Img style={{ height: '167px', width: '167px', maxHeight: '100%', maxWidth: '100%'}}
             variant="top" src="https://d1fk7i3duur4ft.cloudfront.net/oKgnu_ZdUELHmBYQWll1kAibXhU=/fit-in/180x180/https://sup-ecommerce-marcio.s3.amazonaws.com/ba6343e2-1261-59d563cc2a427.jpg" alt="COQUETEL FR.VERMELHAS BARKOV 1L" />
            <Card.Body>
                <Card.Title className={styles.description}>
                  Coquetel Fr.Vermelhas Barkov 1l</Card.Title>
                <Card.Text className={styles.boxPreco}>
                    <div className={styles.textoPromocao}>R$ 13<span>,91 un</span></div>
                </Card.Text>
                <Button className={styles.botaoAdd}>+ Adicionar</Button>
            </Card.Body>
        </Card>


        <Card style={{ width: '16rem', padding: '15px', fontSize: '1rem', marginBottom:'10px', marginLeft: '10px', alignItems: 'center', textAlign: 'center' }}>
            <Card.Img style={{ height: '167px', width: '167px', maxHeight: '100%', maxWidth: '100%'}}
             variant="top" src="https://d1fk7i3duur4ft.cloudfront.net/7XDWtYDCw_FbzYaJv1BVoznwKv0=/fit-in/180x180/https://sup-ecommerce-gomes.s3.sa-east-1.amazonaws.com/a12828db-rr.jpg" alt="BEBIDA ENERGÉTICA FRUTAS TROPICAIS BALY 250ML" />
            <Card.Body>
                <Card.Title className={styles.description}>
                  Bebida Energética Frutas Tropicais Bally 250ml</Card.Title>
                <Card.Text className={styles.boxPreco}>
                    <div className={styles.textoPromocao}>R$ 3<span>,99 un</span></div>
                </Card.Text>
                <Button className={styles.botaoAdd}>+ Adicionar</Button>
            </Card.Body>
        </Card>


        </Col>
      </Row>



</>
  )
}