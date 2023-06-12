// import { useEffect, useState } from "react";
import { useQuery } from "react-query";


const useClass = () => {

    // const [classes, setClasses] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     fetch('https://camp-sportopia-server.vercel.app/classes')
    //         .then(res => res.json())
    //         .then(data => {
    //             setClasses(data);
    //             setLoading(false);
    //         })
    // }, [])
    const { data: classes = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('https://camp-sportopia-server.vercel.app/classes');
            return res.json();
        }
    })

    return [classes, loading, refetch]
};

export default useClass;