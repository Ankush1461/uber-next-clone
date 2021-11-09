import { useState } from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import Link from "next/link";

const Search = () => {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  console.log(pickup);
  console.log(dropoff);

  return (
    <Wrapper>
      {/* ButtonContainer */}
      <ButtonContainer>
        <Link href="/" passHref>
          <BackButton src="https://img.icons8.com/plumpy/24/000000/back--v1.png" />
        </Link>
      </ButtonContainer>

      {/* InputContainer */}
      <InputContainer>
        <FromToIcons>
          <Circle src="https://img.icons8.com/material-two-tone/24/000000/filled-circle.png" />
          <Line src="https://img.icons8.com/ios/50/000000/vertical-line.png" />
          <Square src="https://img.icons8.com/ios-filled/50/000000/rounded-square.png" />
        </FromToIcons>
        <InputBoxes>
          <Input
            placeholder="Enter pickup location"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
          />
          <Input
            placeholder="Where to?"
            value={dropoff}
            onChange={(e) => setDropoff(e.target.value)}
          />
        </InputBoxes>
        <PlusIcon src="https://img.icons8.com/pastel-glyph/50/000000/plus--v2.png" />
      </InputContainer>

      {/* SavedPlaces */}
      <SavedPlaces>
        <StarIcon src="https://img.icons8.com/ios-glyphs/30/000000/star--v2.png" />
        Saved Places
      </SavedPlaces>
      {/* ConfirmLocation */}
      <Link
        href={{
          pathname: "/confirm",
          query: { pickup: pickup, dropoff: dropoff },
        }}
        passHref
      >
        <ConfirmButtonContainer>
          <ConfirmButton>Confirm Location</ConfirmButton>
        </ConfirmButtonContainer>
      </Link>
    </Wrapper>
  );
};

export default Search;

const Wrapper = tw.div`
bg-gray-200 h-screen
`;

const ButtonContainer = tw.div`
bg-white  px-4
`;

const BackButton = tw.img`
h-9 cursor-pointer
`;

const InputContainer = tw.div`
bg-white flex items-center px-4 mb-2
`;

const FromToIcons = tw.div`
m-10 flex flex-col mr-2 items-center
`;
const Circle = tw.img`
h-2.5
`;
const Line = tw.img`
h-10
`;
const Square = tw.img`
h-3
`;
const InputBoxes = tw.div`
flex flex-col flex-1 
`;
const Input = tw.input`
h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none
`;
const PlusIcon = tw.img`
m-10 h-10 bg-gray-200 rounded-full ml-3 cursor-pointer
`;
const SavedPlaces = tw.div`
flex items-center bg-white px-4 py-2 cursor-pointer
`;

const StarIcon = tw.img`
bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`;
const ConfirmButtonContainer = tw.div`
border-t-2
`;
const ConfirmButton = tw.div`
bg-black text-white text-center mt-2 mx-4 px-4 py-3 text-xl cursor-pointer
`;
