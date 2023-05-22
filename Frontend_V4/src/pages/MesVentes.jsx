import styled from "styled-components";
import { mobile } from "../responsive";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import {useEffect, useState} from "react";


const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;

const MesVentes = () => {


    const [commande, setCommande] = useState(null);



    useEffect(() => {

        let item = localStorage.getItem('user');



        fetch('http://localhost:8080/api/commande/'+item.id)
            .then(response => response.json())
            .then(data => setCommande(data));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);


    return(
        <>
        <Navbar/>
        <Title>Mes ventes</Title>
        
        
        
        </>


    )
   

};


export default MesVentes;
