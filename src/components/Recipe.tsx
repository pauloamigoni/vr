import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import styles from '../styles/components/Recipe.module.css';

export function Recipe(){
  return(

<>
      <Row className={styles.recipeContainer}>
        <Row>
        <Col>
            <h2>LISTAS E RECEITAS</h2>    
          <p>Listas criadas para facilitar e agilizar suas compras. Nelas vocês encontram os itens básicos para cada ocasião. 
         Você pode optar por comprar todos os produtos, alterar quantidades, excluir ou adicionar itens.</p>

        </Col>

        </Row>
        <Row>
        
  

        <Card className={styles.box} style={{ width: '16rem', fontSize: '1rem', marginBottom:'10px', marginLeft: '130px', alignItems: 'center', textAlign: 'center', marginTop: '15px' }}>
            <Card.Img
             variant="top" src="https://d1fk7i3duur4ft.cloudfront.net/F8OIle_u6yUQUENQwbETRw68MDk=/fit-in/300x0/https://sup-ecommerce-caita.s3.amazonaws.com/5005a838-caitareceitabemcasdoblog640x300.jpg" alt="RECEITA" /> 
             <Card.Body>
                <Card.Text>
                    <div className={styles.texto}>Doce Cozinha: Verdadeiras Trufas de Chocolate</div>
                </Card.Text>
            </Card.Body>
        </Card>


        <Card className={styles.box} style={{ width: '16rem', fontSize: '1rem', marginBottom:'10px', marginLeft: '10px', alignItems: 'center', textAlign: 'center', marginTop: '15px' }}>
            <Card.Img
             variant="top" src="https://d1fk7i3duur4ft.cloudfront.net/F8OIle_u6yUQUENQwbETRw68MDk=/fit-in/300x0/https://sup-ecommerce-caita.s3.amazonaws.com/5005a838-caitareceitabemcasdoblog640x300.jpg" alt="RECEITA" /> 
             <Card.Body>
                <Card.Text className={styles.box}>
                    <div className={styles.texto}>Doce Cozinha: Bem-Casado de Travessa</div>
                </Card.Text>
            </Card.Body>
        </Card>

        <Card className={styles.box} style={{ width: '16rem', fontSize: '1rem', marginBottom:'10px', marginLeft: '10px', alignItems: 'center', textAlign: 'center', marginTop: '15px' }}>
            <Card.Img
             variant="top" src="https://d1fk7i3duur4ft.cloudfront.net/F8OIle_u6yUQUENQwbETRw68MDk=/fit-in/300x0/https://sup-ecommerce-caita.s3.amazonaws.com/5005a838-caitareceitabemcasdoblog640x300.jpg" alt="RECEITA" /> 
             <Card.Body>
                <Card.Text className={styles.box}>
                    <div className={styles.texto}>Massa de Pizza Low Carb</div>
                </Card.Text>
            </Card.Body>
        </Card>


        <Card className={styles.box} style={{ width: '16rem', fontSize: '1rem', marginBottom:'10px', marginLeft: '10px', alignItems: 'center', textAlign: 'center', marginTop: '15px' }}>
            <Card.Img
             variant="top" src="https://d1fk7i3duur4ft.cloudfront.net/F8OIle_u6yUQUENQwbETRw68MDk=/fit-in/300x0/https://sup-ecommerce-caita.s3.amazonaws.com/5005a838-caitareceitabemcasdoblog640x300.jpg" alt="RECEITA" /> 
             <Card.Body>
                <Card.Text className={styles.box}>
                    <div className={styles.texto}>Doce Cozinha: Torta de Palha Italiana</div>
                </Card.Text>
            </Card.Body>
        </Card>


       
        </Row>
       </Row> 
</>
  )
}