import { Navbar, Nav, Container } from "react-bootstrap";

export default function NavigationBar({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        {/* Navbar-Brand bleibt links */}
        <Navbar.Brand onClick={() => setCurrentPage("home")} style={{ cursor: "pointer" }}>
          Navbar
        </Navbar.Brand>

        {/* Nav nach rechts schieben mit ms-auto */}
        <Nav className="ms-auto">
          <Nav.Link onClick={() => setCurrentPage("home")}>./Home</Nav.Link>
          <Nav.Link onClick={() => setCurrentPage("about")}>./About</Nav.Link>
          <Nav.Link onClick={() => setCurrentPage("projects")}>./Projects</Nav.Link>
          <Nav.Link onClick={() => setCurrentPage("skills")}>./Skills</Nav.Link>
          <Nav.Link onClick={() => setCurrentPage("blogs")}>./Blogs</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
