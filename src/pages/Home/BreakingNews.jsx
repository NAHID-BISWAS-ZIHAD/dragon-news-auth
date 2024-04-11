import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary font-bold">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link className="mr-4" to='/'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sint accusantium dolor, sit labore repellat enim, iusto hic ut dolorem debitis atque et fugiat reprehenderit sequi dolorum ipsa! Rerum, neque.</Link>
                <Link className="mr-4" to='/'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sint accusantium dolor, sit labore repellat enim, iusto hic ut dolorem debitis atque et fugiat reprehenderit sequi dolorum ipsa! Rerum, neque.</Link>
                <Link className="mr-4" to='/'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sint accusantium dolor, sit labore repellat enim, iusto hic ut dolorem debitis atque et fugiat reprehenderit sequi dolorum ipsa! Rerum, neque.</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;