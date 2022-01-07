import { useNavigate, useParams } from "react-router-dom";
import Heading from "./Heading";
import useFetch from "./Usefetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  
  const history = useNavigate();

  const handleClick = () => {
      fetch('http://localhost:8000/blogs/' + blog.id, {
          method: "DELETE", 
      }).then(() => {
        history('/');    
      })
  }

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <Heading text={blog.title}/>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
}
 
export default BlogDetails;