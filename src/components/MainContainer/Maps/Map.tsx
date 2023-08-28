import {
  GoogleMap,
  Marker,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";
import Image from "next/image";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.API_Key,
  });
  const markers = [
    { lat: 18.5204, lng: 73.8567 },
    { lat: 10.5314, lng: 77.8446 },
    { lat: 21.5642, lng: 76.7769 },
  ];

  const onLoad = (map) => {
    const bounds = new google.maps.LatLngBounds();
    markers.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
    map.fitBounds(bounds);
  };
  const containerStyle = {
    width: "400px",
    height: "400px",
  };
  return (
    <div className="bg-red-900 w-500 h-470">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap mapContainerStyle={containerStyle} onLoad={onLoad}>
          {markers.map(({ lat, lng }) => (
            <MarkerF position={{ lat, lng }} icon={"/Vector.svg"} />
          ))}
        </GoogleMap>
      )}
    </div>
  );
};

export default Map;
