import {Card, Button} from 'react-bootstrap'
import { Person } from '../../pages/home/Home';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addCharacter } from '../../pages/detailSlice';
interface Props{
  character:Person;
}


export const CardCharacter = ({character}:Props ) => {

   const navigate = useNavigate();
   const dispatch = useDispatch();

  const seeDetail =() =>{
    console.log(character, 'hi')

    //Primero guardo en redux los datos
    dispatch(addCharacter({character:character}))


    //A continuacion voy a la página de detalle de ese personaje

    navigate("/detail");



  }

  return (
    <>
        <Card className='my-2' style={{ width: '18rem' }}>
          <Card.Img variant="top" src={character.image} />
          <Card.Body>
          <Card.Title>{character.name}</Card.Title>
          <Card.Text>{character.id}</Card.Text>
          <Card.Text>
          {character.location.name}
          </Card.Text>
          <Button variant="primary" onClick={()=>seeDetail()}>Go somewhere</Button>
          </Card.Body>
        </Card>

    </>
  )




}
