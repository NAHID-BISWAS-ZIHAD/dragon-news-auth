import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNavbar = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h2 className="text-2xl">All Categories</h2>

            <div className="p-4 space-y-4">
                {
                    categories.map(categorie => <NavLink className='block text-xl font-semiboldbold' to={`/categorie/${categorie.id}`} key={categorie.id}>{categorie.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default LeftSideNavbar;