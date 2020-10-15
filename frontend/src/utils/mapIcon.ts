import leaflet from "leaflet";

import mapMarkerImg from "../assets/map-maker.svg";

const mapIcon = leaflet.icon({
	iconUrl: mapMarkerImg,
	iconSize: [58, 68],
	iconAnchor: [29, 68],
	popupAnchor: [0, -60],
});

export default mapIcon;
