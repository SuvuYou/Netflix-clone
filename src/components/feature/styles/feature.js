import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 150px 0;
  text-align: center;
`;

export const MainTitle = styled.h1`
  color: white;
  margin: 15px;
  padding: 0;
  font-size: 50px;
  text-align: center;
  max-width: 640px;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;
export const WelcomeTitle = styled.h2`
  color: white;
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 26px;
  font-weight: normal;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
export const Text = styled.h3`
  color: white;
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 26px;
  font-weight: normal;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
