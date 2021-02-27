import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import styles from '../styles/components/Content.module.css'


export function Content(){
    return(
    
       
<Container className={styles.container}>


<Row>
   
        <Card style={{ width: '16rem', padding: '15px', fontSize: '1rem', marginBottom:'10px', marginRight: '20px', alignItems: 'center', textAlign: 'center' }}>
            <Card.Img style={{ height: '167px', width: '167px', maxHeight: '100%', maxWidth: '100%'}}
             variant="top" src="https://d1fk7i3duur4ft.cloudfront.net/YVPcjHu2I24kEbwNWbH964gsQtc=/fit-in/180x180/https://produtos-dbcommerce.s3.amazonaws.com/10213.jpg" />
            <div className={styles.porcent}>-17%</div>
            <Card.Body>
                <Card.Title className={styles.description}>
                    Bife Coxão Mole Bonivo Kg</Card.Title>
                <Card.Text className={styles.boxPreco}>
                    <div className={styles.textoNormal}>R$ 39<span>,90</span> kg</div>
                    <div className={styles.textoPromocao}>R$ 32<span>,90 kg</span></div>
                </Card.Text>
                <Button className={styles.botaoAdd}>+ Adicionar</Button>
            </Card.Body>
        </Card>


        <Card style={{ width: '16rem', padding: '15px', fontSize: '1rem', marginBottom:'10px', marginRight: '20px', alignItems: 'center', textAlign: 'center' }}>
            <Card.Img style={{ height: '167px', width: '167px', maxHeight: '100%', maxWidth: '100%'}}variant="top" src="https://d1fk7i3duur4ft.cloudfront.net/RaMmcfnu8--82y89WES3CJ7Fe6o=/fit-in/180x180/https://sup-ecommerce-caita.s3.amazonaws.com/e893f0e7-4159.jpg" alt="TOMATE CAQUI KG" />
            <div className={styles.porcent}>-37%</div>
            <Card.Body>
                <Card.Title className={styles.description}>
                   Tomate Caqui Kg</Card.Title>
                <Card.Text className={styles.boxPreco}>
                    <div className={styles.textoNormal}>R$ 3<span>,99</span> kg</div>
                    <div className={styles.textoPromocao}>R$ 2<span>,49 kg</span></div>
                </Card.Text>
                <Button className={styles.botaoAdd}>+ Adicionar</Button>
            </Card.Body>
        </Card>

   
        <Card style={{ width: '16rem', padding: '15px', fontSize: '1rem', marginBottom:'10px', marginRight: '20px', alignItems: 'center', textAlign: 'center' }}>
            <Card.Img style={{ height: '167px', width: '167px', maxHeight: '100%', maxWidth: '100%'}} variant="top" src="https://d1fk7i3duur4ft.cloudfront.net/oZW88JMwsZpmp4iS1D_C9X1MnN4=/fit-in/180x180/https://sup-ecommerce-caita.s3.sa-east-1.amazonaws.com/834922e7-7891150009134.jpg" alt="LAVA ROUPA LIMPEZA BRILHANTE SCH 1.6KG" />
            <div className={styles.porcent}>-31%</div>
            <Card.Body>
                <Card.Title className={styles.description}>
                    Lava Ropua Limpeza Brilhante Sch 1.6kg</Card.Title>
                <Card.Text className={styles.boxPreco}>
                    <div className={styles.textoNormal}>R$ 15<span>,99</span> kg</div>
                    <div className={styles.textoPromocao}>R$ 10<span>,99 kg</span></div>
                </Card.Text>
                <Button className={styles.botaoAdd}>+ Adicionar</Button>
            </Card.Body>
        </Card>

        <Card style={{ width: '16rem', padding: '15px', fontSize: '1rem', marginBottom:'10px', marginRight: '20px', alignItems: 'center', textAlign: 'center' }}>
            <Card.Img style={{ height: '167px', width: '167px', maxHeight: '100%', maxWidth: '100%'}} variant="top" src="https://d1fk7i3duur4ft.cloudfront.net/0YIt2d4l7tIOV-7kNbNYzweKl7o=/fit-in/180x180/https://produtos-dbcommerce.s3.sa-east-1.amazonaws.com/7891172000942.jpg" alt="PAPEL HIGIÊNICO FOLHA DUPLA NEVE 20M C/10" />
            <div className={styles.porcent}>-27%</div>
            <Card.Body>
                <Card.Title className={styles.description}>
                    Papel Higiênico Folha Dupla Neve 20m C/10</Card.Title>
                <Card.Text className={styles.boxPreco}>
                    <div className={styles.textoNormal}>R$ 10<span>,99</span> kg</div>
                    <div className={styles.textoPromocao}>R$ 7<span>,99 kg</span></div>
                </Card.Text>
                <Button className={styles.botaoAdd}>+ Adicionar</Button>
            </Card.Body>
        </Card>


    </Row>
        </Container>
    
    )
}