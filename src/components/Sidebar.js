import { Link } from "react-router-dom";
export default function Sidebar() {
 

    return(
        <nav>
            <Link to="/">Dashboard</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/about">about</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/blog">Blog</Link>
        </nav>
    )

}
