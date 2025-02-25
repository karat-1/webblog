import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import BlogCard from "../components/BlogCard";
import { blogPosts } from "../lib/mdxloader";

export default function Home({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <Container className="hero-content">
          <h1 className="display-3">Example Introduction Test</h1>
          <p className="fs-4">Procastrinator | Professional Ludwig Hater | asdf1213</p>
          <Button variant="primary" size="lg" onClick={() => setCurrentPage("projects")}>
            Explore Projects
          </Button>
        </Container>
      </section>

      {/* About Section */}
      <section className="intro-section">
        <Container>
          <h2>About Me</h2>
          <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </Container>
      </section>

      {/* Featured Projects Section */}
      <section className="projects-section">
        <Container>
          <h2>Featured Projects</h2>
          <Row className="g-4">
            <Col md={4}>
              <div className="project-card">
                <img src="https://via.placeholder.com/300" alt="Project One" />
                <h3 className="mt-3">Project One</h3>
                <p>Tolles Projekt 123</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="project-card">
                <img src="https://via.placeholder.com/300" alt="Project Two" />
                <h3 className="mt-3">Project Two</h3>
                <p>Ein  richtig krasses 2. projekt</p>
              </div>
            </Col>
            <Col md={4}>
              <div className="project-card">
                <img src="https://via.placeholder.com/300" alt="Project Three" />
                <h3 className="mt-3">Project Three</h3>
                <p>
                  Ein spannendes projekt dass ganz viel geld macht ja ja
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="blog-section">
        <Container>
          <h2>Latest Blog Posts</h2>
          <Row className="g-4">
            {blogPosts.map((post) => (
              <Col key={post.slug} xs={12} md={4}>
                <BlogCard
                  title={post.title}
                  description={post.description || "No description available."}
                  image={post.image || "https://via.placeholder.com/300"}
                  slug={post.slug}
                  setCurrentPage={setCurrentPage}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}
