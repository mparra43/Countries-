import React, {useState} from 'react'
import {orderCountries} from "../../actions/countries";
import {useDispatch} from "react-redux";
import './styles/allCountries.css';


export const AllCountries = () => {
    const dispatch = useDispatch();
    const [order, setOrder] = useState( "Selecciona el orden");


    const handleOptionChange = (e) => {
        const  selectOrder =  e.target.value;
        setOrder(selectOrder);
    }


    const handleSubmitOrder = (e) => {
        e.preventDefault();
        dispatch( orderCountries(order));
    }

    return (
        <div className="ordenar">
            <form onSubmit={handleSubmitOrder} >
                <select className="select"
                        name="order"
                        value={order}
                        onChange={ handleOptionChange} >
                    <option>Selecciona el orden de los Países</option>
                    <option>Orden alfabético</option>
                    <option>Numero de población</option>
                    <option>Orden decendente</option>
                </select>
                <button className="btn-orden" type="submit">
                    <span>Ordenar</span>
                </button>
            </form>
        </div>
    )
}
