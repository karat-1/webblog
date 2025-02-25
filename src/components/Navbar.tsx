import { Navbar, Nav, Container } from "react-bootstrap";

export default function NavigationBar({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <Navbar className="custom-navbar">
      <Container>
        {/* Navbar-Brand */}
        <Navbar.Brand onClick={() => setCurrentPage("home")} style={{ cursor: "pointer" }}>
          Navbar
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
