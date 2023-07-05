import { ChangeEvent, useEffect, useState } from 'react';
import { getCharacterByName,getCharacters } from '../../services/apiCalls';
import { useNavigate } from 'react-router-dom';
import { Row,Col,Container,Card,Button } from 'react-bootstrap';
import { useDebounce } from 'use-debounce';

export const Home = () => {

  interface CharData{
    id:string;
    name:string;
    image:string;
    location:{name:string};
  }
  const navigate = useNavigate();
  const [characters, setCharacters] = useState<CharData[]>([]);
  const [search, setSearch] = useState<string>("");
  const [debouncedSearch] = useDebounce(search,1000)
  

  useEffect(()=>{
    if (debouncedSearch){
      getCharacterByName(debouncedSearch).then((res) =>setCharacters(res));
    }else{
      getCharacters().then((res)=>setCharacters(res))
    }
  }, [debouncedSearch])

  const inputHandler = ({target}:ChangeEvent<HTMLInputElement>)=>{
    const {value}:any=target;
    setSearch(value);
  };


  return (
    <>
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={10} md={6}>
            <input 
            name="criteria"
            type="text" 
            placeholder="Introduce un personaje"
            onChange={(inputHandler)}
            />
          </Col>
        </Row>
        <Row className="justify-content-center bg-dark">
          {characters?.map((char:CharData)=>{
            return(
              <Col className='d-flex justify-content-center p-4' xs={10} md={4} xl={3} key={char.id}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={char.image} />
                  <Card.Body>
                    <Card.Title>{char.name}</Card.Title>
                    <Card.Text>
                      {char.location.name}
                    </Card.Text>
                    <Button variant="primary" onClick={()=> navigate(`detail/${char.id}`)}>Ver detalle</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  )
}
