import "./Navbar.css";
import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h2>Navigation bar:</h2>
            <div className="links">
                <Link to="/">Home</Link>              {/*like <a href ..> but used with routes in order to change route on press */}
                <Link to="/create">New block</Link>
                <Link to="/delete">Destroy block</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;