import React from 'react';
import TopNav from '../../components/Topnav/TopNavigation';
import Card from '../../components/Card/CardComponent';
import Footer from '../../components/Footer/FooterComponent';
import Banner from '../../components/Banner/BannerComponent';

import './HomePage.css';

class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [], // Initialiser le tableau de données
            loading: true,
        };
    }

    componentDidMount() {
        // Effectuer la requête fetch dans componentDidMount
        fetch('/src/data/data.json')
            .then((response) => response.json())
            .then((data) => {
                this.setState({ data, loading: false }); // Mettre à jour le state avec les données récupérées
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des données :', error);
                this.setState({ loading: false }); // Mettre à jour l'état de chargement en cas d'erreur
            });
    }

    render() {
        const { data, loading } = this.state;
        if (loading) {
            return <div>Chargement en cours...</div>;
        }
        return (
            <>
                <TopNav />
                <Banner text="Chez vous, partout et ailleurs" imageSrc="/src/assets/image-section.png" />
                <div className="cardContainer">
                    {data.map((element) => (
                        <Card key={element.id} id={element.id} pictures={element.pictures} title={element.title} />
                    ))}
                </div>
                <Footer />
            </>
        );
    }
}

export default HomePage;
