import BlogList from "./BlogList";
import UseFetch from "./Usefetch";

const Home = () => {
 const { data: blogs, isPending, error } = UseFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
        { error && <div>{error}</div> }
        { isPending && <div>loading....</div> }
        {blogs && <BlogList blogs={blogs} title="All blogs"/>}
    </div>
  );
}
 
export default Home;