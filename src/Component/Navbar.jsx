import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" style={{color: "blue", fontSize: "25px"}}>HOME</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"style={{color: "blue", fontSize: "25px"}} >CONTACT</Nav.Link>
            <Nav.Link href="#link"style={{color: "blue", fontSize: "25px"}} >Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" style={{color: "blue", fontSize: "20px"}} >Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" style={{color: "blue", fontSize: "20px"}}>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" style={{color: "blue", fontSize: "20px"}} >Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" style={{color: "blue", fontSize: "20px"}}>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;