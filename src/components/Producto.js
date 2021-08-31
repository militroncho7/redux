import React from 'react';
import { Link } from 'react-router-dom'

const Producto = ({producto}) => {
    const { nombre, precio, id } = producto;

    return (
        <tr>
            <td>{nombre}</td>
            <td><span className="font-weight-bold">{precio} €</span></td>
            <td className="acciones">
                <Link to={`/producto/editar/${id}`} className="btn btn-primary mr-2">
                    Editar
                </Link>
                <button
                    type="button"
                    className="btn btn-danger"
                >Eliminar &times;</button>
            </td>
        </tr>
    );
}
 
export default Producto;