import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-card" key={blog.id}>
          <img src={blog.url} alt="" className="card-image" />
          <div className="card-content">
            <Link className="link" to={`/blogs/${blog.id}`}>
              <h1>{blog.title}</h1>
            </Link>
            <small className="author-info">
              <strong>Author</strong>
              <br />
              {blog.author}
            </small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
