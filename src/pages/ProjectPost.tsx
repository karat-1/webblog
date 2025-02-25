import { Button, Container } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import { useEffect } from "react";
interface ProjectPostProps {
  post: { title: string; content: string };
  setCurrentPage: (page: string) => void;
}

export default function ProjectPost({ post, setCurrentPage }: ProjectPostProps) {
  // Parse metadata & content
  const { content } = matter(post.content);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <Container className="mt-4">
      <Button  onClick={() => setCurrentPage("projects")} className="cyberpunk-button mb-3">
        ← Back to Project List
      </Button>
      <h1 className="display-3">{post.title}</h1>
      <hr />
      <article className="blog-content">
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </Container>
  );
}
