import {Card, Button} from 'react-bootstrap'
import { Person } from '../../pages/home/Home';



interface Props{
  character:Person;
}


export const CardCharacter = ({character}:Props ) => {
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
          <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>

    </>
  )




}
