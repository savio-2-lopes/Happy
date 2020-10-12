import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';

function Routes(){
    return (
        <BrowserRouter>   
            <switch> 

                <Route path = "/" exact component = {Landing} />
                <Route path = "/app" component = {OrphanagesMap} />
                
            </switch> 
        </BrowserRouter>
    );
}

export default Routes;