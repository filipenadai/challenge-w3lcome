import React from 'react';

import logoImg from '../../assets/w3lcome-logo.png';
import footerImg from '../../assets/footer.png';

import { Container, Background, Form, Content, Footer } from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="W3lcome" />
        <Form>
          <input placeholder="E-mail" />
          <input placeholder="Password" />
          <button type="submit">Login</button>
        </Form>
        <Footer>
          <img src={footerImg} alt="W3lcome" />
          <h6>Copyright © 2021 W3lcome</h6>
          <p>
            <span>
              “You never get a second chance to make a first impression” -
              <strong> Andrew Grant</strong>
            </span>
          </p>
        </Footer>
      </Content>
      <Background />
    </Container>
  );
};

export default Login;
