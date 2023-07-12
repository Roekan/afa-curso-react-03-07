import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, Container, ListGroup} from 'react-bootstrap';
import { useSelector } from "react-redux";
import { characterData } from '../detailSlice';

export const Detail = () => {

    const rdxCharacterData = useSelector(characterData);


// useEffect(()=>{
//     console.log(rdxCharacterData.character.name)
// },[])




  return (
    <>
        {
            rdxCharacterData.character.id !== ""

            ?(
                <>
                    <Container fluid className='d-flex align-items-center justify-content-center py-2 bg-dark'>
                        <Card style={{ width: '30rem' }}>
                            <Card.Img variant="top" src= {rdxCharacterData.character.image} />
                            <Card.Body>
                                <Card.Title>{rdxCharacterData.character.name}</Card.Title>
                                <Card.Text>
                                Género: {rdxCharacterData.character.gender}
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Lugar: {rdxCharacterData.character.location.name}</ListGroup.Item>
                                <ListGroup.Item>Especie: {rdxCharacterData.character.species}</ListGroup.Item>
                                <ListGroup.Item>Estado: {rdxCharacterData.character.status}</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href={rdxCharacterData.character.location.url}>{rdxCharacterData.character.location.name}</Card.Link>
                                <Card.Link href={rdxCharacterData.character.url}>URL API</Card.Link>
                            </Card.Body>
                        </Card>
                    </Container>
                </>
            )
            :(
                <>No se han encontrado resultados</>
            )
        }
    </>
  )
}
