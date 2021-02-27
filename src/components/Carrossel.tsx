import { Carousel, Col, Row } from 'react-bootstrap';

export function Carrosel(){
  return(
<>
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
</>
  )
}