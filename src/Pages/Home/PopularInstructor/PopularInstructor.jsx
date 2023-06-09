import { useEffect, useState } from "react";
import SingleInstructor from "./SingleInstructor";


const PopularInstructor = () => {
    const [popularInstructor, setPopularInstructor] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/instructors')
            .then(res => res.json())
            .then(data => setPopularInstructor(data))
    }, [])
    return (
        <div className="container mx-auto py-7 px-3 md:py-10 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                    popularInstructor.map(instructor => <SingleInstructor key={instructor._id} instructor={instructor}></SingleInstructor>)
                }
            </div>
        </div>
    );
};

export default PopularInstructor;