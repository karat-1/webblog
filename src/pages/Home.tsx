import { Container, Row, Col, Button } from "react-bootstrap";
import BlogCard from "../components/BlogCard";
import { blogPosts, projects } from "../lib/mdxloader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube, faXTwitter } from "@fortawesome/free-brands-svg-icons";


export default function Home({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <Container className="hero-content">
          <h1 className="display-3">Building Games & Breaking Code</h1>
          <p className="fs-4">
            Full-stack developer, game tinkerer, and DevOps enthusiast.  
            Exploring tech, sharing insights, and making things that (mostly) work.
          </p>
          <Button className="cyberpunk-button" size="lg" onClick={() => setCurrentPage("projects")}>
            See What I'm Building
          </Button>

          {/* Social Links */}
          <div className="social-links mt-3">
            <Button
              variant="outline-light"
              href="https://github.com/karat-1"
              target="_blank"
              rel="noopener noreferrer"
              className="me-2"
            >
              <FontAwesomeIcon icon={faGithub} className="me-0" /> 
            </Button>

            <Button
              variant="outline-light"
              href="https://www.youtube.com/@neuraldoggo"
              target="_blank"
              rel="noopener noreferrer"
              className="me-2"
            >
              <FontAwesomeIcon icon={faYoutube} className="me-0" /> 
            </Button>

            <Button
              variant="outline-light"
              href="https://x.com/neuraldoggo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faXTwitter} className="me-0" />
            </Button>
          </div>
        </Container>
      </section>

      {/* Featured Projects Section */}
      <section className="projects-section">
        <Container>
          <h2 className="section-header">Featured Projects</h2>
          <Row className="g-4">
            {projects.map((project) => (
              <Col key={project.slug} xs={12} md={4}>
                <BlogCard
                  title={project.title}
                  description={project.description || "No description available."}
                  image={project.image || "https://via.placeholder.com/300"}
                  slug={project.slug}
                  setCurrentPage={setCurrentPage}
                  cardType="project"
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="blog-section">
        <Container>
          <h2 className="section-header">Latest Blog Posts</h2>
          <Row className="g-4">
            {blogPosts.map((post) => (
              <Col key={post.slug} xs={12} md={4}>
                <BlogCard
                  title={post.title}
                  description={post.description || "No description available."}
                  image={post.image || "https://via.placeholder.com/300"}
                  slug={post.slug}
                  setCurrentPage={setCurrentPage}
                  cardType="blog"
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}

