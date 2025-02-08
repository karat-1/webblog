import { Button, Container } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

interface BlogPostProps {
  post: { title: string; content: string };
  setCurrentPage: (page: string) => void;
}

export default function BlogPost({ post, setCurrentPage }: BlogPostProps) {
  return (
    <Container className="mt-4">
      <Button variant="secondary" onClick={() => setCurrentPage("blogs")} className="mb-3">
        ← Back to Blog List
      </Button>
      <h1 className="display-3">{post.title}</h1>
      <hr />
      <article className="blog-content">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </Container>
  );
}
