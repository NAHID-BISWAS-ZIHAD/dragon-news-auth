import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import LeftSideNavbar from "../shared/LeftSideNavbar/LeftSideNavbar";
import NavBar from "../shared/NavBar/NavBar";
import RightSideNavbar from "../shared/RightSideNavbar/RightSideNavbar";
import BreakingNews from "./BreakingNews";
import AllNews from "./AllNews";

const Home = () => {
    const allNews = useLoaderData();
    
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <NavBar></NavBar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                <div>
                    <LeftSideNavbar></LeftSideNavbar>
                </div>
                <div className="md:col-span-2">
                    {
                        allNews.map(aNews => <AllNews news={aNews} key={aNews._id}></AllNews>)
                    }
                </div>
                <div>
                    <RightSideNavbar></RightSideNavbar>
                </div>
            </div>
        </div>
    );
};

export default Home;