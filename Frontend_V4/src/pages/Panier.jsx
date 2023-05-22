import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import {useEffect, useState} from "react";
import { Link } from "@material-ui/core";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Titre = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-Articles: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}

`;

const Info = styled.div`
  flex: 3;
`;

const Produit = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProduitDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProduitNom = styled.span``;

const ProduitId = styled.span``;

const ProduitColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProduitTaille = styled.span``;

const PrixDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-Articles: center;
  justify-content: center;
`;

const ProduitQuantitéContainer = styled.div`
  display: flex;
  align-Articles: center;
  margin-bottom: 20px;
`;

const ProduitQuantité = styled.div`
  font-size: 24px;
  margin: 5px;
  margin-left: -2px;
  
  ${mobile({ margin: "5px 15px" })}
`;

const ProduitPrix = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const SupprimerProduit = styled.div`
  font-size: 20px;
  cursor: pointer;
  margin-bottom: 30px;
  margin-top: 30px;
  margin-right: 10px; /* Ajoute une marge de 10px à droite du bouton */
  font-weight: bold;
  
  ${mobile({ 
    marginBottom: "20px",
    marginRight: "5px"  /* Réduit la marge à 5px sur mobile */ 
  })}
`;


const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Résumé = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const RésuméTitre = styled.h1`
  font-weight: 200;
`;

const RésuméArticle = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const RésuméArticleText = styled.span``;

const RésuméArticlePrix = styled.span``;







const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Panier = () => {

  const [livraisonDomicile, setLivraisonDomicile] = useState(false);
  const [totalPanier, setTotalPanier] = useState(0);
  const [quantitePanier, setQuantitePanier] = useState(0);
  const navigate = useNavigate();

  const handleLivraisonDomicile = () => {
    setLivraisonDomicile(true);
    let item = localStorage.getItem('cart');
    let  tableau =  JSON.parse(item);
    calculeTotalPanier(tableau);
  };

  const handleRetraitMagasin = () => {
    setLivraisonDomicile(false);
    let item = localStorage.getItem('cart');
    let  tableau =  JSON.parse(item);
    calculeTotalPanier(tableau);
    //setRetraitMagasin(!retraitMagasin);
  };
  const [listProduit, setListProduit] = useState([]);

  function calculeTotalPanier(tableau) {
    let total = 0;
    for (let i = 0; i < tableau.length; i++) {
      total = total + tableau[i].quantite * tableau[i].prix;
    }

    setTotalPanier(total);
    setQuantitePanier(tableau.reduce((sum, current) => sum + current.quantite, 0));
  }

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


  const handleClick = (id) => {
  console.info(id);


    let item = localStorage.getItem('cart');
    let  tableau =  JSON.parse(item);
    tableau  = tableau.filter(value => value.id !== id);
    console.info(tableau);

    localStorage.setItem('cart' ,JSON.stringify(tableau));
    setListProduit(tableau);
    calculeTotalPanier(tableau);
  };

  const gotoList = ( ) => {
    console.info("hello world");
    navigate('/list');
  };

  const validerCommande = async () => {
    console.info("validerCommande");


    let user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      console.info("GO validerCommande", user);

      let item = localStorage.getItem('cart');

      console.info(item);

      try{
      const response = await axios
          .post('http://localhost:8080/api/produit/commande/'+user.id,
              JSON.parse( item));


      alert('Votre commande est bien passé , vous allez recevoir un mail');
        localStorage.removeItem('cart');
        navigate('/');
    }
  catch (error) {
    alert('Error lors de la validation de commande');

  }



    } else {
      console.info("GO inscrir");
      navigate('/connexion');

    }


  };


  return (
    <Container>
      <Navbar  quantite ={quantitePanier}/>
      <Announcement />
      <Wrapper>
        <Titre>Votre panier</Titre>
        <Top>
          <TopButton> <Link onClick={() => gotoList()} style={{ textDecoration: "none", color: "black" }}> Continuer vos achats </Link>
           </TopButton>
          <TopTexts>
            <TopText>Votre panier({quantitePanier})</TopText>
            <TopText>Favoris (0)</TopText>
          </TopTexts>
         </Top>
        <Bottom>
          <Info>

            {listProduit.map((item) => (
                <Produit key={item.id}>
                  <ProduitDetail>
                    <Image src={item.image} />
                    <Details>
                      <ProduitNom>
                        <b>Produit:</b> {item.nom}
                      </ProduitNom>
                      <ProduitId>
                        <b>ID:</b> {item.id}
                      </ProduitId>


                    </Details>
                  </ProduitDetail>
                  <PrixDetail>
                    <ProduitQuantitéContainer>

                      <ProduitQuantité>Quantité : {item.quantite}</ProduitQuantité>

                    </ProduitQuantitéContainer>
                    <ProduitPrix> {item.prix} €</ProduitPrix>

                    <SupprimerProduit onClick={() => handleClick(item.id)} >Supprimer</SupprimerProduit>
                  </PrixDetail>
                </Produit>
            ))}


            <Hr />

          </Info>
          <Résumé>
            <RésuméTitre>Résumé</RésuméTitre>

            <RésuméArticle>
              <RésuméArticleText>Livraison</RésuméArticleText>
              <RésuméArticlePrix>
                {livraisonDomicile ? "5.90 €" : "Payant"}
              </RésuméArticlePrix>
              <input
                  type="radio"
                  name="typeLivraison"
                  checked={livraisonDomicile}
                  onChange={handleLivraisonDomicile}
              />
              <label>Livraison à domicile</label>
            </RésuméArticle>
            <RésuméArticle>
              <RésuméArticleText>Retrait </RésuméArticleText>
              <RésuméArticlePrix>
                {!livraisonDomicile ?  " Gratuit" :  " Gratuit"}
              </RésuméArticlePrix>
              <input
                  type="radio"
                  name="typeLivraison"
                  checked={!livraisonDomicile}
                  onChange={handleRetraitMagasin}
              />
              <label>Retrait en magasin</label>
            </RésuméArticle>


            <RésuméArticle>
              <RésuméArticleText>Sous-total</RésuméArticleText>
              <RésuméArticlePrix> {totalPanier} €</RésuméArticlePrix>
            </RésuméArticle>
            { livraisonDomicile && (<RésuméArticle>
              <RésuméArticleText>Livraison</RésuméArticleText>
              <RésuméArticlePrix> 5.90 €</RésuméArticlePrix>
            </RésuméArticle>)

            }

            <RésuméArticle type="total">
              <RésuméArticleText>Total</RésuméArticleText>
              <RésuméArticlePrix>
                {livraisonDomicile ?  totalPanier + 5.9 : totalPanier } €
              </RésuméArticlePrix>
            </RésuméArticle>
            {  !livraisonDomicile ? (
                <div>

                  <Button  onClick={validerCommande} >Valider la commande</Button>

                </div>
            ) :  (
                <Button>Passer au paiement</Button>
            ) }

     

          </Résumé>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Panier;
