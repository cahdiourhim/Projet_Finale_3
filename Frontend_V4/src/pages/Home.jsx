import React from 'react'
import Navbar from '../components/Navbar'
import Announcements from '../components/Announcements';
import Slider from '../components/Slider';
import Categories from "../components/Categories";
import Produits from '../components/Produits';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import {useEffect, useState} from "react";

export default function Home() {


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

    <div>
      <Announcements/>
      <Navbar quantite ={quantitePanier}/>
      <Slider/>
      <Categories/>
      <Produits changeQuantite={setQuantitePanier} />
      <Newsletter/>
      <Footer/>
    </div>
  )
}
