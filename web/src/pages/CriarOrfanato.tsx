import React, { useState, FormEvent, ChangeEvent } from "react";
import { Map, Marker, TileLayer } from "react-leaflet";
import { LeafletMouseEvent } from "leaflet";

import { FiPlus } from "react-icons/fi";

import Sidebar from "../components/SideBar";
import mapIcon from "../utils/mapIcon";

import Api from "../services/api";

import "../styles/pages/criar-orfanato.css";
import { useHistory } from "react-router-dom";

export default function CreateOrphanage() {
  const history = useHistory();

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [nome, setNome] = useState("");
  const [sobre, setSobre] = useState("");
  const [instruções, setInstruções] = useState("");
  const [aberto_entre, setAberto_entre] = useState("");
  const [
    aberto_nos_finais_de_semana,
    setAberto_nos_finais_de_semana,
  ] = useState(true);
  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  function handleMapClick(event: LeafletMouseEvent) {
    const { lat, lng } = event.latlng;

    setPosition({
      latitude: lat,
      longitude: lng,
    });
  }

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }

    const SelectedImages = Array.from(event.target.files);

    setImages(SelectedImages);

    const selectedImagesPreview = SelectedImages.map((image) => {
      return URL.createObjectURL(image);
    });

    setPreviewImages(selectedImagesPreview);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { latitude, longitude } = position;

    const data = new FormData();

    data.append("nome", nome);
    data.append("sobre", sobre);
    data.append("latitude", String(latitude));
    data.append("longitude", String(longitude));
    data.append("aberto_entre", aberto_entre);
    data.append(
      "aberto_nos_finais_de_semana",
      String(aberto_nos_finais_de_semana)
    );
    data.append("instruções", instruções);
    images.forEach((image) => {
      data.append("Imagens", image);
    });

    console.log(data);
    await Api.post("orfanatos", data);

    alert("Cadastro realizado com sucesso!");

    history.push("/app");
    }

  return (
    <div id='page-create-orphanage'>
      <Sidebar />

      <main>
        <form className='create-orphanage-form' onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados</legend>

            <Map
              center={[-23.0061429, -45.6107793]}
              style={{ width: "100%", height: 280 }}
              zoom={5}
              onClick={handleMapClick}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              {position.latitude !== 0 && (
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[position.latitude, position.longitude]}
                />
              )}
            </Map>

            <div className='input-block'>
              <label htmlFor='name'>Nome</label>
              <input
                id='name'
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>

            <div className='input-block'>
              <label htmlFor='about'>
                Sobre <span>Máximo de 300 caracteres</span>
              </label>
              <textarea
                id='name'
                maxLength={300}
                value={sobre}
                onChange={(e) => setSobre(e.target.value)}
              />
            </div>

            <div className='input-block'>
              <label htmlFor='images'>Fotos</label>

              <div className='images-container'>
                {previewImages.map((image) => {
                  return <img key={image} src={image} alt={nome} />;
                })}
                <label htmlFor='image[]' className='new-image'>
                  <FiPlus size={24} color='var(--cor-botao-azul)' />
                </label>
              </div>
              <input
                multiple
                onChange={handleSelectImages}
                type='file'
                id='image[]'
              />
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className='input-block'>
              <label htmlFor='instructions'>Instruções</label>
              <textarea
                id='instructions'
                value={instruções}
                onChange={(e) => setInstruções(e.target.value)}
              />
            </div>

            <div className='input-block'>
              <label htmlFor='opening_hours'>Horário de Funcionamento</label>
              <input
                id='opening_hours'
                value={aberto_entre}
                onChange={(e) => setAberto_entre(e.target.value)}
                placeholder='Das 8h as 18h'
              />
            </div>

            <div className='input-block'>
              <label htmlFor='open_on_weekends'>Atende fim de semana</label>

              <div className='button-select'>
                <button
                  type='button'
                  className={aberto_nos_finais_de_semana ? "active" : ""}
                  onClick={() => setAberto_nos_finais_de_semana(true)}
                >
                  Sim
                </button>
                <button
                  type='button'
                  className={!aberto_nos_finais_de_semana ? "active-nao" : ""}
                  onClick={() => setAberto_nos_finais_de_semana(false)}
                >
                  Não
                </button>
              </div>
            </div>
          </fieldset>

          <button className='confirm-button' type='submit'>
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
