import styled from "styled-components/macro";
import { Link as ReactRoutedLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 660px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radiut: 5px;
  max-width: 450px;
  margin: auto;
  box-sizing: border-box;
  padding: 60px 68px 40px;
  margin-bottom: 100px;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`;

export const Input = styled.input`
  background: #333;
  border-radius: 4px;
  border: 0;
  color: white;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 30px;
  }
`;

export const Submit = styled.button`
  background: #e50914;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 24px 0 12px;
  padding: 16px;
  border: 0;
  color: white;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
`;

export const Text = styled.p`
  margin-top: 10px;
  color: #8c8c8c;
  font-size: 13px;
  line-height: normal;
`;

export const SmallText = styled.p`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
`;

export const Link = styled(ReactRoutedLink)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Error = styled.div`
  background-color: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`;
