import styled from "styled-components";
import { produitsPopulaires } from "../data";
import Produit from "./Produit";
import {useEffect, useState} from "react";
import {useLocation, useSearchParams} from "react-router-dom";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Produits = (props) => {

  const [listProduit, setListProduit] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();


  useEffect(() => {
    setListProduit([])
  }, [ ]);

  useEffect(() => {
    console.log('Location changed');
  }, [location]);

  let id = searchParams.get("id");
  console.info(id);
  useEffect(() => {
    console.info("hello" , listProduit);
    // GET request using fetch inside useEffect React hook
    try{
      console.info("hello id " , id);
     if(id){

       console.info("xxxxxxxxxxxxxxxxxxxx id " , id);
       fetch('http://localhost:8080/api/produit/category/'+id)
           .then(response => response.json())
           .then(data =>setListProduit(data));

     }else{

       fetch('http://localhost:8080/api/produit/')
           .then(response => response.json())
           .then(data =>setListProduit(data));

     }

    } catch(err)  {
      setListProduit([]);
    }

// empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, [id]);

  console.info("helloxx" , listProduit);
  return (
    <Container>
      {listProduit.map((item) => (
        <Produit item={item} changeQuantite={props.changeQuantite} key={item.id} />
      ))}
    </Container>
  );
};

export default Produits;
