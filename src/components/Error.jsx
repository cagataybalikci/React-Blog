import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <h2>404 - Page Not Found.</h2>
      <p>
        The page you looking for might have been removed,
        <br />
        its name changed or temporarily unavailable.
      </p>
      <Link to="/">Home Page</Link>
    </div>
  );
};

export default Error;
