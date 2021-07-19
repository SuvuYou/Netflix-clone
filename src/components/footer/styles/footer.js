import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  padding: 70px 56px;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const LinkBox = styled.div`
  width: 25%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-align: center;
  margin: 10px 0;

  @media (max-width: 740px) {
    width: 33.33%;
  }

  @media (max-width: 500px) {
    width: 50%;
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: space-around;

  width: 100%;
`;

export const Link = styled.a`
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  color: #757575;
  font-size: 13px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Title = styled.h1`
  color: #757575;
  font-size: 18px;
  font-weight: normal;
  line-height: 1.2;

  @media (max-width: 850px) {
    font-size: 13px;
  }
`;

export const Text = styled.h1`
  color: #757575;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.2;
  margin: 25px 0;

  @media (max-width: 850px) {
    font-size: 13px;
  }
`;
