import Rating from "react-rating";
import { FaStar } from 'react-icons/fa';
import { Link } from "react-router-dom";


const SingleClassCard = ({ popularClass }) => {
    const { _id, image, name, instructor, availableSeats, price, rating } = popularClass;
    return (
        <div className="card card-compact secondary-custom-bg text-white rounded-none relative">
            <figure><img className="w-full h-60" src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{name}</h2>
                <div className="absolute right-0 top-0 primary-custom-bg">
                    <Rating
                        placeholderRating={rating}
                        emptySymbol={<FaStar className='text-[#b0b0b0]'></FaStar>}
                        placeholderSymbol={<FaStar className='text-[#F4C610]'></FaStar>}
                        fullSymbol={<FaStar className='text-[#F4C610]'></FaStar>}
                        readonly
                    />
                </div>

                <h4 className="text-xl font-bold">Course Fee: ${price}</h4>
                <p>Instructor: <b>{instructor}</b></p>
                <p>Available Seats: <b>{availableSeats}</b></p>
                <div className="card-actions justify-end">
                    <Link to={`/classes/${_id}`}>
                        <button className="btn accent-custom-bg text-white hover:bg-transparent hover:border hover:border-black hover:text-black ">Learn More</button>
                    </Link>
                    <button className="btn primary-custom-bg text-white hover:bg-transparent hover:border hover:border-black hover:text-black ">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleClassCard;