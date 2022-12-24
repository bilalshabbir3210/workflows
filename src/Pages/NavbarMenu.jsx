import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const NavbarMenu = () => {
    const amount = useSelector(state => state.amount);
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand to="/">Navbar</Navbar.Brand>
          <Nav className="mr-auto p-2">
            <Link to="/" className="m-2">Home</Link>
            <Link to="/contact" className="m-2">Contact</Link>
            <Link to="/register" className="m-2">Register</Link>
            <Link to="/login" className="m-2">Login</Link>
            <Link to="/account" className="m-2">Account</Link>
            <button disabled={true} className="btn btn-primary float-right">Balance: {amount}</button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarMenu;
