
import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@material-ui/icons";
  import styled from "styled-components";
import {Link} from "react-router-dom";
import { Button } from "@material-ui/core";
  
  const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
  `;
  
  const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
  
    &:hover ${Info}{
      opacity: 1;
    }
  `;
  
  const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
  `;
  
  const Image = styled.img`
    height: 75%;
    z-index: 2;
  `;
  
  const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
      background-color: #e9f5f5;
      transform: scale(1.1);
    }
  `;
  const Produit = ({ item, changeQuantite }) => {


    const [searchParams, setSearchParams] = useSearchParams();

  const [produit, setProduit] = useState({});
  const [quantite, setQuantite] = useState(1);
  const [quantitePanier, setQuantitePanier] = useState(0);

  


    


    function ajouterPanier(produit){
      
     console.info("hello");
     
 
     let item = localStorage.getItem('cart');
     console.info(item);
 
     if(!item){
       localStorage.setItem('cart' , JSON.stringify([{ quantite : 1 , id :  produit.id , nom  : produit.nom , prix  : produit.prix  , image : produit.image}]));
       setQuantitePanier(1);
       changeQuantite(1);
     }else{
 
       let  tableau =  JSON.parse(item);
       tableau.push({ quantite : 1 , id :  produit.id , nom  : produit.nom , prix  : produit.prix  , image : produit.image});
       localStorage.setItem('cart' , JSON.stringify(tableau));
 
 
       setQuantitePanier(tableau.reduce((sum, current) => sum + current.quantite, 0));
       changeQuantite(tableau.reduce((sum, current) => sum + current.quantite, 0));
     }
 
 
 
 
   }



    return (
      <Container style={{ textAlign: 'center' }}>
        <Circle />
        <Image style={{ margin: '0 auto' ,display: 'block' }} src={item.image} />
        <Info>
          <Icon>
          <Button onClick={() => ajouterPanier(item)} ><ShoppingCartOutlined /></Button>
          </Icon>
          <Link to={'/produit?id=' + item.id} style={{ textDecoration: "none", color: "black" }} >
            <Icon>
              <SearchOutlined />
            </Icon>
          </Link>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
        
      </Container>
    );
  };
  /*<div style={{ position: 'relative', bottom: '150px', right: '360px', fontWeight: 'bold'}}>{item.nom}</div>*/
  
  export default Produit;
  
  
  