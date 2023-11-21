import React from "react";
import logo from "../assets/logo.png";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';


const CustomNavbar = () => {
  let Links = [
    { name: "Home", link: "/home" },
    { name: "Blog", link: "/blog", dropdown: [
      { subName: "Informasi", subLink: "/blog/informasi" },
      { subName: "FA&Q", subLink: "/blog/category2" }
    ] },
    { name: "Layanan", link: "/layanan" },
    { name: "About Us", link: "/aboutus" },
  ];

  return (
    <Navbar expand="lg" style={{ backgroundColor: '#327094', height: '100px' }}>
      <Container fluid>
        <div className="flex items-center cursor-pointer font-[poppins] text-white">
          <img src={logo} alt="Logo" className="h-16 mr-2" style={{ marginLeft:'20px'}}/>
          <div className="font-medium ml-3 text-2xl">ease laundry</div>
        </div>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav className="ml-auto" style={{ gap: '40px', fontSize:'16pt'}}>
            {Links.map((link) => (
              <React.Fragment key={link.name}>
                {link.dropdown ? (
                  <NavDropdown
                    title={link.name}
                    id={link.name}
                    style={{ backgroundColor: '#327094' }}
                  >
                    {link.dropdown.map((subLink) => (
                      <NavDropdown.Item
                        key={subLink.subName}
                        href={subLink.subLink}
                      >
                        {subLink.subName}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                ) : (
                  <Nav.Link
                    href={link.link} 
                    className="text-white navbar-link"
                    style={{ color: 'cyan' 
                    ,transition: 'color 0.3s'}}
                    onMouseEnter={(e) => {
                      e.target.style.color = "cyan";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "white";
                    }}
                  >
                    {link.name}
                  </Nav.Link>
                )}
              </React.Fragment>
            ))}
            <Nav.Link className="text-white">
              <ion-icon name="notifications-outline" style={{ fontSize: '24pt' }}></ion-icon>
            </Nav.Link>
            <Button variant="outline-info" className="ml-2 text-white" style={{ marginRight:'20px', borderColor: 'white' }}>
              Masuk
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
