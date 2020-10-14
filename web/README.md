# Web
Comandos utilizados para criar o projeto em typescript:

Criar projeto: yarn create  react-app web  --template typescript 


CSS diferente: 

forçar largura e altura em todos os tamanhos: 
    width: 100vw;
    height: 100vh;

Coisas instaladas: {
     yarn add react-router-dom
     yarn add react-icons
     yarn add leaflet react-leaflet

}

Como integrar com mapas: {
   1- Pegue o token no mapbox e guarde numa variavel de ambiente no arquivo.env
   2- Depois de instalado (yarn add leaflet react-leaflet) faça as importações; {
       import { Map, TileLayer } from "react-leaflet";
       import "leaflet/dist/leaflet.css";
   }
   3- Depois insira um código parecido com esse: {
            <Map
        center={[-23.0061559, -45.6107793]} // coordenadas
        zoom={12}
        style={{ width: "100%", height: '100%' }}
      >
        {/* <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' /> */} // street map

        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} /> // mapbox
      </Map>
   }
}