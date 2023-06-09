import { Link } from "react-router-dom";

const SingleInstructorCard = ({ instructor }) => {
    const { _id, image, name, email, numClassesTaken, classesTaken } = instructor;
    return (
        <div className="card card-compact bg-base-100 rounded-none">
            <figure><img className="w-full h-60" src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Email: <b>{email}</b></p>
                <p>Total class: {numClassesTaken}</p>
                {/* <p>{classesTaken}</p> */}
                <div className="card-actions">
                    <Link to={`/instructors/${_id}`}>
                        <button className="btn primary-custom-bg text-white hover:bg-transparent hover:border hover:border-black hover:text-black ">Learn More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleInstructorCard;