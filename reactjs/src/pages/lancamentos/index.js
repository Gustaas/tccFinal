import Cabecalho from "../../components/cabecalho";
import { Container } from "./styled";

export default function Lancamentos() {
  return (
    <Container>
      <Cabecalho />
      <div class="titulo-pagina">LANÇAMENTOS</div>

      <div class="classificar-container">
        <div class="classificar">
          <select id="classificar">
            <option value="class1">Classificar por</option>
            <option value="class1">Mais relevantes</option>
            <option value="class2">Menor preço</option>
            <option value="class3">Maior preço</option>
          </select>
        </div>

        <div class="classificar2">
          <select id="classificar">
            <option value="class1">Gênero</option>
            <option value="class1">Feminino</option>
            <option value="class2">Masculino</option>
            <option value="class3">Lançamento</option>
            <option value="class4">Infantil</option>
          </select>
        </div>
      </div>

      <div class="container-produto">
        <div class="box">
          <div class="prod">
              
            <img src="https://s3-alpha-sig.figma.com/img/ff66/342b/7d8e17782572a87a40da44e35d046638?Expires=1633910400&Signature=FZ82EY30y72RoVaAA5jtOrzwDaz9Sdj~ozHl8jQiv4lfXtj-4t7fG-tTxE0WvsGPJAxcTCdyZpPxfTszbhMVKLnGYT7KEjHrLHmAsSqDx25Ud-S7RrQ9RPMJxYBzrOpS~zqLuOE7A08GZRN7wB-JDEObMwVFsR2Xs00rthkaMErMEC6I29w3XAhW3rJFhFZdhYberXogMtvYBXPyOyMEXAAKvPP3t-ou3Z0Gr7gg9hSQR1cO0VAnwpcVclv4PKYeLKk3Z4cefcGw~0l-KYUIgNl2lqv6BKDCkIAdG1ldKi7dzUxS7pyaY-Go-6gRRMoGZGDb5WAd4wyIvCo8GftAsw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt=''/>  
          </div>
          <div class="nome-produto">
            CAMISA REAL MADRID HOME 21/22 S/N° TORCEDOR ADIDAS MASCULINA -
            BRANCO
          </div>
          <div class="valor">R$ 279.99</div>
          <div class="parcelamento">ou 7x de R$ 40,00</div>
          <div class="adc-carrinho">
              
            <button> Adicionar ao carrinho </button>  
          </div>
        </div>
        <div class="box">
          <div class="prod">
              
            <img src="https://s3-alpha-sig.figma.com/img/90c4/8f4a/fe5930abfca5375c87888cfbf31b44e8?Expires=1633910400&Signature=XWikMSrXL2bEVjGnbFBVbXx~Hc-cOHuo3Ppg6dQQJxZTTZvT4JaBl77kR76PYY1Ic9ENpC7v~lIRvcXYNnnKcfNBb2zkAqOJ4oMYE~JBJ0-J13pqV5Xpt5IutwGywclQKrP4ZxTsUSOXJ8ju5dHu4cOkF52SaW4~wZ32mZOzGeOIeQpNKrChV79D3y5kR1cW~bjC5vwCmL1nHUrC7srcz35sDUPb-2XWFq~NW5QKSQ~7UOoSZXFM5fGr6lUOWzfiGYXTNpV66X~Mx~PB1yEzdzzzB9gEJfaekdIDjaTaeN1ZfEyFi6wVvCKpM0eiogywh8b6~YY5R1mT0wKfGZK1uw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt=''/>  
          </div>
          <div class="nome-produto">
            CAMISA REAL MADRID AWAY 21/22 S/N° TORCEDOR ADIDAS MASCULINA -
            AZUL+LARANJA
          </div>
          <div class="valor">R$ 269.99</div>
          <div class="parcelamento">ou 6x de R$ 45,00</div>
          <div class="adc-carrinho">
              
            <button> Adicionar ao carrinho </button>  
          </div>
        </div>
        <div class="box">
          <div class="prod">
              
            <img src="https://s3-alpha-sig.figma.com/img/d7e2/14f5/5aecf8117b9c39918478c1cf61386685?Expires=1633910400&Signature=Em4-DIyNKz5QFtwVQRPXrkE1tbcby5~FTK4WjfQNFJsDsF7PuwcUu11zTnq3SJrA7UKFdOp12NHORJehtrtBu6CiFqMdsT~7Zw8ye2xmzIC1UAOVeGRo2Voj2zd1ac90sTBtS0XguvKAkAH97PRgeStrfhL8u6C~Plxaw4omT3N0sMjlM0hKOEBd2njxhtH~Agbx5sp5CcuaAgfYGN3TJwwET4AStILn-9xZe9ixiXW-4lz8SnIe8iFgJiUK0deuTqhxW5IqQnreMX-ee8kWwY6ZoGfIqCXRqReppdfxZP2Z9CwZ9fh3qNjjU8cdzW-eZ9D9uQ5wt~LTalU0HwBO~w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt=''/>  
          </div>
          <div class="nome-produto">
            CALÇÃO PSG HOME 21/22 NIKE MASCULINO - MARINHO+VERMELHO
          </div>
          <div class="valor">R$ 179,99</div>
          <div class="parcelamento">até 4x de R$ 45,00</div>
          <div class="adc-carrinho">
              
            <button> Adicionar ao carrinho </button>  
          </div>
        </div>
        <div class="box">
          <div class="prod">
              
            <img src="https://s3-alpha-sig.figma.com/img/9f3e/8f8a/cc5215921fafff6614b0b632f2c41faa?Expires=1633910400&Signature=cRGHr-mcAJRVo~gg~P0q9owQ1Xb8cmqRvJCuawouPxSaOxZlTFOZKoZtYryxOgOD2lvcVz0fdpVfXGWljpbL~3c7L86m2AFKr6Qf0NtisIeIq4CPk0QMAI5IKegSchcQq6XAdqabdCYC1tOdQUfmgIP-b5UpSjAM6yMnvZX6uc3e8SxFf4yfwqRgQYQ50ryfLRSXCQ~c8NqRjsdEsmd80JbrX1FpQ1r3KgghM-f~aHC4DaqlyU9B1P9f~XRoNqTWoeQ1w~iW6Hz6QUvqr3-LJPsl9Zw2aiHR3xyyyEMNIqeyD8m1NHnUzuOj5ozTW2Xy71bSHY2XQBRXPz2p72rQpg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt=''/>  
          </div>
          <div class="nome-produto">
            CAMISA PSG HOME 21/22 MESSI Nº 30 NIKE MASCULINA - MARINHO
          </div>
          <div class="valor">R$ 319,00</div>
          <div class="parcelamento">até 7x de R$ 45,57</div>
          <div class="adc-carrinho">
              
            <button> Adicionar ao carrinho </button>  
          </div>
        </div>
      </div>
    </Container>
  );
}
