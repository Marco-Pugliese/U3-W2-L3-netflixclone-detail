import { Button, Container } from "react-bootstrap";

const FooterCode = () => (
  <Container className="w-50 mx-auto pt-4">
    <Button className="bg-transparent rounded-0 border-secondary text-secondary py-1">
      Service Code
    </Button>
    <div className="extrasmall pt-3 pb-2">
      © 1997 - <span>{new Date().getFullYear()}</span>
    </div>
  </Container>
);

export default FooterCode;
