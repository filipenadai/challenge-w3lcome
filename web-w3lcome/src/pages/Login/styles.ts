import styled, { keyframes } from 'styled-components';

import backgroundImg from '../../assets/background.jpeg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Background = styled.div`
  flex: 1;
  border: 0;
  background-color: #f2b10c;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;

  @media (min-width: 700px) {
    box-shadow: 0 0 12px 8px rgba(0, 0, 0, 0.3);
  }
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px)
  }
  to {
    opacity: 1;
    transform: translateX(0px)
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  animation: ${appearFromLeft} 1s;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;

  margin-top: 48px;

  input {
    flex: 1;
    background: #fff;
    padding: 8px;
    width: 100%;
    display: flex;
    align-items: center;
    border: 0;
    border-bottom: 1px solid #f2b10c;

    & + input {
      margin-top: 16px;
    }
  }

  button {
    margin-top: 16px;
    flex: 1;
    padding: 16px;
    background: #f2b10c;
    color: #f1f7f6;
    border-radius: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
  }
`;

export const Footer = styled.footer`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    height: 56px;
  }

  h6 {
    padding: 16px 0;
  }

  p {
    text-align: center;
    display: flex;
    max-width: 360px;
    flex-direction: column;
    align-items: center;

    span {
      font-size: 16px;
      line-height: 16px;
    }

    strong {
      font-size: 16px;
    }
  }
`;
