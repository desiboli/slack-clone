import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { auth, provider, signInWithPopup } from "../firebase";

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider).catch((error) => alert(error.message));
  };

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="https://images.ctfassets.net/b7g9mrbfayuu/2X9HSx11okCecIGeEuEw4C/31a4112ed93e95eaf39e8cdef15ce5e4/Slack_Mark_Web.png?q=80&fm=png&w=500"
          alt=""
        />

        <h1>Sign in to Taffo's Slack</h1>
        <p>taffo.slack.com</p>

        <Button onClick={signIn}>Sign in with Google</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  > img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }

  > button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
  }
`;
