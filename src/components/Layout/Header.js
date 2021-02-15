import React from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Formulario 04</Navbar.Brand>
        <Nav className="mr-auto"></Nav>
      </Navbar>
      <br />
    </>
  );
}
export default Header;
