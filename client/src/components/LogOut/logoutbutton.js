import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const LogOutStyle = styled.article`

button {
  background-color: #82464b;
  color: #d2d6ce;
  margin-left: 20px;
  border-radius: 10px;
}

`

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <LogOutStyle>
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
    </LogOutStyle>
  );
};

export default LogoutButton;