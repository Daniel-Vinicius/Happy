import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";
import { useParams } from "react-router-dom";

import Sidebar from "../components/SideBar";
import mapIcon from "../utils/mapIcon";

import api from "../services/api";

import "../styles/pages/orfanato.css";

interface Orfanato {
  latitude: number;
  longitude: number;
  nome: string;
  sobre: string;
  instruções: string;
  aberto_entre: string;
  aberto_nos_finais_de_semana: boolean;
  images: Array<{
    id: number;
    url: string;
  }>;
}

interface OrfanatoParams {
  id: string;
}

export default function Orfanato() {
  const params = useParams<OrfanatoParams>();
  const [orfanato, setOrfanato] = useState<Orfanato>();
  const [ativa, setAtiva] = useState(0);

  useEffect(() => {
    api.get(`orfanatos/${params.id}`).then((response) => {
      setOrfanato(response.data);
    }); //.catch((Error) => {
    //   return (
    //     <div>
    //       <div><h1>Ocorreu um erro na conexão com o servidor</h1></div>
    //     </div>
    //   )
    // });
  }, [params.id]);

  if (!orfanato) {
    return <p className='carregando'>Carregando...</p>;
  }

  return (
    <div id='page-orphanage'>
      <Sidebar />

      <main>
        <div className='orphanage-details'>
          <img src={orfanato.images[ativa].url} alt={orfanato.nome} />
          console.log(orfanato.images)
          <div className='images'>
            {orfanato.images.map((image, index) => {
              return (
                <button
                  key={image.id}
                  className={ativa === index ? "active" : ""}
                  type='button'
                  onClick={() => {
                    setAtiva(index);
                  }}
                >
                  <img src={image.url} alt={orfanato.nome} />
                </button>
              );
            })}
          </div>
          <div className='orphanage-details-content'>
            <h1>{orfanato.nome}</h1>
            <p>{orfanato.sobre}</p>

            <div className='map-container'>
              <Map
                center={[orfanato.latitude, orfanato.longitude]}
                zoom={17}
                style={{ width: "100%", height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[orfanato.latitude, orfanato.longitude]}
                />
              </Map>

              <footer>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href={`https://google.com/maps/dir/?api=1&destination=${orfanato.latitude},${orfanato.longitude}`}
                >
                  Ver rotas no Google Maps
                </a>
              </footer>
            </div>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orfanato.instruções}</p>

            <div className='open-details'>
              <div className='hour'>
                <FiClock size={32} color='var(--cor-azul-clarinho)' />
                Segunda à Sexta <br />
                {orfanato.aberto_entre}
              </div>
              {orfanato.aberto_nos_finais_de_semana ? (
                <div className='open-on-weekends'>
                  {" "}
                  <FiInfo size={32} color='var(--cor-verde)' /> Atendemos <br />{" "}
                  fim de semana
                </div>
              ) : (
                <div className='open-on-weekends dont-open'>
                  <FiInfo size={32} color='var(--cor-vermelho)' />
                  Não atendemos <br />
                  fim de semana
                </div>
              )}
            </div>

            <button type='button' className='contact-button'>
              <FaWhatsapp size={20} color='#FFF' />
              Entrar em contato
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
