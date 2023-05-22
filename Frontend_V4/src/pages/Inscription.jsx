import styled from "styled-components";
import { mobile } from "../responsive";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
  ),
  url(https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)
  center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
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

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Inscription = () => {

  const [totalPanier, setTotalPanier] = useState(0);
  const [quantitePanier, setQuantitePanier] = useState(0);
  const [listProduit, setListProduit] = useState([]);
    const navigate = useNavigate();
  const [formState, setFormState] = useState({
    Nom: "",
    Prenom: "",
    Tel: "",
    Email: "",
    Ville: "",
    Adresse: "",
    Password: "",
    PasswordC: "",
  });
  const [error, setError] = useState("");

  const handleFieldChange = (event) => {
    const fieldName = event.target.id;
    const value =
        event.target.type === "checkbox" ? event.target.checked : event.target.value;
    setFormState({ ...formState, [fieldName]: value });
  };

  const isFormValid = () => {
    // Vérifier si tous les champs obligatoires sont remplis
    return (
        formState.Nom !== "" &&
        formState.Prenom !== "" &&
        formState.Tel !== "" &&
        formState.Password !== "" &&
        formState.Email !== "" &&
        formState.Password !== "" &&
        formState.PasswordC !== ""

    );
  };



  const handleSubmit = async (event) => {
    event.preventDefault();
    // Vérifier si le formulaire est valide avant de le soumettre
    if (isFormValid()) {
      if (formState.Password !== formState.PasswordC) {
        setError("Les mots de passe ne correspondent pas");
        return;
      }
      // Soumettre le formulaire
      try{
        const response = await axios
            .post("http://localhost:8080/api/auth/signup",
                {
                  "nomUtilisateur": formState.Prenom + " " + formState.Nom,
                  "mail": formState.Email,
                  "numTelephone": formState.Tel,
                  "psw": formState.Password,
                  "adresseUtilisateur": formState.Adresse,
                  "ville": formState.Ville,
                  "types": ["vendeur", "client"],
                });
        console.log(response.data);
          navigate('/connexion');

      }
      catch (error) {
        if (error.response || error.response.status === 400) {
          setError("Un compte avec cette adresse mail existe déjà");
        } else {
          setError("Erreur lors de l'inscription");
        }
      }
    }

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
        <Navbar quantite ={quantitePanier} />
        <Container>
          <Wrapper>
            <Title>Crée un compte</Title>
            <Form onSubmit={handleSubmit}>
              <Input
                  id="Nom"
                  placeholder="nom"
                  value={formState.Nom}
                  onChange={handleFieldChange}
                  required
              />
              <Input
                  id="Prenom"
                  placeholder="prénom"
                  value={formState.Prenom}
                  onChange={handleFieldChange}
                  required
              />
              <Input
                  type="tel"
                  id="Tel"
                  placeholder="numéro de téléphone"
                  pattern="^[0-9]*$"
                  value={formState.Tel}
                  onChange={handleFieldChange}
                  required
              />
              <Input
                  id="Email"
                  type="email"
                  placeholder="email"
                  value={formState.Email}
                  onChange={handleFieldChange}
                  required
              />
              <Input
                  id="Adresse"
                  placeholder="adresse"
                  value={formState.Adresse}
                  onChange={handleFieldChange}
                  required
              />
              <Input
                  id="Ville"
                  placeholder="ville"
                  value={formState.Ville}
                  onChange={handleFieldChange}
                  required
              />
              <Input
                  id="Password"
                  type="password"
                  placeholder="mot de passe"
                  value={formState.Password}
                  onChange={handleFieldChange}
                  required
              />
              <Input
                  id="PasswordC"
                  type="password"
                  placeholder="confirmation de mot de passe"
                  value={formState.PasswordC}
                  onChange={handleFieldChange}
                  required
              />
              {error && <p style={{ color: "red" }}>{error}</p>}
              <Agreement>
                En créant un compte, j'accepte le traitement de mes données personnelles conformément à la <b>POLITIQUE DE CONFIDENTIALITÉ</b>
              </Agreement>
              <Button type="submit">Enregistrer</Button>
            </Form>
          </Wrapper>
        </Container>
        <Newsletter />
        <Footer />
      </>
  );
};

export default Inscription;
