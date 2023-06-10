import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import Swal from "sweetalert2";

const SignUp = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
        // console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                // updateUserProfile(data.name, data.photoURL)
                //     .then(() => {
                //         Swal.fire({
                //             position: 'top-end',
                //             icon: 'success',
                //             title: 'Your profile has been updated successfully',
                //             showConfirmButton: false,
                //             timer: 1500
                //         });
                //     })

                updateUserProfile(data.name, data.photURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email };

                        fetch('http://localhost:3000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {

                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Your profile has been updated successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');

                                }
                            })
                    })
                    .catch(error => console.log(error));
            })
    };

    const password = watch("password");

    return (
        <>
            <div className="container mx-auto my-10">
                <h1 className="text-4xl font-bold text-center">Sign Up</h1>
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-md-1/2 w-full'>
                        <img src="https://i.ibb.co/fvwBx7T/undraw-secure-login-pdn4.png" className="w-full" />
                    </div>

                    <div className='w-md-1/2 w-full'>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                                {errors.name && <span className="text-red-500">Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} placeholder="Photo url" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-500">URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-500">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <span className="text-red-500">Password is required</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-500">Password must be 6 characters</span>}
                                {errors.password?.type === 'maxLength' && <span className="text-red-500">Password must be less than 20 characters</span>}
                                {errors.password?.type === 'pattern' && <span className="text-red-500">Password must have one special character, capital letter, small letter and number</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input
                                    type="password"
                                    {...register("confirmPassword", {
                                        required: true,
                                        validate: (value) => value === password || "Passwords do not match"
                                    })}
                                    placeholder="confirm password"
                                    className="input input-bordered"
                                />
                                {errors.confirmPassword && (
                                    <span className="text-red-500">
                                        {errors.confirmPassword.message}
                                    </span>
                                )}
                            </div>

                            <div className="form-control mt-6">
                                <input className="btn secondary-custom-bg text-white" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className="text-center"><small>Already register? <Link className="primary-custom-text" to="/login">Log In</Link> </small></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;