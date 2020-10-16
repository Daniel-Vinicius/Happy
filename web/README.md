# Web

Comandos utilizados para criar o projeto em typescript:

Criar projeto: yarn create react-app web --template typescript

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
style={{ width: "100%", height: '100%' }} >
{/_ <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' /> _/} // street map

        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} /> // mapbox
      </Map>

}
}

O que eu aprendi em relação a estado e useEffect:

exemplo

interface Orfanato {
id: number;
latitude: number;
longitude: number;
nome: string;
}

function OrfanatosMapa() {
const [orfanatos, setOrfanatos] = useState<Orfanato[]>([]);
// estado que segue o formato da interface Orfanato que é um Array, e o estado inicial é um array vazio

O useEffect funciona assim ele executa uma vez, e executa toda vez que alguma informação da variável for alterada como no exemplo abaixo

useEffect(() => {  
 api.get("orfanatos").then((response) => {
setOrfanatos(response.data); setando o estado com o valor retornado pela chamada a api
});
}, []); // fechando o useEffect e dizendo que ele retorna um array, assim ele consegue retornar mais de um dado.

abaixo vemos a melhor forma de preencher um componente com valores do estado

          { // dizendo que abaixo vem um código JS

            // fazendo um map passando o orfanato que está no estado, note que no estado ele se chama orfanatos
            // e aqui orfanato, isso porque eu quero que para cada orfanato ele retorna um ícone

            orfanatos.map((orfanato) => {
          return (
            <Marker
              icon={mapIcon}
              position={[orfanato.latitude, orfanato.longitude]}
              key={orfanato.id}  // passando o atributo que não se repete
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
        })
        }
