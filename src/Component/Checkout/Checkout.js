import React from 'react';
import '../Checkout/Checkout.css';
import { CheckoutProduct } from '../CheckoutProduct/CheckoutProduct';
import { useStateValue } from '../StateProvider';
import { SubTotal } from '../SubTotal/SubTotal';

export const Checkout = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSinv-QvsKWY-plUEafGb3Nx40kVKJ2MBMnPy_aV_bXH0XhNxUNNjPiZObDtaVpVfn9bQ&usqp=CAU" alt="" />
                <div>
                    <h3>Hello {!user ? "Guest" : user.email}</h3>
                    <h2 className="checkout__title">
                        Your shopping Basket
                    </h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating} />
                    )
                    )}
                </div>
            </div>
            <div className='checkout__right'>
                <SubTotal />

            </div>
        </div>
    )
}
