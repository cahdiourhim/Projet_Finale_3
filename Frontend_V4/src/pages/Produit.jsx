import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcements";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`;

const Produit = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const [produit, setProduit] = useState({});
  const [quantite, setQuantite] = useState(1);
  const [quantitePanier, setQuantitePanier] = useState(0);





  useEffect(() => {

    let item = localStorage.getItem('cart');
    if(!item){
      localStorage.setItem('cart' , []);
    }else{
      let  tableau =  JSON.parse(item);
     setQuantitePanier(tableau.reduce((sum, current) => sum + current.quantite, 0));
    }


    fetch('http://localhost:8080/api/produit/'+searchParams.get("id"))
        .then(response => response.json())
        .then(data => setProduit(data));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);


  function add(){
    setQuantite(
        quantite + 1
    )
  }

  function minus(){
    if(quantite >  1)
    setQuantite(
        quantite - 1
    )
  }


  function ajouterPanier(){
     console.info(produit.id);
    console.info(quantite);

    let item = localStorage.getItem('cart');
    console.info(item);

    if(!item){
      localStorage.setItem('cart' , JSON.stringify([{ quantite , id :  produit.id , nom  : produit.nom , prix  : produit.prix  , image : produit.image}]));
      setQuantitePanier(quantite);
    }else{

      let  tableau =  JSON.parse(item);
      tableau.push({ quantite , id :  produit.id , nom  : produit.nom , prix  : produit.prix  , image : produit.image});
      localStorage.setItem('cart' , JSON.stringify(tableau));


      setQuantitePanier(tableau.reduce((sum, current) => sum + current.quantite, 0));
    }




  }

  return (
    <Container>
      <Navbar quantite={quantitePanier} />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={produit.image} />
        </ImgContainer>
        <InfoContainer>
          <Title>{produit.nom}</Title>
          <Desc>
            {produit.description}
          </Desc>
          <Price> {produit.prix} €</Price>
       {/*   <FilterContainer>
            <Filter>
              <FilterTitle>Couleur</FilterTitle>
              <FilterColor color="Noir" />
              <FilterColor color="Bleu" />
              <FilterColor color="Gris" />
            </Filter>
            <Filter>
              <FilterTitle>Taille</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>*/}
          <AddContainer>
            <AmountContainer>
              <Remove onClick={minus} />
              <Amount>{quantite}</Amount>
              <Add onClick={add}  />
            </AmountContainer>
            <Button onClick={ajouterPanier} >Ajouter au panier</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Produit;
