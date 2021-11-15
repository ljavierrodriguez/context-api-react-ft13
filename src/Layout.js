import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Services from './views/Services';
import NotFound from './views/NotFound';
import Navbar from './components/Navbar';
import AppContext from './store/AppContext';
import injectContext from './store/AppContext';

const Layout = () => {
    return (
        <>
            {/* <AppContext> */}
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/services" component={Services} />
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
            {/* </AppContext> */}
        </>
    )
}

export default injectContext(Layout);