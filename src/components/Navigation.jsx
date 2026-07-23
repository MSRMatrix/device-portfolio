import { NavLink } from "react-router-dom";

import guitar from "@/assets/images/hobbies/guitar.png"


const Navigation = () => {

   const navArray = [
    {
        name: "Start",
        path: "/",
        image: "/images/home.png"
    },
    {
        name: "Über mich",
        path: "/about",
        image: "/images/about.png"
    },
    {
        name: "Projekte",
        path: "/projects",
        image: "/images/projects.png"
    },
    {
        name: "Werdegang",
        path: "/resume",
        image: "/images/career.png"
    },
    {
        name: "Hobbies",
        path: "/hobbies",
        image: guitar
    },
    {
        name: "Kontakt",
        path: "/contact",
        image: "/images/contact.png"
    }
];


    return (
    <nav className="book-navigation">

    {
        navArray.map((item) => (

            <NavLink
                key={item.path}
                to={item.path}
                className="chapter-link"
            >

                <img 
                    src={item.image}
                    alt={item.name}
                />

                <span>
                    {item.name}
                </span>

            </NavLink>

        ))
    }

</nav>
    );
};


export default Navigation;