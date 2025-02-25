import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";

interface ProjectCardProps {
  count: number;
  title: string;
  description: string;
  image?: string; // Optionales Bild
}

const DEFAULT_IMAGE = "public/assets/img_logo.png"; // Fallback-Bild

const ProjectCard: React.FC<ProjectCardProps> = ({ count, title, description, image }) => {
  const [imgSrc, setImgSrc] = useState(image || DEFAULT_IMAGE);

  return (
    <Card className="content-card">
      <Row className="g-0">
        {/* Linke Spalte: Text */}
        <Col md={8} className="p-3 d-flex flex-column justify-content-center">
          <div className="count text-muted">#{count}</div>
          <h4 className="title">{title}</h4>
          <p className="description">{description}</p>
        </Col>

        {/* Rechte Spalte: Bild */}
        <Col md={4} className="d-flex align-items-center">
          <img
            src={imgSrc}
            alt={title}
            className="img-fluid content-card-image"
            onError={() => setImgSrc(DEFAULT_IMAGE)} // Falls Bild kaputt, Standardbild setzen
          />
        </Col>
      </Row>
    </Card>
  );
};

export default ProjectCard;
