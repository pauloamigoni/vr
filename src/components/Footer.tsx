import styles from '../styles/components/Footer.module.css';
import { ImPhone } from "react-icons/im";

export function Footer(){
  return(
  <div className={styles.footerContainer}>
    <>
      <section>
        <div>
           <img alt="VR" src="./logo.png" />
       
           <span> <ImPhone />(19) 3442.7600 / 3701.6520</span>
        </div>
      </section>  

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
                   @ 2021 <strong>VR SOFTWARE LTDA</strong> - TODOS OS DIREITOS RESERVADOS<br />

                   RUA NARCISO GONÇALVES, N. 59
                   JARDIM CIDADE UNIVERSITÁRIA
                   LIMEIRA - SP | CEP 13484-646

0
                   </p>
               </div>
            
            </>


            <>
            <div className={styles.reservado}>
                   <p>
                      As imagens dos produtos no site são meramente ilustrativas<br />.
                   </p>
               </div>
            
            </>


  </div>
  )
}