import { Link } from "react-router-dom";
import NavBar from "../shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;
        const name = e.target.name.value;
        console.log(email, password, photo, name);
        createUser(email,password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error =>{
            console.error(error);
        })
    }
    return (
        <div>
            <NavBar></NavBar>
            <p className="text-center text-2xl">Please Register Now</p>
            <form onSubmit={handleRegister} className="mx-auto card-body md:w-3/4 lg:w-1/2">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Enter your name" name="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                </div>
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
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
            <p className="text-center">Already have an account ? <Link className="text-blue-600 font-bold" to='/login'>Login</Link></p>
        </div>
    );
};

export default Register;