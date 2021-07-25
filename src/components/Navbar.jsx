import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>React Blog</h1>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
      </div>
    </div>
  );
};

export default Navbar;
