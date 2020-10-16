import Leaflet from "leaflet";

import mapMarkerImg from "../images/map-marker.svg";

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60], // em cima
  // popupAnchor: [170, 2], // ao lado
});

export default mapIcon;
