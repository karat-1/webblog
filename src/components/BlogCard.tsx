import { Card, Button } from "react-bootstrap";

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  setCurrentPage: (page: string) => void;
}

export default function BlogCard({ title, description, image, slug, setCurrentPage }: BlogCardProps) {
  return (
    <Card className="blog-card h-100 rounded-4">
      <Card.Img variant="top" src={image} className="blog-card-img" />
      <Card.Body className="blog-card-body">
        <Card.Title className="blog-card-title">{title}</Card.Title>
        <Card.Text className="blog-card-text">{description}</Card.Text>
        <Button className="cyberpunk-button" onClick={() => setCurrentPage(`blog-${slug}`)}>
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
}
