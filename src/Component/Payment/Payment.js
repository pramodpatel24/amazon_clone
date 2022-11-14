import React from 'react';
import { Link } from 'react-router-dom';
import { CheckoutProduct } from '../CheckoutProduct/CheckoutProduct';
import '../Payment/Payment.css';
import { useStateValue } from '../StateProvider';

export const Payment = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
                </h1>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address :</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>T Marg, Katol Road, Nagpur</p>
                        <p>Maharashtra, India-440013</p>
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery details</h3>
                    </div>
                    <div className='payment__items'>
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
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__detail'>

                    </div>
                </div>
            </div>
        </div>
    )
}
