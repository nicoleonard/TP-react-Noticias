import Form from 'react-bootstrap/Form';
const GeneradorNoticias = () => {
    return(
        <Form className='m-2 p-2 border border-2 border-dark-subtle' onChange={manejadorSelector}>
            <Form.Group className="mb-3">
                <Form.Label>Categoria de noticias</Form.Label>
                <Form.Select>
                    <option>Seleccionar categoria de noticias</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>
            </Form.Group>
        </Form>
    )

}
export default GeneradorNoticias