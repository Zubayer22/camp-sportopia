// import { useEffect, useState } from "react";
import { useQuery } from "react-query";


const useInstructor = () => {
    // const [instructor, setInstructor] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     fetch('http://localhost:3000/instructors')
    //         .then(res => res.json())
    //         .then(data => {
    //             setInstructor(data);
    //             setLoading(false);
    //         })
    // }, [])

    const { data: instructors = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            const res = await fetch('http://localhost:3000/instructors');
            return res.json();
        }
    })

    return [instructors, loading, refetch]
};

export default useInstructor;