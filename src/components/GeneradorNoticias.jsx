import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import ListaNoticias from './ListaNoticias';

const GeneradorNoticias = () => {

    let categoriaGuardada = JSON.parse(localStorage.getItem("categoriaElegida")) || "top";

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
            const respuesta = await fetch (`https://newsdata.io/api/1/news?apikey=pub_24276a6d001c4c2d36427a7685dbaf9188b90&language=es&category=${categoria}`);
            const datos = await respuesta.json();
            setNoticias(datos)
        }catch(error){
            console.log(error)
        }


    }

    return(
        <>
            <Form className='m-2 p-2 border border-2 border-dark-subtle'>
                <Form.Group>
                    <Form.Select onChange={(evento) => manejadorSelector(evento)} defaultValue={categoriaGuardada}>
                        <option value="top">Ultimas noticias</option>
                        <option value="science">Ciencia</option>
                        <option value="sports">Deportes</option>
                        <option value="politics">Politica</option>
                    </Form.Select>
                </Form.Group>
            </Form>
            <ListaNoticias propNoticias={noticias}/>
        </>


    )

}
export default GeneradorNoticias