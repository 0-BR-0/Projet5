import { useParams } from 'react-router-dom';
import React from 'react';
import Logements from "../data/logements.json"
import "../styles/detailscard.scss"
import ErrorPage from './ErrorPage';
import SlideShow from '../components/SlideShow';
import Host from '../components/Host';
import TitleLogement from '../components/TitleLogement';
import Collapse from "../components/Collapse";
import Stars from "../components/Stars";
import Layout from '../components/Layout';


function DetailsCard() {

    const { id } = useParams()
    const logement = Logements.find((lignedutableau) => lignedutableau.id === id)
    if (logement === undefined) {
        return <ErrorPage />
    }

    return (
        <Layout>
            <SlideShow pictures={logement.pictures} />
            <div className='logement-div'>
                <TitleLogement logement={logement} titles={logement.title} locations={logement.location} />
                <div className='host-stars-div'>
                    <Host host={logement.host} />
                    <Stars star={logement.rating} />
                </div>
            </div>
            <div className='collapse-logement-div'>
                <Collapse title="Description" description={logement.description} />
                <Collapse title="Équipements" description={logement.equipments.map((item, index) => (<li key={index}>{item}</li>))} />
            </div>
        </Layout>
    );
};

export default DetailsCard;