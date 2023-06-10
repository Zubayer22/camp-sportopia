// import { useEffect, useState } from "react";
import { useQuery } from "react-query";


const useClass = () => {

    // const [classes, setClasses] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     fetch('http://localhost:3000/classes')
    //         .then(res => res.json())
    //         .then(data => {
    //             setClasses(data);
    //             setLoading(false);
    //         })
    // }, [])
    const { data: classes = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('http://localhost:3000/classes');
            return res.json();
        }
    })

    return [classes, loading, refetch]
};

export default useClass;