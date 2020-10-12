import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import '../styles/pages/orphanages-map.css'
import mapMarkerImg from '../assets/map_maker.svg';

function OrphanagesMap() {
    return (
        <div id = "page-map"> 
            <aside>
                <header> 
                    <img src = {mapMarkerImg} alt = "happy"/>
                    <h2> Escolha um orfanato no mapa</h2>
                    <p> Muitas crianças estão esperando a sua visita :) </p> 
                </header>

                <footer> 
                    <strong> Lorena/SP</strong>
                    <span> São Paulo</span>
                </footer>
            </aside>

            <Map 
                center = {[-22.8880842, -47.2456183]}
                zoom = {15}
                style = {{ width: '100%', height: '100%' }}
            >

                <TileLayer url = "http://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </Map>

            <Link to = "" className = "create-orphanage">
                <FiPlus size ={32} color = "#fff" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;
