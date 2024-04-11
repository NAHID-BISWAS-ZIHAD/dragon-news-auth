import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa6";
import qzone from '../../../assets/qZone1.png'
import qzone1 from '../../../assets/qZone2.png'
import qzone2 from '../../../assets/qZone3.png'
const RightSideNavbar = () => {
    return (
        <div>
            <div className="space-y-3 p-4">
                <h1 className="text-3xl">Login with</h1>
                <button className="btn btn-outline w-full">
                <FaGoogle></FaGoogle>
                    Google
                </button>
                <button className="btn btn-outline w-full">
                <FaGithub></FaGithub>
                    Github
                </button>
            </div>
            <div className="p-4">
                <h1 className="text-3xl mb-3">Find us on</h1>
                <a href="" className="flex items-center border p-3 rounded-t-lg">
                    <FaFacebook className="mr-3"></FaFacebook>
                    Facebook
                </a>
                <a href="" className="flex items-center border p-3 border-x">
                    <FaTwitter className="mr-3"></FaTwitter>
                    Twitter
                </a>
                <a href="" className="flex items-center border p-3 rounded-b-lg">
                    <FaInstagram className="mr-3"></FaInstagram>
                    Instagram
                </a>
            </div>
            <div className="space-y-3 p-4 bg-[#F3F3F3]">
                <h1 className="text-3xl">Q Zone</h1>
                <img src={qzone} alt="" />
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
            </div>
        </div>
    );
};

export default RightSideNavbar;