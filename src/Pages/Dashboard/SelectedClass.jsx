import { FaTrash } from 'react-icons/fa';
import useSelectedItem from '../../hooks/useSelectedItem';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const SelectedClass = () => {
    const [cart, refetch] = useSelectedItem();
    const total = cart.reduce((sum, item) => item.price + sum, 0);

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/carts/${item._id}`, {
                    method: 'DELETE',

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your item has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }


    return (
        <div>
            <div className="flex justify-evenly h-[60px] items-center">
                <h2 className="text-3xl font-bold">Total items: {cart.length}</h2>
                <h2 className="text-3xl font-bold">Total Price: ${total}</h2>
                <Link to='/dashboard/payment'><button className="btn btn-warning btn-sm">Proceed to checkout</button></Link>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Course Image</th>
                            <th>Course Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    $ {item.price}
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-error"><FaTrash></FaTrash></button>
                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );

}

export default SelectedClass;