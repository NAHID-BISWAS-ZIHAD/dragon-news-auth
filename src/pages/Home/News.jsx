import { useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import NavBar from "../shared/NavBar/NavBar";
import RightSideNavbar from "../shared/RightSideNavbar/RightSideNavbar";

const News = () => {
    const {id} = useParams()
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <div className="grid md:grid-cols-4">
                <div className="col-span-3">
                    <h2>News details</h2>
                    <p>{id}</p>
                </div>
                <div>
                    <RightSideNavbar></RightSideNavbar>
                </div>
            </div>
        </div>
    );
};

export default News;