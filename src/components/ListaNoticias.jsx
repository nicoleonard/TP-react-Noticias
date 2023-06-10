import Row from 'react-bootstrap/Row';

const ListaNoticias = (propNoticias)=>{
    return(
        <Row className='mx-0' xs={1} sm={2} md={3} lg={4} xl={5}>  
            {console.log(propNoticias)}
        </Row>

    )
}
export default ListaNoticias