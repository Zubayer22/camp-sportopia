import { useLoaderData } from "react-router-dom";


const SingleInstructorPage = () => {
    const singleInstructorDetails = useLoaderData();
    const {image, name, email, numClassesTaken, classesTaken} = singleInstructorDetails;
    return (
        <div className='container mx-auto py-10'>
            <div className="hero">

                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-md-1/2 w-full'>
                        <img src={image} className="w-full" />
                    </div>

                    <div className='w-md-1/2 w-full'>
                        <h1 className="text-3xl font-bold">{name}</h1>
                    
                        <p className='text-2xl font-bold mb-5'>{email}</p>

                        <p>Total Class Taken: <b>{numClassesTaken}</b></p>
                        <p>Class List: {classesTaken.map(i => <p>{i}</p>)}</p>
                        {/* <p className='mt-5'><b>Product Description:</b> <br />{description}</p>
                        <div className='mt-5'>
                            <h4 className='text-xl font-bold'>Seller Details</h4>
                            <p>Name: {seller_name}</p>
                            <p>Email: {seller_email}</p>
                        </div> */}
                        <button className='mt-10 secondary-custom-bg text-white px-6 py-3 rounded font-bold text-lg'>Contact With Instructor</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleInstructorPage;