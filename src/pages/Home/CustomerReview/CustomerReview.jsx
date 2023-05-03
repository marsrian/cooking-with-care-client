import React from 'react';
import Slider from "react-slick";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import person1 from '../../../assets/p1.jpg';
import person2 from '../../../assets/p2.jpg';
import person3 from '../../../assets/p3.jpg';
import person4 from '../../../assets/p4.jpg';
import person5 from '../../../assets/p5.jpg';

const CustomerReview = () => {
    // React Slick Settings:
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
    return (
        <div>
            <h1 className="mb-3 text-5xl font-bold text-center">Our Testimonials</h1>
            <Slider className="mx-auto md:w-1/2 mb-20" {...settings}>
                <div>
                    <div className='text-center'>
                        <p className='italic'>"The burgers at Burger Joint were juicy and flavorful, with a great balance of toppings. The fries were crispy and well-seasoned too. The only downside was that the restaurant was a bit noisy."</p>
                        <Rating className='mx-auto' style={{ maxWidth: 150 }} value={4.5} readOnly />
                        <img className='w-20 h-20 mx-auto mt-2 rounded-full' src={person1} alt="" />
                        <h5 className='text-lg font-medium'>Charlie Brown</h5>
                    </div>
                </div>
                <div>
                    <div className='text-center'>
                        <p className='italic'>"Sushi Spot had some of the freshest sushi I've ever tasted. The fish was melt-in-your-mouth delicious, and the presentation was beautiful. The service was great too!"</p>
                        <Rating className='mx-auto' style={{ maxWidth: 150 }} value={4.8} readOnly />
                        <img className='w-20 h-20 mx-auto mt-2 rounded-full' src={person2} alt="" />
                        <h5 className='text-lg font-medium'>Eve Lee</h5>
                    </div>
                </div>
                <div>
                    <div className='text-center'>
                        <p className='italic'>"Pizza Palace had decent pizza, but it wasn't anything to write home about. The toppings were a bit sparse and the crust was a little bland. The garlic knots were tasty though."</p>
                        <Rating className='mx-auto' style={{ maxWidth: 150 }} value={5.0} readOnly />
                        <img className='w-20 h-20 mx-auto mt-2 rounded-full' src={person3} alt="" />
                        <h5 className='text-lg font-medium'>Bob Smith</h5>
                    </div>
                </div>
                <div>
                    <div className='text-center'>
                        <p className='italic'>"Thai Treasure had some of the best pad thai I've ever had. The noodles were perfectly cooked and the sauce was full of flavor. The restaurant had a cozy atmosphere and friendly staff."</p>
                        <Rating className='mx-auto' style={{ maxWidth: 150 }} value={4.2} readOnly />
                        <img className='w-20 h-20 mx-auto mt-2 rounded-full' src={person4} alt="" />
                        <h5 className='text-lg font-medium'>Alice Jones</h5>
                    </div>
                </div>
                <div>
                    <div className='text-center'>
                        <p className='italic'>"The BBQ at BBQ Barn was good, but not great. The meat was a bit dry and the sauce was a little too sweet for my taste. The sides were decent, but nothing special. The service was friendly though."</p>
                        <Rating className='mx-auto' style={{ maxWidth: 150 }} value={4.5} readOnly />
                        <img className='w-20 h-20 mx-auto mt-2 rounded-full' src={person5} alt="" />
                        <h5 className='text-lg font-medium '>Diana Garcia</h5>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default CustomerReview;