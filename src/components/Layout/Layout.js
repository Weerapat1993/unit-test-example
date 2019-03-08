import React, { Fragment } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LOGO from '../../assets/icons/logo.svg';

const TextLink = styled(Link)`
  color: ${props => props.color};
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: white;
  }
`;

const Layout = ({ children, title }) => (
  <Fragment>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <img
          src={LOGO}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
        <span className="hidden-sm hidden-xs">
          React
        </span>
      </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>
            <TextLink to="/" color="whitesmoke">
              Home
            </TextLink>
          </Nav.Link>
          <Nav.Link>
            <TextLink to="/about" color="whitesmoke">
              About
            </TextLink>
          </Nav.Link>
        </Nav>
    </Navbar>
    <Container>
      <br/><br/>
      <h1>{title}</h1>
      {children}
    </Container>
  </Fragment>
);

export default Layout;
