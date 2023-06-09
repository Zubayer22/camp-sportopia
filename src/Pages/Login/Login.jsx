import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleLogin = (data) => {
        const { email, password } = data;
        console.log(email, password);

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                Swal.fire("Good job!", "Logged In Successfully", "success");
                navigate(from, { replace: true });
            });
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <>
            <div className="container mx-auto my-10">
                <h1 className="text-4xl font-bold text-center">Login</h1>
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-md-1/2 w-full">
                        <img
                            src="https://i.ibb.co/fvwBx7T/undraw-secure-login-pdn4.png"
                            className="w-full"
                        />
                    </div>

                    <div className="w-md-1/2 w-full">
                        <form onSubmit={handleSubmit(handleLogin)} className="w-3/4 mx-auto">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    {...register("email", { required: true })}
                                    placeholder="Enter your email"
                                    className={`input input-bordered ${errors.email ? "input-error" : ""
                                        }`}
                                />
                                {errors.email && (
                                    <span className="text-red-500">Email is required</span>
                                )}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        {...register("password", { required: true })}
                                        placeholder="Enter your password"
                                        className={`input input-bordered pr-10 w-full ${errors.password ? "input-error" : ""
                                            }`}
                                    />
                                    <button
                                        type="button"
                                        className="absolute inset-y-0 right-0 flex items-center mr-2"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>
                                {errors.password && (
                                    <span className="text-red-500">Password is required</span>
                                )}
                            </div>

                            <div className="form-control mt-6">
                                <button className="secondary-custom-bg text-white px-6 py-3 rounded font-bold text-lg">
                                    Login
                                </button>
                            </div>
                            <p className="text-center pt-5">
                                Do not have an account?{" "}
                                <Link className="primary-custom-text" to="/signup">
                                    Sign Up
                                </Link>
                            </p>
                            <SocialLogin></SocialLogin>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;




