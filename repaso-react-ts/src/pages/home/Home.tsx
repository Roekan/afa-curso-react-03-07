import {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { bringCharacters } from '../../services/apiCalls';
import { CardCharacter } from '../../common/cardCharacter/CardCharacter';
import { Container, Row, Col } from 'react-bootstrap';

export interface Person{
    id:string;
    name:string;
    image:string;
    location:{name:string};
}


export const Home = () => {

const [characters, setCharacters] = useState<Person[]>([]);



useEffect(()=>{
    if(characters.length === 0){
        bringCharacters()
            .then(
                res=>{
                    setCharacters(res)
                }
            )
            .catch(error => console.log(error))
    }
}, [characters])



    return (
        <>

            {characters.length >0 ?(
                <>
                <Container fluid>
                    <Row className='justify-content-center'>
                        
                        {characters.map((cartoon:Person)=>{
                            return (
                                <Col className='d-flex justify-content-center' xs={10} md={4} xl={3} key={cartoon.id}>
                                    <CardCharacter
                                        character={cartoon}
                                    />
                                </Col>
                            )
                            
                        })}

                    </Row>
                </Container>
                </>
            ):(
            <><h2>Aun no han llegado los personajes</h2></>
            )}
        
        </>
  )




}
