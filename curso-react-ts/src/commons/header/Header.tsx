import './Header.css'
import React from "react";
import jwtDecode from "jwt-decode";

import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Header = () => {

const navigate = useNavigate();

const token = sessionStorage.getItem("token");
let decoded;
if(token){
   decoded = jwtDecode(token)
}

const logoutHandler = ()=>{
  sessionStorage.clear()
  navigate("/")
}

  return (
    <>
      <Container className=' box-form d-flex align-items-center justify-content-center'>
        <Row className="constainer-fluid d-flex align-items center, justify-content-around">
          <Col className="col-6 d-flex align-items center, justify-content-around border border-2">
            <div onClick={() => navigate("/")}>REACT</div>
          </Col>
          {token ? (
            <>
            <Col className="col-3 d-flex align-items-center justify-content-around border border-2">
              <div>HOLA, {decoded?.name}</div>
            </Col>
            <Col className="col-3 d-flex align-items-center justify-content-around border border-2">
            <div onClick={()=>logoutHandler()}>LOGOUT</div>
          </Col>
          </>
          ) : (
            <Col className="col-6 d-flex align-items-center justify-content-around border border-2">
              <div onClick={() => navigate("/login")}>LOGIN</div>
            </Col>
          )}
        </Row>
      </Container>
    </>
  )
}
