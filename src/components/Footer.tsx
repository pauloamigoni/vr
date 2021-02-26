import styles from '../styles/components/Footer.module.css';
import { ImPhone } from "react-icons/im";

export function Footer(){
  return(
  <div className={styles.footerContainer}>
    <>
      <section>
        <div>
           <img alt="Caitá Supermercados" src="https://d1fk7i3duur4ft.cloudfront.net/z9yVrCL9hb_JkluUZPOGt8PqX6w=/fit-in/0x55/https://sup-ecommerce-caita.s3-sa-east-1.amazonaws.com/54e1b1af-_site_dbcommerce_5383762127cfd.png" />
        </div>
        <div>
           <span> <ImPhone />(54) 2124-1800 </span>
        </div>
      </section>  

      <nav>
           
                <ul>
                  <li>POLÍTICA DE PRIVACIDADE</li>
                  <li>COMO COMPRAR </li>
                  <li>TERMOS DE USO</li>
                  <li>FORMAS DE PAGAMENTO</li>
                  <li>LOCAIS E HORÁRIOS DE ENTREGA</li>
                  <li>CADASTRO</li>
                  <li>CARTÃO CAITÁ</li>
                  <li>TABLOIDE VIRTUAL</li>
                  <li>HORARIO DE ATENDIMENTO</li>
                  <li>FALE CONOSCO</li>
              </ul>
          
            </nav>
</>
<>
            <div className={styles.pagamentoContainer}>

              <p>Pagamentos aceitos:</p>
                <div>
                    <span><p>OnLine</p> 
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
            </>

            <>
            <div className={styles.endereco}>
                   <p>
                   @ 2021 <strong>Caitá Supermercados</strong> - TODOS OS DIREITOS RESERVADOS<br />

                  OCTAVIANO ZANDONAI & CIA LTDA - CNPJ: 02.185.091/0005-36 - 
                  AV OSVALDO ARANHA, 667 - JUVENTUDE DA ENOLOGIA, BENTO GONCALVES - RS, 95700200
                   </p>
               </div>
            
            </>


            <>
            <div className={styles.reservado}>
                   <p>
                      As imagens dos produtos no site são meramente ilustrativas. Para melhor atender nossos clientes, não vendemos por atacado. Alguns produtos podem trazer riscos à saúde e que têm sua venda restrita a determinado público.<br />
                      Preços, ofertas e condições exclusivos para Internet e válidos durante o dia de hoje, podendo sofrer alterações sem prévia notificação.<br />
                      Proibida a venda de produtos elencados na Lei n.° 8069/90, art. 81, inciso II (ECA), em especial bebidas alcoólicas, para menores de 18 anos. Venda sujeita à disponibilidade de estoque no dia da entrega. <br />
                      No caso de faltar algum produto, este não será entregue e o valor correspondente não será cobrado.
                   </p>
               </div>
            
            </>


  </div>
  )
}