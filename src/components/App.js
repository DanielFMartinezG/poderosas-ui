import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import Home from '../pages/Home';
import About_us from '../pages/About-us';
import Layout from './Header-Footer/Layout';
let App = ()=>{
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/poderosas/home'>
                        <Home />
                    </Route>
                    <Route exact path='/poderosas/about-us'>
                        <About_us />
                    </Route>
                    <Redirect from='*' to='/poderosas/home' />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}
export default App;