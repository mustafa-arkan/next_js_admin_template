"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import styles from "./internationalSales.module.css";
import "leaflet/dist/leaflet.css";

// Dynamically import the MapContainer and other leaflet components with no SSR
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

const markers = [
  { name: "Australia", position: [-25.2744, 133.7751] },
  { name: "India", position: [20.5937, 78.9629] },
  { name: "Nepal", position: [28.3949, 84.124] },
  { name: "Russia", position: [61.524, 105.3188] },
  { name: "China", position: [35.8617, 104.1954] },
];

const InternationalSalesMap = () => {
  useEffect(() => {
    // Ensure this code only runs on the client-side
    if (typeof window !== "undefined") {
      const L = require("leaflet");

      // Set the default icon for Leaflet markers
      const DefaultIcon = L.icon({
        iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
        iconAnchor: [12, 41], // Correct position of the icon (center-bottom)
      });

      L.Marker.prototype.options.icon = DefaultIcon;
    }
  }, []);

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={[20, 0]}
        zoom={1}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {markers.map((marker) => (
          <Marker key={marker.name} position={marker.position}>
            <Popup>{marker.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default InternationalSalesMap;
