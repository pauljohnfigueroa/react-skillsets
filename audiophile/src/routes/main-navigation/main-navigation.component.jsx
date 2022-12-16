import { Link } from "react-router-dom";

const MainNavigation = () => {

    const menuItems = [
        {
            "id": 1,
            "title": "Home",
            "url": "/"
        },
        {
            "id": 2,
            "title": "Speakers",
            "url": "/speakers"
        },
        {
            "id": 3,
            "title": "Headphones",
            "url": "/headphones"
        },
        {
            "id": 4,
            "title": "Earphones",
            "url": "/earphones"
        }
    ];

    return (
        <nav className="nav-desktop">
            <ul>
                {menuItems.map((item) => (
                    <li key={item.id}>
                        <Link to={item.url}>{item.title}</Link>

                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default MainNavigation;