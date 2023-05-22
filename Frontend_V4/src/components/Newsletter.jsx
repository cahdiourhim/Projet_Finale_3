import { Send } from "@material-ui/icons";
import styled from "styled-components";
import React, { useState } from 'react';


const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;

`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;



const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.includes("@")) {
      setErrorMsg("Veuillez saisir l'adresse mail");
      return;
    }
    // logic to submit the form with the email value
    console.log(`Submitting form with email: ${email}`);
  };

  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Abonnez-vous pour ne rien rater.</Desc>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <Input type="email" placeholder="Votre Email" value={email} onChange={handleInputChange}style={{ minWidth: "350px" }} />
          <Button type="submit">
            <Send />
          </Button>
        </InputContainer>
        {errorMsg && <p>{errorMsg}</p>}
      </form>
    </Container>
  );
};


export default Newsletter;