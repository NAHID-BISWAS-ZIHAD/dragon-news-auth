import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const { signIn } = useContext(AuthContext)
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn(email, password)
            .then(result => {
                console.log(result.user);

                {
                    navigate(location?.state ? location.state : '/')
                }
            })
            .catch(error => {
                console.error(error.message);
            })
    }
    return (
        <div>
            <NavBar></NavBar>
            <p className="text-center text-2xl">Please Login Now</p>
            <form onSubmit={handleLogin} className="mx-auto card-body md:w-3/4 lg:w-1/2">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <p className="text-center">Do not have an account ? <Link className="text-blue-600 font-bold" to='/register'>Register</Link></p>
        </div>
    );
};

export default Login;