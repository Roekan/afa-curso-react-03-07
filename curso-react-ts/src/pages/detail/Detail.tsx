import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {getOneCharacter} from '../../services/apiCalls'
import { Col, Container, Row } from 'react-bootstrap'



export const Detail = () => {
    const id:any = useParams().id
    const [character, setCharacter] = useState<characterData>()

useEffect(()=>{
    getOneCharacter(id)
    .then(res => setCharacter(res))
}, [])

console.log('a')

interface characterData {
  name:string,
  id:string,
  location:{name:string},
  image:string,
  status:string
}


  return (
   <>
    <Container fluid>
      <Row className='d-flex justify-content-center alignt-items-center'>
        <Col className='d-flex justify-content-center alignt-items-center flex-column p-2 bg-dark rounded-5' xs={10} md={8} lg={6}>
          <img className='rounded-5' src={character?.image} alt=""/>
          <p className='text-danger text-center'>{character?.name}</p>
          <p className='text-danger text-center'>{character?.location?.name}</p>
          <p className='text-danger text-center'>{character?.status}</p>
        </Col>
      </Row>
    </Container>
   </>
  )
}
