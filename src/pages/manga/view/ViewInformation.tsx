import React from "react";
import { Card, Row, Col } from "react-bootstrap";

interface ViewInformationProps {
  synopsis: string;
}

interface ViewInformationFieldsProps {
  title: string;
  children: React.ReactNode;
}

function ViewInformationFields({
  title,
  children,
}: ViewInformationFieldsProps): JSX.Element {
  return (
    <Row>
      <Col sm={12} md={3}>
        {title}
      </Col>
      <Col sm={12} md={9}>
        <div className="text-muted" style={{ textAlign: "justify" }}>
          {children}
        </div>
      </Col>
    </Row>
  );
}

function ViewInformation({ synopsis }: ViewInformationProps): JSX.Element {
  return (
    <Card id="scroll" className="w-100 p-3">
      <Card.Body>
        <Card.Title>Manga Information</Card.Title>
        <ViewInformationFields title="Synopsis">
          {synopsis}
        </ViewInformationFields>
      </Card.Body>
    </Card>
  );
}

export default ViewInformation;
