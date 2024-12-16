import React, { useState, useEffect } from 'react';
import TopNav from '../../components/Topnav/TopNavigation';
import FooterComponent from '../../components/Footer/FooterComponent';
import './LogementPage.css';
import { useParams, useNavigate } from 'react-router-dom';
import Dropdown from '../../components/Dropdown/Dropdown';
import Tag from '../../components/Tag/TagComponent';
import Carrousel from '../../components/Carrousel/CarrouselComponent';
import Rating from '../../components/Rating/RatingComponent';
import HostUI from '../../components/HostUI/HostUIComponent';


function LogementPage() {
    const { id } = useParams();
    const [logementData, setLogementData] = useState(null);
    const navigate = useNavigate();

    function convertNewlinesToHtml(text) {
        const lines = text.split('\n');
        return lines.map((line, index) => (
            <span key={index}>
                {line}
                {index < lines.length - 1 && <br />}
            </span>
        ));
    }

    useEffect(() => {
        fetch('/src/data/data.json')
            .then((response) => response.json())
            .then((data) => {
                let logement = data.find((element) => element.id == id);
                logement.host.name = logement.host.name.replace(' ', '\n');
                logement.equipments = logement.equipments.join('\n');
                setLogementData(logement);
            })
            .catch((error) => {
                navigate('/404');
            });
    }, [id]);

    return (
        <>
            <TopNav />
            {logementData ? (
                <div className="logementContainer">
                    <Carrousel galery={logementData.pictures} alt={logementData.title} />
                    <div className='logementDetails'>
                        <div className='logementHeader'>
                            <div className='logementTitle'>
                                <h3>{logementData.title}</h3>
                                <p>{logementData.location}</p>
                            </div>
                            <div className='logementTag'>
                                {logementData.tags.map((tag, index) => (
                                    <Tag text={tag} key={index} />
                                ))}
                            </div>
                        </div>
                        <div className='logementRatingContainer'>
                            <HostUI name={logementData.host.name} picture={logementData.host.picture} />
                            <div className='logementRating'>
                                <Rating rating={logementData.rating} />
                            </div>
                        </div>
                    </div>
                    <div className='logementDescription'>
                        <Dropdown title="Description" content={logementData.description} />
                        <Dropdown title="Equipements" content={convertNewlinesToHtml(logementData.equipments)} />
                    </div>
                </div>

            ) : (
                <p>Chargement en cours...</p>
            )}
            <FooterComponent />
        </>
    );
}

export default LogementPage;
