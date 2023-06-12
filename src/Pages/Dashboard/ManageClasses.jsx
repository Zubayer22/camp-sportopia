import { FaTrashAlt } from 'react-icons/fa';
import useClass from '../../hooks/useClass';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useEffect, useState } from 'react';

const ManageClasses = () => {

    const [classes, , refetch] = useClass();
    const [axiosSecure] = useAxiosSecure();
    const [approvedClassIds, setApprovedClassIds] = useState([]);

    useEffect(() => {
        // Retrieve classes from the backend
        axiosSecure.get('/classes')
            .then(res => {
                const classData = res.data;
                const approvedIds = classData
                    .filter(classItem => classItem.status === 'approve')
                    .map(classItem => classItem._id);
                setApprovedClassIds(approvedIds);
            })
            .catch(error => {
                console.error('Error retrieving classes', error);
            });
    }, []);


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

                axiosSecure.delete(`/classes/${item._id}`)
                    .then(res => {
                        console.log('deleted res', res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    const handleApprove = (item) => {
        axiosSecure
            .put(`/classes/${item._id}/approve`)
            .then((res) => {
                if (res.data.success) {
                    refetch();
                    setApprovedClassIds((prevApprovedClassIds) => [
                        ...prevApprovedClassIds,
                        item._id,
                    ]);
                    Swal.fire('Success', 'Class status updated to "approve".', 'success');
                } else {
                    Swal.fire('Error', res.data.message, 'error');
                }
            })
            .catch((error) => {
                console.error('Error updating class status', error);
                Swal.fire('Error', 'Failed to update class status.', 'error');
            });
    };





    return (

        <div className="w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Course Name</th>
                        <th>Instructor Name</th>
                        <th>Instructor Email</th>
                        <th>Available Seats</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        classes.map((item, index) => <tr key={item._id}>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{item.name}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {item.instructor}
                            </td>
                            <td>
                                {item.instructorEmail}
                            </td>
                            <td>{item.availableSeats}</td>
                            <td>${item.price}</td>
                            <td>

                                {approvedClassIds.includes(item._id) ? (
                                    <span>Approved</span>
                                ) : (
                                    <div className="dropdown dropdown-left dropdown-hover">
                                        <label tabIndex={0} className="btn m-1">
                                            Pending
                                        </label>
                                        <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 z-50">
                                            <li
                                                className="btn"
                                                onClick={() => handleApprove(item)}
                                            >
                                                Approve
                                            </li>
                                            <li className="btn">Deny</li>
                                        </ul>
                                    </div>
                                )}

                                {/* The button to open modal */}
                                {/* <a href="#my_modal_8" className="btn">open modal</a> */}
                                {/* Put this part before </body> tag */}
                                {/* <div className="modal" id="my_modal_8">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg">Hello!</h3>
                                            <p className="py-4">This modal works with anchor links</p>
                                            <div className="modal-action">
                                                <a href="#" className="btn">Yay!</a>
                                            </div>
                                        </div>
                                    </div> */}
                            </td>
                            <td>
                                <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>

    );
};

export default ManageClasses;