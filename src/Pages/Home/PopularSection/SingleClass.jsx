

const SingleClass = ({popularClass}) => {
    const {image, name, instructor, availableSeats, price} = popularClass;
    return (
        <div className="card card-compact bg-base-100 rounded-none">
            <figure><img className="w-full h-60" src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{instructor}</p>
                <p>{availableSeats}</p>
                <p>${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn primary-custom-bg text-white hover:bg-transparent hover:border hover:border-black hover:text-black ">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleClass;