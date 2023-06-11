import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddClass = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const onSubmit = (data) => {
        console.log(data)
        const formData = new FormData();
        formData.append("image", data.classImage[0]);
        console.log(formData);
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, instructor, availableSeats, price, rating } = data;
                    const newClass = {
                        image: imgURL,
                        name,
                        instructor,
                        instructorEmail: user.email,
                        availableSeats: parseInt(availableSeats),
                        price: parseFloat(price),
                        rating: parseFloat(rating),
                      };
                    console.log(newClass);
                    axiosSecure.post('/classes', newClass)
                        .then(data => {
                            console.log('after posting new item', data.data)
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Class added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })
    }


    return (
        <div className="w-full px-10">
            <h2 className="font-bold text-3xl text-center my-10">Add a Class</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Class Name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Class Image*</span>
                    </label>
                    <input
                        type="file"
                        {...register("classImage", { required: true })}
                        className="file-input file-input-bordered w-full"
                    />
                </div>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Name*</span>
                    </label>
                    <input
                        type="text"
                        readOnly
                        defaultValue={user.displayName}
                        className="input input-bordered w-full"
                        {...register("instructor", { required: true })}
                    />
                </div>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Email*</span>
                    </label>
                    <input
                        type="email"
                        defaultValue={user.email}
                        readOnly
                        className="input input-bordered w-full"
                        {...register("instructorEmail", { required: true })}
                    />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Available Seats*</span>
                    </label>
                    <input
                        type="number"
                        {...register("availableSeats", { required: true })}
                        placeholder="Available Seats"
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Price*</span>
                    </label>
                    <input
                        type="number"
                        {...register("price", { required: true })}
                        placeholder="Price"
                        className="input input-bordered w-full"
                    />
                </div>
                <input className="btn btn-sm mt-4" type="submit" value="Add Class" />
            </form>
        </div>
    );
};

export default AddClass;








