import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <main>
                <section className="container column">
                    <div className="left">
                        <h1>Seja bem-vindo</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus illum dolores modi vel perferendis, laboriosam architecto omnis aut maxime soluta, ex a perspiciatis necessitatibus dicta deleniti voluptatem corporis repellendus autem.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ex aspernatur mollitia illum blanditiis. Voluptates fuga saepe, consequatur ab nemo, cumque perferendis inventore illum explicabo culpa, maxime unde dolorem iusto.</p>
                        <h2>Portifólio</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus illum dolores modi vel perferendis, laboriosam architecto omnis aut maxime soluta, ex a perspiciatis necessitatibus dicta deleniti voluptatem corporis repellendus autem.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ex aspernatur mollitia illum blanditiis. Voluptates fuga saepe, consequatur ab nemo, cumque perferendis inventore illum explicabo culpa, maxime unde dolorem iusto.[<Link to="/portifolio">Leia mais</Link>]</p>


                        <h2>Sobre</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus illum dolores modi vel perferendis, laboriosam architecto omnis aut maxime soluta, ex a perspiciatis necessitatibus dicta deleniti voluptatem corporis repellendus autem.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ex aspernatur mollitia illum blanditiis. Voluptates fuga saepe, consequatur ab nemo, cumque perferendis inventore illum explicabo culpa, maxime unde dolorem iusto.[<Link to="/sobre">Leia mais</Link>]</p>


                        <h2>Fale Conosco</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus illum dolores modi vel perferendis, laboriosam architecto omnis aut maxime soluta, ex a perspiciatis necessitatibus dicta deleniti voluptatem corporis repellendus autem.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ex aspernatur mollitia illum blanditiis. Voluptates fuga saepe, consequatur ab nemo, cumque perferendis inventore illum explicabo culpa, maxime unde dolorem iusto.[<Link to="/faleconosco">Leia mais</Link>]</p>


                    </div>
                </section>
            </main>
        );
    }
}

export default Home;