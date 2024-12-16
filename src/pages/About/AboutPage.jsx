import React from 'react';
import TopNav from '../../components/Topnav/TopNavigation';
import FooterComponent from '../../components/Footer/FooterComponent';
import BannerComponent from '../../components/Banner/BannerComponent';
import Dropdown from '../../components/Dropdown/Dropdown';
import './AboutPage.css';

function AboutPage() {
  return (
    <>
      <TopNav />
      <BannerComponent text='' imageSrc="/src/assets/image-section2.png" />
      <div className="aboutContainer">
        <Dropdown title="Flexibilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
 régulièrement vérifiées par nos équipes." />
        <Dropdown title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
perturbation du voisinage entraînera une exclusion de notre plateforme." />
        <Dropdown title="Service" content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." />
        <Dropdown title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
également des ateliers sur la sécurité domestique pour nos hôtes." />
      </div>
      <FooterComponent />
    </>
  );
}

export default AboutPage;
