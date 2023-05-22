import styled from 'styled-components'
import {Badge, Drawer, List, ListItem, ListItemText} from "@material-ui/core";
import {Search, ShoppingCartOutlined} from "@material-ui/icons";
import {mobile} from "../responsive";
import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";


const Container = styled.div`
height: fit-content;
  ${mobile({height: "50px"})}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({padding: "10px 0px"})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display: "none"})}
  margin-left: 20px;

`;


const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({width: "50px"})}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({fontSize: "24px"})}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex: 2, justifyContent: "center"})}
`;

const MenuItem = styled.div`
  font-size: 13px;
  cursor: pointer;
  margin-left: 25px;
  padding: 5px; /* ajouter de l'espace autour de l'élément */

  ${mobile({fontSize: "12px", marginLeft: "10px"})}
  &:hover {
    background-color: #f7f7f7;

  }
`;


const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 25px;
  height: 20px;
  cursor: pointer;
  ${mobile({display: "flex"})}
`;

const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: black;
`;


const DrawerContainer = styled.div`
  width: 250px;
`;

const SubMenuItem = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  font-size: 13px;

  &:hover {
    background-color: #f7f7f7;
  }
`;


const SubMenu = styled.div`
  position: absolute;
  top: 40px;
  background-color: white;
  border: 1px solid lightgray;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  display: none;

  ${MenuItem}:hover & {
    display: block;
  }
`;


const Navbar = ( props) => {

    const isLoggedIn = localStorage.getItem('user')!== null;
    const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();
    const logoutUser = async () => {
      if(localStorage.getItem('user')!= null)
          localStorage.removeItem('user');
          navigate('/');
          window.location.reload();
    }
    const [openDrawer, setOpenDrawer] = useState(false);
    const [listCategories, setlistCategories] = useState([]);

    const handleDrawerOpen = () => {
        setOpenDrawer(true);
    };

    const handleDrawerClose = () => {
        setOpenDrawer(false);
    };


    useEffect(() => {
        console.info("hello");
        // GET request using fetch inside useEffect React hook
        fetch('http://localhost:8080/api/categories')
            .then(response => response.json())
            .then(data => setlistCategories(data));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);


    return (
      <Container>
      <Wrapper>
      <Left>
      <Hamburger onClick={handleDrawerOpen}>
      <Line />
      <Line />
      <Line />
      </Hamburger>
      <Language>FR</Language>
      </Left>
      <Center>
      <Logo>
      <Link to={'/'} style={{ textDecoration: "none", color: "black" }} >E-AGORA</Link>
      </Logo>
      </Center>
      <Right>
      {isLoggedIn  &&
      <MenuItem key="parametres">
      PARAMETRES
      <SubMenu>
      <SubMenuItem key="moncompte">
      <Link to={'/moncompte'} style={{ textDecoration: "none", color: "black" }}>Mon compte</Link>
      </SubMenuItem>
      <Link to={'/mesCommande'} style={{ textDecoration: "none", color: "black" }} >
      <SubMenuItem key="commandes">Commandes en attentes</SubMenuItem>
      </Link>
      <SubMenuItem key="politiques">
      <Link to={'/politiques'} style={{ textDecoration: "none", color: "black" }}>Politique de retour et remboursement</Link>
      </SubMenuItem>
      </SubMenu>
      </MenuItem>
      }
                  {isLoggedIn  &&
                      <>
                          <MenuItem key="mettreEnVente">
                              <Link to={'/ventes'} style={{ textDecoration: "none", color: "black" }}>METTRE EN VENTE</Link>
                          </MenuItem>
                      </>
                  }
      
                  {isLoggedIn &&
                      <MenuItem key="deconnexion" onClick={logoutUser}>Deconnexion</MenuItem>
                  }
      
                  {
                      !isLoggedIn &&
                      <>
                          <MenuItem key="inscription">
                              <Link to={'/inscription'} style={{ textDecoration: "none", color: "black" }}>INSCRIPTION</Link>
                          </MenuItem>
                          <MenuItem key="connexion">
                              <Link to={'/connexion'} style={{ textDecoration: "none", color: "black" }}>CONNEXION</Link>
                          </MenuItem>
                      </>
                  }
      
      
      
                  <MenuItem key="panier">
                      <Link to={'/panier'} style={{ textDecoration: "none", color: "black" }}>
                          <Badge badgeContent={props.quantite} color="primary">
                              <ShoppingCartOutlined />
                          </Badge>
                      </Link>
                  </MenuItem>
              </Right>
          </Wrapper>
          <Drawer anchor="left" open={openDrawer} onClose={handleDrawerClose}>
              <DrawerContainer>
                  <List>
                      {listCategories.map(value => (
                          <Link key={value.id} to={'/list?id=' + value.id} style={{ textDecoration: "none", color: "black" }}>
                              <ListItem button>
                                  <ListItemText primary={value.nom} />
                              </ListItem>
                          </Link>
                      ))}
                  </List>
              </DrawerContainer>
          </Drawer>
      </Container>
      );
};

export default Navbar;
