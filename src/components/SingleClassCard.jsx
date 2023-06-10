import Rating from "react-rating";
import { FaStar } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";


const SingleClassCard = ({ popularClass }) => {
    const { _id, image, name, instructor, availableSeats, price, rating } = popularClass;
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleSelectItem = item => {
        console.log(item);
        if(user){
            const orderItem = {classItemId: _id, name, image, price, email: user.email}
            fetch('http://localhost:3000/carts',{
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire(
                        'Good job!',
                        'Course added on Selected Item',
                        'success'
                    )
                }
            })
        }
        else {
            Swal.fire({
                title: 'Please login to enroll the course',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from: location}});
                }
            })
        }
    }

    return (
        <div className="card card-compact secondary-custom-bg text-white rounded-none relative">
            <figure><img className="w-full h-60" src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{name}</h2>
                <div className="absolute right-0 top-0 primary-custom-bg">
                    <Rating
                        placeholderRating={rating ? rating : '5'}
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
                    <button onClick={handleSelectItem} className="btn primary-custom-bg text-white hover:bg-transparent hover:border hover:border-black hover:text-black ">Enroll Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleClassCard;