import styles from '../styles/components/Topo.module.css'
import { BiUserCircle, BiCart, BiDollar, BiAlignJustify} from 'react-icons/bi';


export function Topo(){

    return(<>
        <div className={styles.topoContainer} >

            <section>
            <div>
                <a className={styles.boxLogo} href="/">
                    <img alt="Logo" src="./logo.png" />
                </a>
            </div>
            <div>
                <input type="search" placeholder="O que você procura?" name="search" value=""  />
            </div>
            <div>
                 <div className="topoContainerEntre">
                     <span><BiUserCircle /> <p> ENTRE OU <br /> CADASTRE-SE </p></span>
                </div>
               
            </div>
            <div>
                
            <button>
                <BiCart />
                <span>Carrinho</span>
                <span></span>
            </button>

            </div>

            </section>
            <nav>
           
                <ul>
                    <li><BiDollar />Promoção</li>
                    <li>
                        <img src="https://d1fk7i3duur4ft.cloudfront.net/QtE7MCMFWGI7OHS5AqbrGF-fbz0=/fit-in/19x19/https://sup-ecommerce-caita.s3.sa-east-1.amazonaws.com/2ef5f18b-carnes.png" alt=" AÇOUGUE "/>
                        Açougue
                    </li>
                    <li>
                        <img src="https://d1fk7i3duur4ft.cloudfront.net/94hcRtuRiUzXSaOU_yY2Lx1y_Uw=/fit-in/19x19/https://sup-ecommerce-caita.s3.sa-east-1.amazonaws.com/6d0282d3-hortifruti.png" alt=" HORTIFRUTI  " />
                        Hortifruti
                    </li>
                    <li>
                        <img src="https://d1fk7i3duur4ft.cloudfront.net/L2UmjP0q1rn47e2bt9-44nCi6Tc=/fit-in/19x19/https://sup-ecommerce-caita.s3.sa-east-1.amazonaws.com/730a767d-padaria.png" alt=" PADARIA " />
                        Padaria
                    </li>
                    <li>
                        <img src="https://d1fk7i3duur4ft.cloudfront.net/pQ2WN9T4WiTjzDAeCNZSwtNlY38=/fit-in/19x19/https://sup-ecommerce-caita.s3.sa-east-1.amazonaws.com/f6ecb633-frioselaticinios.png" alt=" FRIOS E LATICÍNIOS " />
                        Frios e laticínios</li>
                    <li>
                        <img src="https://d1fk7i3duur4ft.cloudfront.net/hb6nnwUfVb5mQG2sfE15j3hCju8=/fit-in/19x19/https://sup-ecommerce-caita.s3.sa-east-1.amazonaws.com/46811d15-mercearia.png" alt=" MERCEARIA ALIMENTOS " />
                        Mercearia Alimentos
                    </li>
                    <li>
                    <img src="https://d1fk7i3duur4ft.cloudfront.net/FhPWmtjgk2Q-zlYy7DVByAEpwuc=/fit-in/19x19/https://sup-ecommerce-caita.s3.sa-east-1.amazonaws.com/4160b70f-bebidas.png" alt=" BEBIDAS " />
                        Bebidas
                    </li>
                    <li><BiAlignJustify />Todas Categorias</li>
              </ul>
          
            </nav>
        </div>
      
        </>
    )

}