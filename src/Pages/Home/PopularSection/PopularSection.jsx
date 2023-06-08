import { useEffect, useState } from "react";
import SingleClass from "./SingleClass";


const PopularSection = () => {
    const [popularClasses, setPopularClasses] = useState([]);
    useEffect(() => {
        fetch('classes.json')
            .then(res => res.json())
            .then(data => setPopularClasses(data))
    }, [])

    return (
        <div className="container mx-auto py-7 px-3 md:py-10 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                    popularClasses.map(popularClass => <SingleClass popularClass={popularClass}></SingleClass>)
                }
            </div>
        </div>

    );
};

export default PopularSection;