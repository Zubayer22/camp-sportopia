import { Link } from "react-router-dom";


const SingleInstructor = ({ instructor }) => {
    const { _id, image, name, email, numClassesTaken, classesTaken } = instructor;
    return (
        <div className="card card-compact bg-base-100 rounded-none">
            <figure><img className="w-full h-60" src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{email}</p>
                <p>{numClassesTaken}</p>
                <p>{classesTaken}</p>
                <div className="card-actions justify-end">
                    <Link to={`/instructors/${_id}`}>
                        <button className="btn primary-custom-bg text-white hover:bg-transparent hover:border hover:border-black hover:text-black ">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleInstructor;