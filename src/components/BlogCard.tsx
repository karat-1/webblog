import { Card, Button } from "react-bootstrap";

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  setCurrentPage: (page: string) => void;
  cardType: string;
}

export default function BlogCard({ title, description, image, slug, setCurrentPage, cardType }: BlogCardProps) {
  const handleCardClick = () => {
    setCurrentPage(`${cardType}-${slug}`);
  };

  return (
    <Card className="blog-card h-100 rounded-4">
      <Card.Img
        variant="top"
        src={image}
        className="blog-card-img"
        onClick={handleCardClick}
        role="button"
        aria-label={`Read more about ${title}`}
      />
      <Card.Body className="blog-card-body d-flex flex-column">
        <Card.Title className="blog-card-title">{title}</Card.Title>
        <Card.Text className="blog-card-text text-truncate-3">{description}</Card.Text>
        <Button className="cyberpunk-button mt-auto" onClick={handleCardClick}>
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
}
