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
    <Card className="h-100 rounded-4" >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" onClick={() => setCurrentPage(`blog-${slug}`)}>
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
}
