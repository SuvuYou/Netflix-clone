import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Bcground = styled.div`
  background-image: url(${({ src }) => src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px 40px;
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

export const Logo = styled.img`
  width: 108px;
  heigth: 32px;
  margin-right: 40px;

  @media (min-width: 1449px) {
    width: 167px;
    heigth: 45px;
  }
`;
