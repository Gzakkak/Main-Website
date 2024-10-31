import { Link } from 'react-router-dom';
import '../App.css';

function Header({ toggleSidebar }) {
  return (
    <header>
      <h1>George Zakkak</h1>
      <div
        onClick={toggleSidebar} // Open sidebar on hover
        className="menu-button"
      >
        Get to know me!
      </div>
      <Link to="/contact" className="connect-button">
        Connect with Me!
      </Link>
    </header>
  );
}

export default Header;
