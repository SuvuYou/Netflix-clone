import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  max-width: 800px;
  margin: 50px auto 10px auto;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  height: 50px;
  max-width: 450px;
  width: 100%;
  background-color: white;
  border: none;
  padding: 0 15px;

  font-size: 22px;
`;

export const Btn = styled.div`
color: white;
  height: 50px;
  background-color: #e50914;
  padding: 0 15px;
  text-align: center;
  border: none;
  font-size: 16px;
  cursor: pointer;

  text-transform: uppercase;
  letter-spacing: 1px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    margin-top: 16px;
  }

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;

    @media (max-width: 1000px) {
      width: 16px;
    }
  }

 &:hover{
    background-color: #f40612;
 }
  }
`;

export const Text = styled.div`
  color: white;
  width: 100%;
  text-align: center;
  padding-top: 40px;
  font-size: 20px;

  @media (max-width: 1000px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;
