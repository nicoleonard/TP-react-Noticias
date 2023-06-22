import Row from 'react-bootstrap/Row';
import Spinner  from 'react-bootstrap/Spinner';
import Noticia from './Noticia.jsx';
import { Container } from 'react-bootstrap';


const ListaNoticias = ({propNoticias})=>{
    if(propNoticias.results === undefined){
        return (
            <Container className='d-flex justify-content-center pt-5'>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Container>


            )
    }else{
        return(
            <Row className='mx-0' xs={1} sm={2} md={3} lg={4} xl={5}>  
                {
                 propNoticias.results.map((noticia, indice) => <Noticia propNoticia={noticia} key={indice}></Noticia>)                           
                }
            </Row>
    
        )
    }

}
export default ListaNoticias