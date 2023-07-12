import {useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { bringCharactersName } from '../../services/apiCalls';
import { CardCharacter } from '../../common/cardCharacter/CardCharacter';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { searchData,addFindings } from "../searchSlice";



export interface Person{
    id:string;
    name:string;
    image:string;
    location:{name:string};
}


export const Home = () => {

    //Conectamos Home a Redux
const searchRdxData = useSelector(searchData);
const dispatch = useDispatch();

const [characters, setCharacters] = useState<Person[]>([]);
const [page, setPage]=useState(1)
const [totalPages, setTotalPages]=useState(searchRdxData.findings.info.pages)

const [error, setError]=useState(false)






useEffect(()=>{

    console.log('AAA',searchRdxData)

    console.log('Aa',totalPages)
    console.log('Bb',page)

        bringCharactersName(page,searchRdxData.search)
            .then(
                res=>{
                    dispatch(addFindings({findings:res}))
                    setError(false)
                    setTotalPages(res.info.pages)
                }
            )
            .catch(error => {
                setError(true)
            }
        )

}, [page])

// useEffect(()=>{
//     //Búsqueda alternativa a si el buscador está vacio.....
//     // if (searchRdxData.findings.length !== 0) {
//     //     bringCharactersName(1, searchRdxData)
//     //         .then(
//     //             res=>{
//     //                 setCharacters(res)
//     //                 setError(false)

//     //             }
//     //         )
//     //         .catch(error => {
//     //             setError(true)
//     //         }
//     //     )
//     // }else{
//     //     bringCharactersName(1, "")
//     //         .then(
//     //             res=>{
//     //                 setCharacters(res)
//     //                 setError(false)

//     //             }
//     //         )
//     //         .catch(error => {
//     //             setError(true)
//     //         }
//     //     )
//     // }
//     console.log(searchRdxData.findings.length, 'aaaaa')
// }, [searchRdxData])






const cambiarPagina=(pag)=>{
    let pagina = pag

    if(pagina<1){
        pagina=1
    }
    setPage(pagina)



}





return (
    <>
      <Container fluid>
        <Row className="justify-content-center">
          {searchRdxData.findings.results.length > 0 && !error ? (
            <>{searchRdxData.findings.results.map((cartoon: Person) => {
              return (
                <Col
                  className="d-flex justify-content-center"
                  xs={10}
                  md={4}
                  xl={3}
                  key={cartoon.id}
                >
                  <CardCharacter character={cartoon} />
                </Col>
              );
            })}</>
          ) : (
            <>
             <h3>No hay Resultados</h3>
            </>
          )}
        </Row>

        <Row className='d-flex align-items-center justify-content-center'>
            <Col className='d-flex align-items-center justify-content-center m-5'>
                <Button variant="secondary mx-2" disabled={page<2}  onClick={()=>{cambiarPagina(page-1)}}>Anterior</Button>
            </Col>
            <Col className='d-flex align-items-center justify-content-center m-5'>
                <Button variant="secondary mx-2" disabled={page>=totalPages}   onClick={()=>{cambiarPagina(page+1)}}>Siguiente</Button>
            </Col>
        </Row>

      </Container>
    </>
  );
};