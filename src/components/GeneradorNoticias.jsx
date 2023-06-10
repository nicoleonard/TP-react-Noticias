import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';

const GeneradorNoticias = () => {

    let categoriaGuardada = JSON.parse(localStorage.getItem("categoriaElegida")) || "ultimas noticias";

    const [categoria, setCategoria] = useState(categoriaGuardada); 

    useEffect(() => {
        localStorage.setItem("categoriaElegida", JSON.stringify(categoria));

    }, [categoria])

    const manejadorSelector = (evento) => {
        setCategoria(evento.target.value)
    }
    return(
        <>
            <Form className='m-2 p-2 border border-2 border-dark-subtle'>
                <Form.Group>
                    <Form.Select onChange={(evento) => manejadorSelector(evento)} defaultValue={categoriaGuardada}>
                        <option value="ultimas noticias">Ultimas noticias</option>
                        <option value="ciencia">Ciencia</option>
                        <option value="deportes">Deportes</option>
                        <option value="politica">Politica</option>
                    </Form.Select>
                </Form.Group>
            </Form>
            <ListaNoticias propCategoria={categoria}/>
        </>


    )

}
export default GeneradorNoticias