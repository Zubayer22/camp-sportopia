
import { useEffect } from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';

const SingleClassPage = () => {

    const singleClassDetails = useLoaderData();
    const {  name, image, price, rating, instructor, availableSeats } = singleClassDetails;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className='container mx-auto py-10'>
            <div className="hero">
        
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-md-1/2 w-full'>
                        <img src={image} className="w-full" />
                    </div>

                    <div className='w-md-1/2 w-full'>
                        <h1 className="text-3xl font-bold">{name}</h1>
                        <div className='flex items-center my-5'>
                            <Rating
                                placeholderRating={rating ? rating : '5'}
                                emptySymbol={<FaStarHalf className='text-[#F4C610]'></FaStarHalf>}
                                placeholderSymbol={<FaStar className='text-[#F4C610]'></FaStar>}
                                fullSymbol={<FaStar className='text-[#F4C610]'></FaStar>}
                                readonly
                            />
                            <p className='font-bold'>{rating}</p>
                        </div>
                        <p className='text-2xl font-bold mb-5'>$ {price}</p>

                        <p>Instructor Name: <b>{instructor}</b></p>
                        <p>Available Seats: {availableSeats}</p>
                        {/* <p className='mt-5'><b>Product Description:</b> <br />{description}</p>
                        <div className='mt-5'>
                            <h4 className='text-xl font-bold'>Seller Details</h4>
                            <p>Name: {seller_name}</p>
                            <p>Email: {seller_email}</p>
                        </div> */}
                        <button className='mt-10 secondary-custom-bg text-white px-6 py-3 rounded font-bold text-lg'>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleClassPage;