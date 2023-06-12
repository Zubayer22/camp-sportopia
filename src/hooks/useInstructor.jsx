import { useQuery } from "react-query";


const useInstructor = () => {

    const { data: instructors = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            const res = await fetch('https://camp-sportopia-server.vercel.app/instructors');
            return res.json();
        }
    })

    return [instructors, loading, refetch]
};

export default useInstructor;