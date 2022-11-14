import React from 'react';
import '../SubTotal/SubTotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../Reducer';
import { useNavigate } from "react-router-dom";

export const SubTotal = () => {
    const navigate = useNavigate();

    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift!
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={e => navigate('/Payment')}>Procced to checkout</button>

        </div>
    )
}
