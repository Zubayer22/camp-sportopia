import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useQuery } from 'react-query';

const useSelectedItem = () => {
    const { user, loading } = useContext(AuthContext);

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:3000/carts?email=${user?.email}`)
            return res.json();
        },

        // enabled: !!user?.email && !!localStorage.getItem('access-token')
    })

    return [cart, refetch]
};

export default useSelectedItem;