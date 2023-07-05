import React,{useEffect,useState} from 'react';
import {Col, Container,Row} from "react-bootstrap"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {logUser} from "../../services/apiCalls"
import {useNavigate} from "react-router-dom"

import './Login.css'
import { TextInput } from '../../commons/textInput/TextInput';


//alvaro@alvaro.com
//Abcd1234
//alvaro



export const Login = () => {
  const navigate = useNavigate();

  

  const [userCredentials, setUserCredentials]=useState({
    email:"",
    password:""
  })

  const [userError, setUserError] = useState({
    email:"",
    password:"",
    credentials:""
  })

  const [logged, setLogged]=useState(false)




  const submitHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    logUser(userCredentials).then((res) => {
      sessionStorage.setItem("token", res.token);
      setLogged(true);
    })
    .catch(error => {console.log(error)
    const errorMessage = error.response.data.message
    setUserError((prevState)=>({
      ...prevState,
      credentials:errorMessage
    }))
    })
  };

  useEffect(() => {
    if (logged) {
      navigate("/");
    }
  }, [logged]);


  return (
    <>
        <Container fluid>
        <Row className="justify-content-center">
          <Col
            xs={10}
            md={6}
            lg={4}
          >
            <Form>
              {userError.credentials ? (<div>{userError.credentials}</div>) : (<div></div>)}
              <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
              >
                <Form.Label>Email address</Form.Label>
                <TextInput
                type={"email"}
                name={"email"}
                placeholder={"Introduzca el email"}
                design={userError.email ? ("errorInput") : ("checkedInput")}
                state={setUserCredentials}
                errorState={setUserError}
                password1={""}
                />
                {/* <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  className={userError.email ? ("errorInput") : ("")}
                  onChange={(e) => inputHandler(e)}
                  onBlur={(e) => errorHandler(e)}
                /> */}
                {userError.email ? (<div>{userError.email}</div>) : (<div></div>)}
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="formBasicPassword"
              >
                <Form.Label>Password</Form.Label>
                <TextInput
                type={"password"}
                name={"password"}
                placeholder={"Enter your password"}
                design={userError.password ?("errorInput"):("checkedInput")}
                state = {setUserCredentials}
                errorState={setUserError}
                password1={""}
                />

                {/* <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  className={userError.password ? ("errorInput") : ("")}
                  onChange={(e) => inputHandler(e)}
                  onBlur={(e)=>errorHandler(e)}
                /> */}
                {userError.password ? (<div>{userError.password}</div>) : (<div></div>)}
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicCheckbox"
              >
                <Form.Check
                  type="checkbox"
                  label="Check me out"
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                onClick={(e) => submitHandler(e)}
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
