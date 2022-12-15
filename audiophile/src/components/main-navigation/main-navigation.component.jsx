
const MainNavigation = () => {

    const menuItems = [
        {
            "id": 1,
            "title": "Home",
            "url": "#"
        },
        {
            "id": 2,
            "title": "Speakers",
            "url": "#"
        },
        {
            "id": 3,
            "title": "Headphones",
            "url": "#"
        },
        {
            "id": 4,
            "title": "Earphones",
            "url": "#"
        }
    ];

    return (
        <nav className="nav-desktop">
            <ul>
                {menuItems.map((item) => (
                    <li key={item.id}><a href={item.url}>{item.title}</a></li>
                ))}
            </ul>
        </nav>
    );
}

export default MainNavigation;