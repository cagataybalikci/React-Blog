import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const blog = { title, body, author, url };

    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      history.push("/");
    });
  };
  return (
    <div className="create-page">
      <div className="forms">
        <h1>Add a New Blog</h1>
        <form className="form" onSubmit={handleSubmit}>
          <label>Blog Title:</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Blog Body:</label>
          <textarea
            type="text"
            required
            rows={10}
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <label>Blog image:</label>
          <input
            type="text"
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <label>Blog Author:</label>
          <input
            type="text"
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button>Add Blog</button>
        </form>
      </div>
      <div className="picture">
        <img
          src="https://www.nicepng.com/png/detail/266-2666972_software-developer.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Create;
