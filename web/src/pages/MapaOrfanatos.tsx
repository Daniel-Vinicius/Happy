import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { Map, TileLayer } from "react-leaflet";

import "../styles/pages/mapa-orfanatos.css";
import "leaflet/dist/leaflet.css";

import mapMarkerImg from "../images/map-marker.svg";

function Orfanatos() {
  return (
    <div id='page-map'>
      <aside>
        <header>
          <img src={mapMarkerImg} alt='Happy' />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Taubaté</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <Map
        center={[-23.0061559, -45.6107793]}
        zoom={12}
        style={{ width: "100%", height: '100%' }}
      >
        {/* <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' /> */}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
      </Map>
      <Link to='' className='create-orphanage'>
        <FiPlus size={32} color='var(--cor-branco)' />
      </Link>
    </div>
  );
}

export default Orfanatos;

// Estilos disponíveis para mapbox
// mapbox://styles/mapbox/streets-v11
// mapbox://styles/mapbox/outdoors-v11
// mapbox://styles/mapbox/light-v10
// mapbox://styles/mapbox/dark-v10
// mapbox://styles/mapbox/satellite-v9
// mapbox://styles/mapbox/satellite-streets-v11
// mapbox://styles/mapbox/navigation-preview-day-v4
// mapbox://styles/mapbox/navigation-preview-night-v4
// mapbox://styles/mapbox/navigation-guidance-day-v4
// mapbox://styles/mapbox/navigation-guidance-night-v4