import { Button, Container } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import { useEffect } from "react";

interface BlogPostProps {
  post: { title: string; content: string };
  setCurrentPage: (page: string) => void;
}

export default function BlogPost({ post, setCurrentPage }: BlogPostProps) {
  // Parse metadata & content
  // const { content } = matter(post.content);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <Container className="mt-4">
      <Button  onClick={() => setCurrentPage("blogs")} className="cyberpunk-button mb-3">
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
