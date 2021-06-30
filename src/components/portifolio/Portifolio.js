import React, { Component } from 'react';
import PortifolioIntro from './PortifolioIntro';
import PortifolioProducts from './PortifolioProducts';

class Portifolio extends Component {
    render() {
        return (
            <main>
                <PortifolioIntro />
                <PortifolioProducts />
            </main>
        );
    }
}

export default Portifolio;