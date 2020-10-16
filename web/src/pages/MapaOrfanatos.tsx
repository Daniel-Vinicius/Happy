import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiPlus, FiArrowRight } from "react-icons/fi";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import mapMarkerImg from "../images/map-marker.svg";
import mapIcon from "../utils/mapIcon";
import api from "../services/api";

import "../styles/pages/mapa-orfanatos.css";

interface Orfanato {
  id: number;
  latitude: number;
  longitude: number;
  nome: string;
}

function OrfanatosMapa() {
  const [orfanatos, setOrfanatos] = useState<Orfanato[]>([]);
  useEffect(() => {
    api.get("orfanatos").then((response) => {
      setOrfanatos(response.data);
    });
  }, [])
  console.log(orfanatos)

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
        style={{ width: "100%", height: "100%" }}
      >
        {/* <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
        {orfanatos.map(orfanato => {
          return (
            <Marker
              icon={mapIcon}
              position={[orfanato.latitude, orfanato.longitude]}
              key={orfanato.id} // passando o atributo que não se repete
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className='mapa-popup'
              >
                {orfanato.nome}
                <Link to={`orfanatos/${orfanato.id}`}>
                  <FiArrowRight size={20} color='var(--cor-branco)' />
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </Map>
      <Link to='/orfanatos/criar' className='create-orphanage'>
        <FiPlus size={32} color='var(--cor-branco)' />
      </Link>
    </div>
  );
}

export default OrfanatosMapa;

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
