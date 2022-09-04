
import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main"

function App() {
    // 2. Wrap ChakraProvider at the root of your app
    return (
        <div className="App">
            <Header/>
            <Main />
            <Footer/>
        </div>

    );

    
}



export default App;
