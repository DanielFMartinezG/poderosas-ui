import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from '../pages/Home';
import About_us from '../pages/About-us';
import Questions from '../pages/Questions';
import Layout from './Header-Footer/Layout';
import Login from '../pages/Admin-login';
import HomeAdmin from '../pages/Admin-home';

let App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path='/poderosas/home'>
                        <Home />
                    </Route>
                    <Route exact path='/poderosas/about-us'>
                        <About_us />
                    </Route>
                    <Route exact path='/poderosas/questions'>
                        <Questions />
                    </Route>
                    <Route exact path='/poderosas/admin/login'>
                        <Login />
                    </Route>
                    <Route exact path='/poderosas/admin/home'>
                        <HomeAdmin />
                    </Route>
                    <Redirect from='*' to='/poderosas/home' />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}
export default App;

