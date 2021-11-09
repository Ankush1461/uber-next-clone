import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import { useRouter } from "next/router";
import { signInWithPopup, onAuthStateChanged } from "@firebase/auth";
import { auth, provider } from "../firebase";
const Login = () => {
  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
      }
    });
  }, []);
  return (
    <Wrapper>
      <UberLogo src="https://www.logo.wine/a/logo/Uber/Uber-Logo.wine.svg" />
      <Title>Log In to access your account</Title>
      <UberImage src="https://i.ibb.co/CsV9RYZ/login-image.png" />
      <SignInButton onClick={() => signInWithPopup(auth, provider)}>
        Sign In with Google
      </SignInButton>
    </Wrapper>
  );
};

export default Login;

const UberLogo = tw.img`
h-24 object-contain self-start
`;
const UberImage = tw.img`
object-contain p-2
`;

const Wrapper = tw.div`
flex flex-col h-screen bg-gray-200 p-4
`;
const SignInButton = tw.button`
bg-black text-white text-center py-4 mt-8 self-center w-full 
`;
const Title = tw.div`
text-5xl text-gray-500 pt-4 pl-3
`;
