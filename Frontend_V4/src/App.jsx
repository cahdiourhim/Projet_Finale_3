import Connexion from "./pages/Connexion";
import Home from "./pages/Home"
import Panier from "./pages/Panier";
import Produit from "./pages/Produit";
import MettreVente from "./pages/MettreVente";
import Inscription from "./pages/Inscription";
import PolitiqueRetour from "./pages/PolitiqueRetour";
import MesVentes from "./pages/MesVentes";
import CommandesAttentes from "./pages/CommandesAttentes";
import MonCompte from "./pages/MonCompte";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./pages/ProductList";


const App = () => {
    const isLoggedIn = localStorage.getItem('user')!== null;
    const user = JSON.parse(localStorage.getItem("user"));
    return (
        <BrowserRouter>
        <Routes >
            <Route path="/" element={ <Home/>}>
            </Route>

            {isLoggedIn && (
                <>
                    <Route path="/panier" element={ <Panier/>}></Route>
                    <Route path="/politiques" element={ <PolitiqueRetour/>}></Route>
                </>
                )}
            {isLoggedIn && (
            <>
            <Route path="/list" element={<ProductList/>}></Route>
            <Route path="/ventes" element={ <MettreVente/>}>
            </Route>
            <Route path="/mesventes" element={ <MesVentes/>}>
            </Route>
            </>
            )}
            
            {isLoggedIn && (
            <>
            
                    <Route path="/moncompte" element={ <MonCompte/>}></Route>
                    <Route path="/mesCommande" element={ <CommandesAttentes/>}></Route>
                <Route path="/panier" element={ <Panier/>}>
            </Route>
            </>
            )}

            {!isLoggedIn && (
            <>
            <Route path="/produit" element={ <Produit/>}></Route>
            <Route path="/connexion" element={ <Connexion/>}>
            </Route>
            <Route path="/inscription" element={ <Inscription/>}>
            </Route>
            <Route path="/panier" element={ <Panier/>}></Route>
            </>
            )}

            <Route path="/list" element={ <ProductList/>}>
            </Route>
            <Route path="/produit" element={ <Produit/>}></Route>
        </Routes >
    </BrowserRouter>
    );
};

export default App;
