import styled from "styled-components";
import {mobile} from "../responsive";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
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
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
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

function deleteUserInfoAfterTime() {
  setTimeout(() => {
    localStorage.removeItem("user");
  }, 30 * 60* 1000); //30 minutes en millisecondes
}
function storeUserInfo(user) {
  localStorage.setItem("user", JSON.stringify(user));
  deleteUserInfoAfterTime();
}


const Connexion = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const gotoInscription = ( ) => {
    console.info("hello world");
    navigate('/inscription');
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/signin",
        { mail, password }
      );
      
      

      console.log(response.data);
      storeUserInfo(response.data);
      if(localStorage.getItem('user')!== null){
        navigate('/moncompte'); 
      }
      window.location.reload()
    } catch (err) {
      if (err.response.status === 401) {
        setError("Login ou mot de passe incorrect");
      } else if (err.response && err.response.status === 404) {
        setError("Vous n'êtes pas inscrit");
      } else {
        setError("Erreur de connexion");
      }
    }
  };
  
  return (
    <div>
      <Navbar />
  <Container>
      <Wrapper>
        <Title>Connexion client</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="Login"
            onChange={(e) => setMail(e.target.value)}
          />
          <Input
            placeholder="Mot de passe"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button>Se Connecter</Button>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <Link>Mot de passe oublié?</Link>
          <Link onClick={() => gotoInscription()} > Créer un compte client </Link>
        </Form>
      </Wrapper>
    </Container>
    </div>
    
  );
};

export default Connexion;
