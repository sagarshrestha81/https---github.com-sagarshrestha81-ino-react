import { Link } from "react-router-dom";
export default function Sidebar() {
 

    return(
        <nav className="d-flex gap-3">
            <Link to="/">Dashboard</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/about">about</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/hook">Hook</Link>
            <Link to="/fetch">Fetch</Link>
        </nav>
    )

}
