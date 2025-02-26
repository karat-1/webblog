import { projects } from "../lib/mdxloader";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "../components/BlogCard";

export default function Projects({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <Container className="mt-4">
      <h1 className="text-center section-header mb-4">Projects</h1>
      <Row xs={1} md={4} lg={4} className="g-4">
        {projects.map((post) => (
          <Col key={post.slug}>
            <BlogCard
              title={post.title}
              description={post.description || "No description available."}
              image={post.image || "https://via.placeholder.com/300"}
              slug={post.slug}
              setCurrentPage={setCurrentPage}
              cardType="project"
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
