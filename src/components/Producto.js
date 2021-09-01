import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

//Redux
import  { useDispatch } from 'react-redux';
import { borrarProductoAction, obtenerProductoEditar } from '../actions/productoActions';

const Producto = ({producto}) => {
    const { nombre, precio, id } = producto;

    const dispatch = useDispatch();
    const history = useHistory(); //habilitar history para redireccionar

    //confirmar si desea eliminar
    const confirmarEliminarProdcuto = id => {
        
        //preguntar al usuario
        Swal.fire({
            title: '¿Estás seguro?',
            text: "¡Un producto que se elimina no se puede recuperar!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: '¡Sí, eliminar!',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {

                //pasarlo al action
                dispatch( borrarProductoAction(id) );
            }
          });

    };

    //función que redirige de forma programada
    const redireccionarEdición = producto => {
        dispatch( obtenerProductoEditar(producto) );
        history.push(`/producto/editar/${producto.id}`);
    };
    
    return (
        <tr>
            <td>{nombre}</td>
            <td><span className="font-weight-bold">{precio} €</span></td>
            <td className="acciones">
                <button
                    tipe="button"
                    onClick={ () => redireccionarEdición(producto) }
                    className="btn btn-primary mr-2"
                >Editar</button>

                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={ () => confirmarEliminarProdcuto(id) }
                >Eliminar &times;</button>
            </td>
        </tr>
    );
}
 
export default Producto;