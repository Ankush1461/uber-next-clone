import tw from "tailwind-styled-components";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Map from "./components/Map";
import RideSelector from "./components/RideSelector";
import Link from "next/link";

const Confirm = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query;
  const [pickupCoordinates, setPickupCoordinates] = useState([0, 0]);
  const [dropoffCoordinates, setDropoffCoordinates] = useState([0, 0]);

  const getPickupCoordinates = (pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiYW5rdXNoLWthcm1ha2FyIiwiYSI6ImNrdm1oOGZqOTdiaXQzMXF3ZGpjMmZrZm0ifQ.mGhAEUDwOgKnpf7rBZXX8Q",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickupCoordinates(data.features[0].center);
      });
  };
  const getDropoffCoordinates = (dropoff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiYW5rdXNoLWthcm1ha2FyIiwiYSI6ImNrdm1oOGZqOTdiaXQzMXF3ZGpjMmZrZm0ifQ.mGhAEUDwOgKnpf7rBZXX8Q",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setDropoffCoordinates(data.features[0].center);
      });
  };
  useEffect(() => {
    getPickupCoordinates(pickup);
    getDropoffCoordinates(dropoff);
  }, [pickup, dropoff]);

  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/search" passHref>
          <BackButton src="https://img.icons8.com/plumpy/24/000000/back--v1.png" />
        </Link>
      </ButtonContainer>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>
        <RideSelector pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}/>
        <ConfirmButtonContainer>
          <ConfirmButton>Confirm UberX</ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const ButtonContainer = tw.div`
bg-white rounded-full absolute z-10 top-4 left-4 shadow-md
`;

const BackButton = tw.img`
h-9 object-contain cursor-pointer  
`;
const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`;
const Wrapper = tw.div`
flex h-screen flex-col
`;
const ConfirmButtonContainer = tw.div`
border-t-2
`;
const ConfirmButton = tw.div`
bg-black text-white text-center my-4 mx-4  py-4 text-xl cursor-pointer

`;
