import {
  GoogleMap,
  Marker,
  MarkerF,
  useLoadScript,
} from "@react-google-maps/api";
import { useMemo } from "react";
import Vector from "../../../../assests/Vector.svg";
import Image from "next/image";

const MapApp = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.Google_API,
  });

  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

  const containerStyle = {
    width: "400px",
    height: "400px",
  };
  let title = "Marker1";
  return (
    <div className="bg-red-900 w-500 h-470">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          <MarkerF
            position={{ lat: 18.52043, lng: 73.856743 }}
            icon={"/Vector.svg"}
          />
        </GoogleMap>
      )}
    </div>
  );
};

export default MapApp;
