import styled from "styled-components";
import { mobile } from "../responsive";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {ListItem, ListItemText} from "@material-ui/core";

import { useNavigate } from "react-router-dom";


const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 160vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(https://images.pexels.com/photos/4076335/pexels-photo-4076335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%; /* change the width here */
  padding: 20px;
  background-color: white;
  
  ${mobile({ width: "75%" })}
`;

const Input = styled.input`
  flex: 1;
  min-width: 60%; /* change the min-width here */
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;




const Title = styled.h1`
  font-size: 25px;
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
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  
  
`;



const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-top: 10px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
  
  label {
    margin-top: 10px; /* ajouter une marge en bas pour espacer le label et son champ */
  }
`;

const Label = styled.label`
  margin-right: 10px;
  
`;

const TextArea = styled.textarea`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  resize: none;
`;

const Select = styled.select`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 0px`
;
const MettreVente = (props) => {

  const [listCategories, setlistCategories] = useState([]);
  let navigate = useNavigate();
  const [totalPanier, setTotalPanier] = useState(0);
  const [quantitePanier, setQuantitePanier] = useState(0);
  const [listProduit, setListProduit] = useState([]);

  useEffect(() => {
    console.info("hello");
    // GET request using fetch inside useEffect React hook
    fetch('http://localhost:8080/api/categories')
        .then(response => response.json())
        .then(data => setlistCategories(data));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);


  const handleKeyPress = (event) => {
    if (event.key === '-' || event.key === '+') {
      event.preventDefault();
    }
  }//cela va empecher l'utilisateur d'écrire des nombre négatif

  
// Initialisation de l'état local pour stocker l'état de chaque champ de formulaire
const [formState, setFormState] = useState({
  nom: "",
  image: "",
  description: "",
  prix: "",
  quantite: "",
  idCategory: "",
  marque : ""

});

const handleFieldChange = (event) => {


  const fieldName = event.target.id;
  const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
  setFormState({ ...formState, [fieldName]: value });
};



  const [isFormValide, setIsFormValide] = useState(false);

  const handleFormSubmit = (event) => {
  console.info(formState);
      event.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formState)
    };
    fetch('http://localhost:8080/api/produit', requestOptions)
        .then(response => response.json())
        .then(data => {


          navigate("/produit?id="+data.id);

        });



  };


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
          <Title >Mettre en vente un produit</Title>
          <Form onSubmit={handleFormSubmit}>
          <FormGroup>
            <label htmlFor="nom" style={{ display: "block" }}>Nom du produit:</label>
            <Input type="text" id="nom" placeholder="Nom du produit" value={formState.nom} onChange={handleFieldChange} required  />
          </FormGroup>

  
            <FormGroup>
              <label htmlFor="description"style={{ display: "block" }}>Description du produit:</label>
              <TextArea id="description" placeholder="Description du produit"value={formState.description} onChange={handleFieldChange} rows="9" cols="55"  required  />
            </FormGroup>
  
            <FormGroup>
              <label htmlFor="prix"style={{ display: "block" }}>Prix du produit:</label>
              <Input type="number" id="prix" placeholder="Prix du produit"value={formState.prix} onChange={handleFieldChange} min="0" onKeyPress={handleKeyPress} required  />
            </FormGroup>

            <FormGroup>
              <label htmlFor="quantite"style={{ display: "block" }}>Quantité du produit:</label>
              <Input type="number" id="quantite" placeholder="Quantité du produit"value={formState.quantite} onChange={handleFieldChange} min="0" onKeyPress={handleKeyPress} required />
            </FormGroup>

            <FormGroup>
              <label htmlFor="marque"style={{ display: "block" }}>Marque du produit:</label>
              <Input type="text" id="marque" placeholder="Quantité du produit"value={formState.marque} onChange={handleFieldChange} min="0" onKeyPress={handleKeyPress} required />
            </FormGroup>

            <FormGroup>
              <label htmlFor="image"style={{ display: "block" }}>Image du produit:</label>
               <Input type="text" id="image" placeholder="Mettre l'url de l'image" value={formState.image} onChange={handleFieldChange} required  />

            </FormGroup>


            <FormGroup>
              <label htmlFor="idCategory" style={{ display: "block" }}>Catégorie:</label>
              <Select id="idCategory" value={formState.idCategory} onChange={handleFieldChange} required>
                <option value="">Sélectionnez une catégorie</option>
                {  listCategories.map(value => (
                    <option value={value.id}>{value.nom}</option>
                ))
                }

               </Select>
            </FormGroup>

            <FormGroup>

          </FormGroup>


            <Button type="submit"  >Valider</Button>
            </Form>
        </Wrapper>
       
    </Container>
    <Newsletter />
    <Footer />

    </>
          
    );
};

export default MettreVente;
