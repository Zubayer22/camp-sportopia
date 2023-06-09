import Rating from "react-rating";
import { FaStar } from 'react-icons/fa';
import { Link } from "react-router-dom";


const SingleClass = ({ popularClass }) => {
    const { _id, image, name, instructor, availableSeats, price, rating } = popularClass;
    return (
        <div className="card card-compact bg-base-100 rounded-none">
            <figure><img className="w-full h-60" src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <Rating
                    placeholderRating={rating}
                    emptySymbol={<FaStar className='text-[#b0b0b0]'></FaStar>}
                    placeholderSymbol={<FaStar className='text-[#F4C610]'></FaStar>}
                    fullSymbol={<FaStar className='text-[#F4C610]'></FaStar>}
                    readonly
                />
                <p>{instructor}</p>
                <p>{availableSeats}</p>
                <p>${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/classes/${_id}`}>
                        <button className="btn primary-custom-bg text-white hover:bg-transparent hover:border hover:border-black hover:text-black ">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleClass;