import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../public/images/img_logo.png"; // Logo importieren

export default function NavigationBar({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Container>
        {/* Navbar-Brand mit Logo und Text nebeneinander */}
        <Navbar.Brand
          onClick={() => setCurrentPage("home")}
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            color: "#fff", // Optional, damit der Text weiß bleibt
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              marginRight: 10,
            }}
          />
          {"[./neuraldog]"}
        </Navbar.Brand>

        {/* Hamburger Toggle für mobile Nutzer */}
        <Navbar.Toggle className="cyberpunk-burger"/>
        
        {/* Navigation-Links */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="nav-link" onClick={() => setCurrentPage("home")}>./Home</Nav.Link>
            <Nav.Link className="nav-link" onClick={() => setCurrentPage("about")}>./About</Nav.Link>
            <Nav.Link className="nav-link" onClick={() => setCurrentPage("projects")}>./Projects</Nav.Link>
            <Nav.Link className="nav-link" onClick={() => setCurrentPage("skills")}>./Skills</Nav.Link>
            <Nav.Link className="nav-link" onClick={() => setCurrentPage("blogs")}>./Blogs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
