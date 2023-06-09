import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire(
                    'Good job!',
                    'Logged In Successfully',
                    'success'
                );
                navigate(from, { replace: true })
            })

    }

    return (
        <>
            <div className="container mx-auto my-10">
                <h1 className="text-4xl font-bold text-center">Login</h1>
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-md-1/2 w-full'>
                        <img src="https://i.ibb.co/fvwBx7T/undraw-secure-login-pdn4.png" className="w-full" />
                    </div>

                    <div className='w-md-1/2 w-full'>
                        <form onSubmit={handleLogin} className='w-3/4 mx-auto'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Enter your password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="secondary-custom-bg text-white px-6 py-3 rounded font-bold text-lg">Login</button>
                            </div>
                            <p className='text-center pt-5'>Do not have an account? <Link className='primary-custom-text' to='/signup'>Sign Up</Link></p>
                            <SocialLogin></SocialLogin>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;