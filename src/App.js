import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Sobre from './components/Sobre';
import FaleConosco from './components/FaleConosco';
import Portifolio from './components/portifolio/Portifolio';
import './styles/styles.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route path="/sobre"><Sobre /></Route>
                    <Route path="/faleconosco"><FaleConosco /></Route>
                    <Route path="/portifolio"><Portifolio /></Route>
                </Switch>
                <Footer />
            </Router>
        );
    }
}

export default App;
