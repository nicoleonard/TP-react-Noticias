import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import ListaNoticias from './ListaNoticias';

const GeneradorNoticias = () => {

    let categoriaGuardada = JSON.parse(localStorage.getItem("categoriaElegida")) || "ultimas noticias";

    const [categoria, setCategoria] = useState(categoriaGuardada); 
    const [noticias, setNoticias] = useState([]);


    useEffect(() => {
        localStorage.setItem("categoriaElegida", JSON.stringify(categoria));
        consultarNoticias(categoria);
    }, [categoria])

    const manejadorSelector = (evento) => {
        setCategoria(evento.target.value)
    }

    const consultarNoticias = async (categoria) =>{
        try{
            console.log(categoria)
        }catch(error){
            console.log(error)
        }

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
            <ListaNoticias propNoticias={noticias}/>
        </>


    )

}
export default GeneradorNoticias