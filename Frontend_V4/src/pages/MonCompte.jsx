import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {useEffect, useState} from "react";

const Container = styled.div`
  width: 100vw;
  height: 90vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
  ),
  url("https://images.pexels.com/photos/317355/pexels-photo-317355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
  center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 400px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
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
`;

const Info = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const Label = styled.span`
  font-weight: 600;
`;

function InformationsUtilisateur() {
    const user = JSON.parse(localStorage.getItem("user"));

  
  
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

const [totalPanier, setTotalPanier] = useState(0);
const [quantitePanier, setQuantitePanier] = useState(0);
const [listProduit, setListProduit] = useState([]);

    return (
        <div>
            <Navbar quantite ={quantitePanier}/>
            <Container>
                <Wrapper>
                    <Title>Informations de l'utilisateur</Title>
                    
                    
                    <Info>
                    <br/><Label>Nom d'utilisateur :</Label> {user.nomUtilisateur}
                    </Info>
                    <Info>
                        <Label>Email :</Label> {user.email}
                    </Info>
                    <Info>
                        <Label>Numéro de téléphone :</Label> {user.numTelephone}
                    </Info>
                    <Info>
                    <Label>Adresse :</Label> {user.adresseUtilisateur}
                    </Info>
                    <Info>
                        <Label>Ville :</Label> {user.ville}
                    </Info>

                </Wrapper>
            </Container>
            <Footer/>
        </div>

    );
}

export default InformationsUtilisateur;
