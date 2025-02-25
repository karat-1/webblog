import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import "bootstrap/dist/css/bootstrap.min.css";
import BlogPost from "./pages/BlogPostPage";
import { blogPosts } from "./lib/mdxloader";
import "./App.css";


export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    return window.location.hash.replace("#", "") || "home";
  });

  useEffect(() => {
    window.location.hash = currentPage;
  }, [currentPage]);

  const renderPage = () => {

    if (currentPage.startsWith("blog-")) {
      const slug = currentPage.replace("blog-", "");
      const post = blogPosts.find((p) => p.slug === slug);
      if (!post) return <h1>404 - Blog Post Not Found</h1>;

      return <BlogPost post={post} setCurrentPage={setCurrentPage} />;
    }


    switch (currentPage) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "blogs":
        return <Blog setCurrentPage={setCurrentPage} />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Navbar setCurrentPage={setCurrentPage} />
      <div className="content">{renderPage()}</div>
    </>
  );
}
