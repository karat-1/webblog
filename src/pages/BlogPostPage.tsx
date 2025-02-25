import { Button, Container } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";

interface BlogPostProps {
  post: { title: string; content: string };
  setCurrentPage: (page: string) => void;
}

export default function BlogPost({ post, setCurrentPage }: BlogPostProps) {
  // Parse metadata & content
  const { content } = matter(post.content);

  return (
    <Container className="mt-4">
      <Button  onClick={() => setCurrentPage("blogs")} className="cyberpunk-button mb-3">
        ← Back to Blog List
      </Button>
      <h1 className="display-3">{post.title}</h1>
      <hr />
      <article className="blog-content">
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </Container>
  );
}
