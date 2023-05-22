import styled from "styled-components";
import { mobile } from "../responsive";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";




const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(https://images.pexels.com/photos/6633633/pexels-photo-6633633.jpeg)
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
  /* Ajout d'une marge supérieure pour déplacer le formulaire plus haut sur la page */
  margin-top: -350px;

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
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
  margin-top: 20px; /* Ajouter une marge supérieure de 20 pixels */
  
  label {
    margin-top: 10px; /* ajouter une marge en bas pour espacer le label et son champ */
  }
`;

const Paiement = () => {

    return (
        <>
        <Navbar />
        <Container>
          <Wrapper>
            <Title>Paiement en ligne</Title>
            <Form>
            <FormGroup>
              <div>
                <Label htmlFor="pickupOption">Paiement par Paypal : </Label>
                <Input type="checkbox" id="pickupOption" />
              </div>
            </FormGroup>
            </Form>
          </Wrapper>
        </Container>
        <Newsletter />
        <Footer />
    
        </>
      );
   

};


export default Paiement;