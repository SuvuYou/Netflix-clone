import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Bcground = styled.div`
  background-image: url(${({ src }) => src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  border-bottom: 8px solid #222;

  @media (max-width: 1100px) {
    ${({ dontShowOnSmallScreen }) => "background-image:none"}
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 64px;
  align-items: center;
  padding: 18px 0px;
  margin: 0 64px;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const ButtonLink = styled(Link)`
  display: block;

  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;

  &:hover {
    background-color: #f40612;
  }
`;

export const Group = styled(Inner)`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.h2`
color: white;
  font-size: 50px;
  line-height: normal;
  font-weightL bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
  margin-bottom: 20px;
`;

export const TextSmall = styled.p`
  color: hsl(0, 0%, 85%);
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`;

export const TextLink = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
  margin-right: 30px;
  font-weight: ${({ active }) => (active ? "700" : "normal")};

  &:hover {
    font-weight: bold;
  }

  &:last-of-type {
    margin-right: 0px;
  }
`;

export const Picture = styled.button`
  background-image: url(${({ src }) => src});
  background-size: contain;
  border: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const Dropdown = styled.div`
  display: none;
  background-color: black;
  position: absolute;
  padding: 10px;
  width: 100px;
  top: 32px;
  right: 10px;

  ${Group}:last-of-type ${TextLink} {
    cursor: pointer;
  }

  ${Group} {
    margin-bottom: 10px;
    justify-content: flex-start;

    &:last-of-type {
      margin-bottom: 0px;
    }

    ${TextLink}, ${Picture} {
      cursor: default;
    }
  }

  button {
    margin-right: 10px;
  }

  p {
    font-size: 14px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;

  button {
    cursor: pointer;
  }

  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  width: 108px;
  heigth: 32px;
  margin-right: 40px;

  @media (min-width: 1449px) {
    width: 167px;
    heigth: 45px;
  }
`;

export const Feature = styled(Inner)`
  flex-direction: column;
  width: 50%;
  align-items: normal;
  padding: 150px 0 500px 0;

  @media (max-width: 1100px) {
    display: none;
  }
`;
