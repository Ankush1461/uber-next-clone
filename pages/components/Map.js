import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import tw from "tailwind-styled-components";


mapboxgl.accessToken =
  "pk.eyJ1IjoiYW5rdXNoLWthcm1ha2FyIiwiYSI6ImNrdm1oOGZqOTdiaXQzMXF3ZGpjMmZrZm0ifQ.mGhAEUDwOgKnpf7rBZXX8Q";


const Map = (props) => {
  
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [88.377334, 22.463485],
      zoom: 12,
    });
    if (props.pickupCoordinates) {
      
      addToMap(map, props.pickupCoordinates);
    }
    if (props.dropoffCoordinates) {
      
      addToMap(map, props.dropoffCoordinates);
    }
    if (props.pickupCoordinates && props.dropoffCoordinates) {
      map.fitBounds([
        props.pickupCoordinates,props.dropoffCoordinates
      ],{
        padding:60
      })
    }
  },[props.pickupCoordinates, props.dropoffCoordinates]);
    const addToMap=(map,coordinates)=>{
      const marker1 = new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(map);
  }
  
    
 
  return <Wrapper id="map"></Wrapper>;
};

export default Map;
const Wrapper = tw.div`
flex-1 h-1/2
`
