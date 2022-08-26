import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';


function App () {
    return(
        <main>
            <Routes>
                <Route path='/' element={Home} exact />
                
                <Route component={Error} />
            </Routes>
        </main>
    )
}

export default App; 