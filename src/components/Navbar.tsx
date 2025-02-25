import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img_logo.png"; // Logo importieren

export default function NavigationBar({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <Navbar className="custom-navbar">
      <Container>
        {/* Navbar-Brand mit Logo */}
        <Navbar.Brand 
          onClick={() => setCurrentPage("home")} 
          style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
        >
          <img 
            src={logo} 
            alt="Logo" 
            style={{ width: 64, height: 64, borderRadius: "50%", marginRight: 10 }}
          />
          {"[./neuraldog]"}
        </Navbar.Brand>

        {/* Navigation-Links */}
        <Nav className="ms-auto">
          <Nav.Link className="nav-link" onClick={() => setCurrentPage("home")}>./Home</Nav.Link>
          <Nav.Link className="nav-link" onClick={() => setCurrentPage("about")}>./About</Nav.Link>
          <Nav.Link className="nav-link" onClick={() => setCurrentPage("projects")}>./Projects</Nav.Link>
          <Nav.Link className="nav-link" onClick={() => setCurrentPage("skills")}>./Skills</Nav.Link>
          <Nav.Link className="nav-link" onClick={() => setCurrentPage("blogs")}>./Blogs</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
