import useFetch from "../toolbox/useFetch";
import { useHistory, useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const history = useHistory();

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <img className="blog-image" src={blog.url} alt="" />
          <button onClick={handleClick} className="btnDelete">
            delete
          </button>
          <h2>{blog.title}</h2>

          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetail;
