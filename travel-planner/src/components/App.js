import React, { useState } from "react";

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

import { TOKEN_KEY } from "../constants";
import "../styles/App.css";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem(TOKEN_KEY) ? true : false
    );

    const logout = () => {
        console.log("log out");
        localStorage.removeItem(TOKEN_KEY);
        setIsLoggedIn(false);
    };

    const loggedIn = (token) => {
        if (token) {
            localStorage.setItem(TOKEN_KEY, token);
            setIsLoggedIn(true);
        }
    };
    // 2. Wrap ChakraProvider at the root of your app
    return (
        <div className="App">
            <Header isLoggedIn={isLoggedIn} handleLogout={logout} />
            <Main isLoggedIn={isLoggedIn} handleLoggedIn={loggedIn} />
            <Footer/>
        </div>

    );

    
}



export default App;
