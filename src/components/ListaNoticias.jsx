import Row from 'react-bootstrap/Row';
import Noticia from './Noticia.jsx';


const ListaNoticias = ({propNoticias})=>{
    if(propNoticias.results === undefined){
        return (
            <Row className='mx-0' xs={1} sm={2} md={3} lg={4} xl={5}>{console.log("cargando")} </Row>)
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