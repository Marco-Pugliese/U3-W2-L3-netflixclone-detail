import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

const DetailComment = ({ comments }) => {
  const [commentsList, setCommentList] = useState([comments]);
  useEffect(() => {
    setCommentList(comments);
  }, []);
  console.log(commentsList);
  return (
    <Container fluid className="my-bg">
      <h3 className="pt-5 pb-4 text-white text-center">Comments: </h3>
      <Row className="my-bg flex-column  align-items-center justify-content-center text-center">
        {commentsList.map((singleComment, i) => {
          return (
            <Col
              className="col-4 bg-dark py-2 my-1 rounded text-white border-bottom"
              key={i}
            >
              {singleComment.comment}
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
export default DetailComment;
