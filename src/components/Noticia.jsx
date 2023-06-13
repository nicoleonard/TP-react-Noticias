import { Card, Button } from "react-bootstrap";

const Noticia = ({propNoticia}) => {
    return (
        <Card className="px-0">
            <Card.Header>
                <h3 className="text-truncate">{propNoticia.title}</h3>   
            </Card.Header>
            <Card.Body>
                <h6>Resumen</h6>
                <p className="text-wrap">{propNoticia.description ? propNoticia.description.substring(0,150)+"... " : "No hay resumen"}</p>
                
            </Card.Body>
            <Card.Footer>

                <Button variant="primary" href={propNoticia.link}>Ver más</Button>
                
            </Card.Footer>
        </Card>
    );
};

export default Noticia;