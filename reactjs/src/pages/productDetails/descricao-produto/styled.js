import styled from "styled-components";


const Container = styled.div `

.descricao-produto {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10em;
}

.img-produto img{
width: 60vw;
height: 50vh
}

.img-desc{
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Bebas Neue";
  width: 50%;
}

.img-desc img{
  width: 70%;
}

.desc {
  font-family: "Oswald";
  max-width: 20em;
  font-size: 26px;
}

.geral-desc{
  display: flex;
  flex-direction: row;
  font-family: "Bebas Neue";
}

.img-produto img {
  height: 100vh;
}

.desc-text{
margin-top: 80px;
margin-left: 150px;

}



.nome-produto{
  font-size: 35px;
  font-family: "Bebas Neue"
}

.cor{
  font-family: "Oswald", sans-serif;
  font-size: 20px;
}


.valores{
  display: flex;
  flex-direction: column;
  margin-top: 50px;
}

.parc{
  font-family: "Oswald", sans-serif;
}

.preco{
  font-size: 40px;
  color: #5EC5FF;
}


.tamanhos{
 margin-top: 20px;
 font-size: 32px;
 font-family: "Bebas Neue"
}

.opcoes-tamanho button:hover{
  cursor: pointer;
  opacity: 0.5;
  background-color: #f5f5f5;
  

}

.opcoes-tamanho button{
  font-family: "Bebas Neue";
  font-size: 26px;
  background-color: white;
}

.geral-carrinho{
  display: flex;
  flex-direction: column;
  margin-top: 20px;

}

.adc-carrinho:hover, .favo:hover{
  cursor: pointer;
  opacity: 0.5;
}

.adc-carrinho{
  background-color: #5EC5FF;
  font-family: "Bebas Neue";
  font-size: 25px;
  height: 40px;
  width: 250px;
  border: none;

}

.favo{
  background-color: gray;
  font-family: "Bebas Neue";
  font-size: 26px;
  height: 40px;
  width: 250px;
  border: none;
  margin-top: 15px;
}

.ava{
  margin-top: 25px;
  font-size: 19px;
}

.cora{
  font-size: 35px;
}





`
export {Container}