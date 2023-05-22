import styled from "styled-components";
import { mobile } from "../responsive";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import {useEffect, useState} from "react";
import Announcement from "../components/Announcements";




const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
  margin-left: 50px;
`;

const ProduitDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 20%;
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

const Title = styled.h1`
  margin: 20px;
`;



const CommandesAttentes = () => {

  const [totalPanier, setTotalPanier] = useState(0);
  const [quantitePanier, setQuantitePanier] = useState(0);
  const [listProduit, setListProduit] = useState([]);


    const [commande, setCommande] = useState(null);

    useEffect(() => {

        let item  =  JSON.parse( localStorage.getItem('user'));

        fetch('http://localhost:8080/api/commande/'+item.id)
            .then(response => response.json())
            .then(data => setCommande(data));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    function getProduit(commande) {
         return JSON.parse(commande.produitsList);
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


function calculeTotalPanier(tableau) {
  let total = 0;
  for (let i = 0; i < tableau.length; i++) {
    total = total + tableau[i].quantite * tableau[i].prix;
  }

  setTotalPanier(total);
  setQuantitePanier(tableau.reduce((sum, current) => sum + current.quantite, 0));
}




    return(
        <>
        <Navbar/>
        <Announcement quantite ={quantitePanier}/>
        <Title>Mes Commandes en attentes</Title>
            <Info>

                <Hr />
                {commande && commande.map((item) => (
                    <>
                    <Produit key={item.id}>
                        <ProduitDetail>

                            <Details>
                                <ProduitId>
                                    <b>Numéro de commande:</b> {item.numCommande}
                                </ProduitId>
                                <ProduitNom>
                                    <b>Date Commande:</b> {item.dateCommande}
                                </ProduitNom>

                                <ProduitId> Montant :{item.montant} €</ProduitId>

                            </Details>
                        </ProduitDetail>
                        <PrixDetail>

                            {  getProduit(item).map((item) => (

                                <>
                                    <Image src={item.image} />
                                </>
                            ))}

                         </PrixDetail>

                    </Produit>
                        <Hr />
                    </>
                ))}





            </Info>
            <Newsletter />
      <Footer />


        </>
    )
};


export default CommandesAttentes;
