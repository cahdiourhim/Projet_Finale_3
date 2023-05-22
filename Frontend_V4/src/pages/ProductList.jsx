import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcements";
import Products from "../components/Produits";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const [listProduit, setListProduit] = useState([]);
  const [quantitePanier, setQuantitePanier] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams();
  console.info(searchParams.get("id"));

// http://localhost:8080/api/produit/category/

  useEffect(() => {
  let item = localStorage.getItem('cart');
  if(!item){
    localStorage.setItem('cart' , []);
  }else{
    let  tableau =  JSON.parse(item);
    setQuantitePanier(tableau.reduce((sum, current) => sum + current.quantite, 0));
  }

  }, []);


  return (
    <Container>
      <Navbar  quantite ={quantitePanier}/>
      <Announcement />
      <Title>NOS PRODUITS</Title>
      <Products changeQuantite={setQuantitePanier}/>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
