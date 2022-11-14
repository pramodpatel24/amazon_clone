import React from 'react';
import '../Home/Home.css';
import { Product } from '../Product/Product';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';

export const Home = () => {
    return (
        <div className='home'>
            {/* <div className='home__container'>
                <img className="home__image" src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/amazon-app-icon-on-new-ipad-muhla1.jpg" alt="home_image" />
            </div> */}
            <ImageSlider slides={SliderData} />
            <div className='home__row'>
                <Product id={1235} title={"Realativity by Albert Eientein"}
                    price={29.99} image={"https://images-eu.ssl-images-amazon.com/images/I/813ExjDkhxS._AC._SR360,460.jpg"}
                    rating={5} />
                <Product id={125635} title={"Amazon alexa audio "}
                    price={209.99} image={"https://th.bing.com/th/id/OIP.1ZYx_NVuvP5AFCPHMiw5NgHaEW?pid=ImgDet&rs=1"}
                    rating={4} />

            </div>
            <div className='home__row'>
                <Product id={15635} title={"Amazon 2021 Deals : kitchen Gadgets And Cookware Items - Gadget Reporter"}
                    price={29.99} image={"https://th.bing.com/th/id/R.174a0f2e4bb92fe0a634415941a9c702?rik=E90irQvkwYao4Q&riu=http%3a%2f%2fthegadgetreporter.com%2fwp-content%2fuploads%2f2021%2f01%2fnonstick-pan-1024x1004.jpg&ehk=ihlG%2f56kxEhFBDYXigVWPSLjuYqmVzUc2osh86LSFoQ%3d&risl=&pid=ImgRaw&r=0"}
                    rating={4} />
                <Product id={126635} title={"Cool Items: Amazon.com"}
                    price={2369.40} image={"https://images-na.ssl-images-amazon.com/images/I/518o2PW2XzL._SL500_.jpg"}
                    rating={3} />
                <Product id={12935} title={"How to Test, Review and Keep the Hottest New Products on Amazon | Trynding"}
                    price={54.30} image={"https://images-eu.ssl-images-amazon.com/images/I/41pfjyUPZLL._SX300_SY300_QL70_FMwebp_.jpg"}
                    rating={5} />
            </div>
            <div className='home__row'>
                <Product id={125} title={"15 Must-Have Amazon Prime Items | The Sweetest Thing"}
                    price={125.369} image={"https://m.media-amazon.com/images/I/51vMxABmTqL._SY355_.jpg"}
                    rating={2} />
            </div>

        </div>
    )
}
