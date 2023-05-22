import styled from "styled-components";
import { mobile } from "../responsive";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

import {useEffect, useState} from "react";




const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  url(https://images.pexels.com/photos/5082554/pexels-photo-5082554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)
    center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`;


const Wrapper = styled.div`
width: 45%;
padding: 20px;
background-color: transparent;
margin-top: -200px;
${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  position: relative;
  &:after {
    content: "";
    display: block;
    height: 3px;
    width: 100%;
    background-color: teal;
    position: absolute;
    bottom: 0;
    left: 0;
    top: 32px;
  }
  margin-bottom: 40px; /* Ajouter une marge inférieure de 20 pixels */
`;




const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px 0;
padding: 10px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: #333;
  text-align: justify;
  margin-top: 20px;
`;


const PolitiqueRetour = () => {

  
  const [totalPanier, setTotalPanier] = useState(0);
  const [quantitePanier, setQuantitePanier] = useState(0);
  const [listProduit, setListProduit] = useState([]);


  
useEffect(() => {

  let item = localStorage.getItem('cart');
  if(!item){
    localStorage.setItem('cart' , []);
  }else{
    let  tableau =  JSON.parse(item);
    setListProduit(tableau);
    console.info(tableau);
    calculeTotalPanier(tableau);

  }



// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);


function calculeTotalPanier(tableau) {
  let total = 0;
  for (let i = 0; i < tableau.length; i++) {
    total = total + tableau[i].quantite * tableau[i].prix;
  }

  setTotalPanier(total);
  setQuantitePanier(tableau.reduce((sum, current) => sum + current.quantite, 0));
}



    return (
      <>
        <Navbar quantite ={quantitePanier}/>
        <Container>
          <Wrapper>
            <Title>Politique de retour et remboursement</Title>
            <p style={{ textAlign: "justify", textJustify: "inter-word", lineHeight: "1.5" }}>
              <strong>Chez E-Agora, votre satisfaction est notre priorité. Si vous n'êtes pas satisfait de votre achat, vous pouvez le
              retourner dans les 14 jours suivant sa réception, à condition qu'il soit inutilisé et dans son emballage d'origine.
              <br /><br />
              Pour effectuer un retour, veuillez nous contacter à E-Agora@gmail.com en indiquant votre numéro de commande et la raison de votre retour. Veuillez noter que les frais d'expédition pour le retour sont à votre charge.
              <br /><br />
              Une fois que nous avons reçu votre produit, nous l'inspecterons et vous informerons de l'approbation ou du rejet de votre remboursement. Si votre remboursement est approuvé, nous le traiterons sur votre mode de paiement initial. Veuillez noter que les frais d'expédition ne sont pas remboursables.
              <br /><br />
              Si vous rencontrez des problèmes avec votre produit, veuillez nous contacter immédiatement à E-Agora@gmail.com. Nous sommes là pour vous aider.</strong>
            </p>
          </Wrapper>
        </Container>
        <Newsletter />
        <Footer />
      </>
    );
  };
  


export default PolitiqueRetour;