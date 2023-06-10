import { FaTrash, FaUserShield } from 'react-icons/fa';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const ManageUsers = () => {

    const [axiosSecure] = useAxiosSecure();

    // const { data: users = [], refetch } = useQuery(['users'], async () => {
    //     const res = await fetch('http://localhost:3000/users')
    //     return res.json();
    // })
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleDelete = user => {

    }

    // const handleMakeAdmin = user => {
    //     fetch(`http://localhost:3000/users/admin/${user._id}`, {
    //         method: 'PATCH'
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.modifiedCount) {
    //                 refetch();
    //                 Swal.fire({
    //                     position: 'top-end',
    //                     icon: 'success',
    //                     title: `${user.name} is now admin`,
    //                     showConfirmButton: false,
    //                     timer: 1500
    //                 })
    //             }
    //         })
    // }

    const handleRoleChangeToAdmin = (user) => {
        const userId = user._id;

        axiosSecure.patch(`/users/${userId}/role/admin`)
            .then((response) => {
                const updatedUser = response.data;
                refetch();

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is now an admin`,
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong while updating the user role'
                });
            });
    };

    const handleRoleChangeToInstructor = (user) => {
        const userId = user._id;

        axiosSecure.patch(`/users/${userId}/role/instructor`)
            .then((response) => {
                const updatedUser = response.data;
                refetch();

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is now an instructor`,
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong while updating the user role'
                });
            });
    };

    const handleRoleChangeToStudent = (user) => {
        const userId = user._id;

        axiosSecure.patch(`/users/${userId}/role/student`)
            .then((response) => {
                const updatedUser = response.data;
                refetch();

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is now a student`,
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong while updating the user role'
                });
            });
    };


    return (
        <div>
            <h3 className="text-3xl font-bold">Total Users: {users.length}</h3>
            <div className="">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>User Role</th>
                            <th>Change Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.role ? user.role : 'student'}

                                    {
                                        // user.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user)} className="btn btn-primary"><FaUserShield></FaUserShield></button>

                                    }

                                </td>
                                <td>
                                    <div className="dropdown dropdown-right dropdown-hover">
                                        <label tabIndex={0} className="btn m-1">Change Role</label>
                                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box">
                                            <li>
                                                <a onClick={() => handleRoleChangeToAdmin(user, 'admin')}>
                                                    To Admin
                                                </a>
                                            </li>
                                            <li>
                                                <a onClick={() => handleRoleChangeToInstructor(user, 'instructor')}>
                                                    To Instructor
                                                </a>
                                            </li>
                                            <li>
                                                <a onClick={() => handleRoleChangeToStudent(user, 'student')}>
                                                    To Student
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                                <td><button onClick={() => handleDelete(user)} className="btn btn-error"><FaTrash></FaTrash></button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;