import Pagination from "./Pagination";
import PostList from "./PostList";
import PostSidebar from "./PostSidebar";

const Main = () => {
  return (
    <section className="w-full h-full bg-[#F5F4F4] border border-transparent bg-opacity-50">
      <div className="w-full max-w-7xl mx-auto px-4 xl:px-0 mt-28 flex flex-col md:flex-row-reverse ">
        <div className="w-full md:w-2/3">
          <PostList />
          <Pagination />
        </div>
        <div className="w-full md:w-1/3">
          <PostSidebar />
        </div>
      </div>
    </section>
  );
};

export default Main;
