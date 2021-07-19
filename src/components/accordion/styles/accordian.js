import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100 vw;
  padding: 50px 150px;

  color: white;
  border-bottom: 8px solid #222;

  @media (max-width: 950px) {
    padding: 20px 70px;
  }
`;

export const Title = styled.h1`
  font-size: 26px;
  line-height: 1.1;
  font-weight: normal;

  margin: 0 0 8px 0;
  text-align: center;
`;

export const Frame = styled.div`
  position: relative;
  max-width: 815px;
  width: 100%;
  min-height: 75px;
  margin: 10px auto;
  background-color: black;

  @media (max-width: 950px) {
    min-height: 58px;
  }
`;

export const Body = styled.div`
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;

  background-color: #303030;
  padding: 20px;
  font-size: 22px;
`;

export const Rectangle = styled.div`
  position: relative;
  height: 75px;
  cursor: pointer;
  user-select: none;
  padding: 0 25px;
  margin-bottom: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #303030;

  @media (max-width: 950px) {
    height: 58px;
  }

  img {
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 600px) {
      width: 16px;
    }
  }
`;

export const MainTitle = styled.h1`
  width: 100%;
  font-size: 46px;
  text-align: center;
  margin-bottom: 35px;
  margin-top: 0;

  @media (max-width: 950px) {
    font-size: 36px;
  }
`;
