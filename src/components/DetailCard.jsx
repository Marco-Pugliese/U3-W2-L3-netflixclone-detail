import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { PlayCircle } from "react-bootstrap-icons";

const DetailCard = ({ datas }) => {
  return (
    <Container fluid className="my-bg">
      <Row className="justify-content-center">
        <Col md={4}>
          <Card className="border-0 rounded shadow-lg">
            <Card.Img variant="top" src={datas.Poster} />
            <Card.Body className="text-white my-bg">
              <Card.Title>
                <div className="text-center">
                  <h1>{datas.Title}</h1>
                </div>
                <div className="text-center extrasmall">
                  {datas.Year} | {datas.Genre} - {datas.Runtime}m
                </div>
              </Card.Title>
              <Card.Text className="my-3">{datas.Plot}</Card.Text>
              <Button
                variant="transparent text-danger"
                className="d-flex w-100 justify-content-center"
              >
                <div className="d-flex align-items-center text-white">
                  Play
                  <PlayCircle className="d-flex align-items-center justify-content-center mx-2 fs-1 text-danger " />
                </div>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailCard;
