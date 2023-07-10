import './Header.css'
import { TextInput } from "../textInput/TextInput";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [searchInfo, setSearchInfo] = useState<string>("");
  const [token, useToken] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    if (searchInfo !== "") {
      console.log("La busqueda vale: ", searchInfo);
    }
  });

  return (
    <>
      <Container fluid >
        <Row className="justify-content-center bg-info py-3">
          <Col
            className="d-flex justify-content-center
        xs={10}
        md={4}
        xl={4}
        "
          ></Col>
          <Col
            className="d-flex justify-content-center
        xs={10}
        md={4}
        xl={4}
        "
          >
            <TextInput
              name="search"
              type="text"
              placeholder="Introduzca personaje"
              state={setSearchInfo}
            />
          </Col>
          <Col
            className="d-flex justify-content-center
        xs={10}
        md={4}
        xl={4}
        ">
          <Row>
            {token==="" ?(
              <>
                <Col className="linkDesign" onClick={()=>navigate("/")}>Home</Col>
                <Col className="linkDesign" onClick={()=>navigate("/login")}>Login</Col>
                <Col className="linkDesign" onClick={()=>navigate("/register")}>Register</Col>
              </>
            ):(
              <>
              <Col>Name</Col>
              <Col>Log out</Col>
              </>
            )}
          </Row>
        </Col>
        </Row>
      </Container>
    </>
  );
};
